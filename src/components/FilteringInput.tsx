import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Employee } from '../types/employee'
import useDebounce from '../hooks/useDebounce'

const InputContainer = styled.section`
  margin: 0 10vw 20px;
`

const Input = styled.input`
  width: 100%;
  font-family: inherit;
  padding: 0 0 2px;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 20px;
  line-height: 18px;
  transition: box-shadow 0.1s ease-out 0s;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0;
`

interface FilteringInputProps {
  setFilteredEmployees: React.Dispatch<React.SetStateAction<Employee[]>>
  employees: Employee[] | null
}
const FilteringInput: React.VFC<FilteringInputProps> = ({ setFilteredEmployees, employees }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 200)

  useEffect(() => {
    if (employees) {
      setFilteredEmployees(
        employees.filter(emp => {
          const employeeName = emp.name.toLowerCase()
          const employeeOffice = emp.office?.toLowerCase()
          return employeeName.includes(debouncedSearchTerm) || employeeOffice?.includes(debouncedSearchTerm)
        })
      )
    }
  }, [debouncedSearchTerm, employees, setFilteredEmployees])

  return (
    <InputContainer>
      <Input
        onChange={e => setSearchTerm(e.target.value.toLowerCase())}
        placeholder="Filter by name or office"
        aria-label="filtering-input"
      />
    </InputContainer>
  )
}

export default FilteringInput
