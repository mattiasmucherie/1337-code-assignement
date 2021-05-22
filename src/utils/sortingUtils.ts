import { Employee } from '../types/employee'

export const sortByName = (listOfEmployees: Employee[]) => {
  return listOfEmployees.sort((empA, empB) => {
    const nameA = empA.name.toLowerCase()
    const nameB = empB.name.toLowerCase()
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }
    return 0
  })
}

export const sortByOffice = (listOfEmployees: Employee[]) => {
  return listOfEmployees.sort((empA, empB) => {
    const officeA = empA.office?.toLowerCase() || 'unknown'
    const officeB = empB.office?.toLowerCase() || 'unknown'

    if (officeA < officeB) {
      return -1
    }
    if (officeA > officeB) {
      return 1
    }
    return 0
  })
}
