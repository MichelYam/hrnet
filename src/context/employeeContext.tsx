import React, { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react'

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
  // saveEmployee: (employee: IEmployee) => void;
  setEmployees: Dispatch<SetStateAction<IEmployee[]>>
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
  return (
    <EmployeeContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployeeContext.Provider>
  )
}

export default EmployeeProvider