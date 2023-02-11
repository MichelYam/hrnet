import React, { createContext, PropsWithChildren, useState } from 'react'

export interface IEmployee {
  firstName: string;
  lastName: string;
  startDate: Date | string;
  department: string;
  dateOfBirth: Date | string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
}
export type EmployeeContextType = {
  employees: IEmployee[];
  saveEmployee: (employee: IEmployee) => void;
};

export const EmployeeContext = createContext<EmployeeContextType | null>(null)
const EmployeeProvider: React.FC<PropsWithChildren> = ({ children }) => {

  const [employees, setEmployees] = useState<IEmployee[]>([
    {
      firstName: "Jean",
      lastName: "Dujardin",
      startDate: "01/26/2023",
      department: "Marketing",
      dateOfBirth: "01/26/2023",
      street: "Alaska",
      city: "Alaska",
      state: "Alaska",
      zipCode: "789456",
    }
  ])
  const saveEmployee = (employee: IEmployee) => {
    const newEmployee = {
      firstName: employee.firstName,
      lastName: employee.lastName,
      startDate: employee.startDate,
      department: employee.department,
      dateOfBirth: employee.dateOfBirth,
      street: employee.street,
      city: employee.city,
      state: employee.state,
      zipCode: employee.zipCode,
    }
    setEmployees([...employees, newEmployee])
  }

  return (
    <EmployeeContext.Provider value={{ employees, saveEmployee }}>
      {children}
    </EmployeeContext.Provider>
  )
}

export default EmployeeProvider