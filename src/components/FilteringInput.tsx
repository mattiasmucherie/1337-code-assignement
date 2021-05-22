import React from 'react'
import styled from 'styled-components'
import { Employee } from '../types/employee'

const InputContainer = styled.div`
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
  const onChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const inputText = e.target.value.toLowerCase()
    if (employees) {
      setFilteredEmployees(
        employees.filter(emp => {
          const employeeName = emp.name.toLowerCase()
          const employeeOffice = emp.office?.toLowerCase()
          return employeeName.includes(inputText) || employeeOffice?.includes(inputText)
        })
      )
    }
  }
  return (
    <InputContainer>
      <Input onChange={onChange} placeholder="Filter by name or office" aria-label="filtering-input" />
    </InputContainer>
  )
}

export default FilteringInput
