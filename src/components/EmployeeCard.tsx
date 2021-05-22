import React from 'react'
import styled from 'styled-components'
import { Employee } from '../types/employee'

const Card = styled.div`
  background: #ffffff;
  box-shadow: 1px 2px 3px rgba(220, 221, 224, 0.6);
  padding: 10px;
  display: flex;
  flex-direction: row;
`
const PortraitImage = styled.img`
  width: 115px;
  height: 153px;
  min-width: 115px;
  border-radius: 0 0 5px 5px;
  margin: 5px;
`
const EmployeeInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: 'column';
  justify-content: space-between;
`
const EmployeeName = styled.h3`
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 0;
`
const EmployeeOffice = styled.p`
  font-size: 12px;
`
interface EmployeeCardProps {
  employee: Employee
}
const EmployeeCard: React.VFC<EmployeeCardProps> = ({ employee }) => {
  const testId = `-${employee.name.toLowerCase().replace(' ', '-')}`
  return (
    <Card data-testid={`card-${testId}`}>
      <PortraitImage
        src={employee.imagePortraitUrl || 'https://via.placeholder.com/115X153'}
        alt={`portrait of ${employee.name}`}
      />

      <EmployeeInfo>
        <div>
          <EmployeeName>{employee.name}</EmployeeName>
          <EmployeeOffice>Office: {employee.office}</EmployeeOffice>
        </div>
      </EmployeeInfo>
    </Card>
  )
}

export default EmployeeCard
