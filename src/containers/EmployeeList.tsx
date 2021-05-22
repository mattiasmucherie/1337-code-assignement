import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import DisplayChoice from '../components/DisplayChoice'
import EmployeeCard from '../components/EmployeeCard'
import FilteringInput from '../components/FilteringInput'
import Sorting from '../components/Sorting'
import { ErrorMessage, Loader } from '../components/styledComponents'
import useAxios from '../hooks/useAxios'
import { Employee } from '../types/employee'
import { sortByName, sortByOffice } from '../utils/sortingUtils'

const Header = styled.h1`
  padding: 20px;
  font-weight: bold;
  text-align: center;
`
interface EmployeeContainerProps {
  displayMethod: string
}
const EmployeeContainer = styled.section<EmployeeContainerProps>`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: ${props => (props.displayMethod === 'grid' ? 'repeat(auto-fit, 300px)' : '1fr')};
  justify-content: center;
  margin: 0 2vw;
`
const ChoiceContainer = styled.section`
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
`

const EmployeeList = () => {
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([])
  const [sortMethod, setSortMethod] = useState('name')
  const [displayMethod, setDisplayMethod] = useState('grid')

  const { isLoading, hasError, response: employees } = useAxios<Employee[]>('https://api-dev.1337co.de/v3/employees')
  useEffect(() => {
    if (employees) {
      setFilteredEmployees(employees.filter(emp => emp.published))
    }
  }, [employees])

  const employeesToDisplay = useMemo(
    () => (sortMethod === 'name' ? sortByName([...filteredEmployees]) : sortByOffice([...filteredEmployees])),
    [filteredEmployees, sortMethod]
  )

  return (
    <>
      <Header>The fellowship of tretton37</Header>
      <FilteringInput setFilteredEmployees={setFilteredEmployees} employees={employees} />
      <ChoiceContainer>
        <Sorting setSortMethod={setSortMethod} sortMethod={sortMethod} />
        <DisplayChoice setDisplayMethod={setDisplayMethod} displayMethod={displayMethod} />
      </ChoiceContainer>
      {isLoading && <Loader />}
      {hasError && <ErrorMessage>Error loading employees :(</ErrorMessage>}
      <EmployeeContainer displayMethod={displayMethod}>
        {employeesToDisplay.map(emp => (
          <EmployeeCard key={emp.name} employee={emp} displayMethod={displayMethod} />
        ))}
      </EmployeeContainer>
    </>
  )
}

export default EmployeeList
