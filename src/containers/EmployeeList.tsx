import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import EmployeeCard from '../components/EmployeeCard'
import { ErrorMessage, Loader } from '../components/styledComponents'
import useAxios from '../hooks/useAxios'
import { Employee } from '../types/employee'

const Header = styled.h1`
  padding: 20px;
  font-weight: bold;
  text-align: center;
`
const EmployeeContainer = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, 300px);
  justify-content: center;
  margin: 0 2vw;
`

const EmployeeList = () => {
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([])

  const { isLoading, hasError, response: employees } = useAxios<Employee[]>('https://api-dev.1337co.de/v3/employees')
  useEffect(() => {
    if (employees) {
      setFilteredEmployees(employees.filter(emp => emp.published))
    }
  }, [employees])

  return (
    <>
      <Header>The fellowship of tretton37</Header>
      {isLoading && <Loader />}
      {hasError && <ErrorMessage>Error loading employees :(</ErrorMessage>}
      <EmployeeContainer>
        {filteredEmployees.map(emp => (
          <EmployeeCard key={emp.name} employee={emp} />
        ))}
      </EmployeeContainer>
    </>
  )
}

export default EmployeeList
