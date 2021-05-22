import React from 'react'
import styled from 'styled-components'
import { Employee } from '../types/employee'
import GithubIcon from '../icons/github-square-brands.svg'
import LinkedInIcon from '../icons/linkedin-brands.svg'
import TwitterIcon from '../icons/twitter-square-brands.svg'

interface DisplayMethodProps {
  displayMethod: string
}
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
const EmployeeInfo = styled.div<DisplayMethodProps>`
  width: 100%;
  display: flex;
  flex-direction: ${props => (props.displayMethod === 'list' ? 'row' : 'column')};
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
const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`
const Icon = styled.img`
  width: 30px;
  padding: 0 5px;
`
const SocialLink = styled.a``

interface EmployeeCardProps {
  employee: Employee
  displayMethod: string
}
const EmployeeCard: React.VFC<EmployeeCardProps> = ({ employee, displayMethod }) => {
  const testId = `${displayMethod}-${employee.name.toLowerCase().replace(' ', '-')}`
  return (
    <Card data-testid={`card-${testId}`}>
      {displayMethod === 'grid' && (
        <PortraitImage
          src={employee.imagePortraitUrl || 'https://via.placeholder.com/115X153'}
          alt={`portrait of ${employee.name}`}
        />
      )}

      <EmployeeInfo displayMethod={displayMethod}>
        <div>
          <EmployeeName>{employee.name}</EmployeeName>
          <EmployeeOffice>Office: {employee.office}</EmployeeOffice>
        </div>
        <IconContainer>
          {employee.gitHub && (
            <SocialLink href={`https://github.com/${employee.gitHub}`} target="_blank" rel="noreferrer">
              <Icon src={GithubIcon} alt="Github icon" />
            </SocialLink>
          )}
          {employee.linkedIn && (
            <SocialLink href={`https://www.linkedin.com${employee.linkedIn}`} target="_blank" rel="noreferrer">
              <Icon src={LinkedInIcon} alt="LinkedIn icon" />
            </SocialLink>
          )}
          {employee.twitter && (
            <SocialLink href={`https://twitter.com/${employee.twitter}`} target="_blank" rel="noreferrer">
              <Icon src={TwitterIcon} alt="Twitter icon" />
            </SocialLink>
          )}
        </IconContainer>
      </EmployeeInfo>
    </Card>
  )
}

export default EmployeeCard
