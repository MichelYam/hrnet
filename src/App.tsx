import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewEmployee from './pages/NewEmployee';
import ListEmployee from './pages/ListEmployee';
import { createContext } from 'react';
import Header from './components/header';
import EmployeeProvider from './context/employeeContext';
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "./assets/logo/logo.png";


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

export const Context = createContext<IEmployee[] | null>(null);

const route = [
  {
    label: "Create employee",
    path: "/hrnet"
  },
  {
    label: "View Current Employees",
    path: "/hrnet/employees"
  },
]
function App() {
  return (
    <EmployeeProvider>
      <BrowserRouter basename='/hrnet'>
        <Header logo={logo} route={route} />
        <Routes >
          <Route path='/hrnet' element={<NewEmployee />} />
          <Route path='/hrnet/employees' element={<ListEmployee />} />
        </Routes>
      </BrowserRouter>
    </EmployeeProvider>
  );
}

export default App;
