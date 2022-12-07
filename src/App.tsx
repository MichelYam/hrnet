import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewEmployee from './pages/NewEmployee';
import ListEmployee from './pages/ListEmployee';
import { createContext } from 'react';
import { mockEmployee } from './data/MockEmployee'

export interface IEmployee {
  firstName: string;
  lastName: string;
  startDate: string;
  department: string;
  dateOfBirth: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export const Context = createContext<IEmployee[] | null>(null);
function App() {
  const employeeList: IEmployee[] = mockEmployee

  return (
    <Context.Provider value={employeeList}>
      <BrowserRouter >
        <Routes >
          <Route path='/' element={<NewEmployee />} />
          <Route path='/listEmployee' element={<ListEmployee />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
