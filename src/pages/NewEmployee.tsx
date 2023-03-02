import React, { lazy, Suspense, useContext, useState } from 'react';
//Data
import { Departments } from '../data/Departments'
import { states } from '../data/State'

import { IEmployee } from '../App';
import { EmployeeContext, EmployeeContextType } from '../context/employeeContext';
import './Style.css';

//Components
const Form = lazy(() => import('../components/Form'))
const Modal = lazy(() => import('../components/Modal/Modal').then(module => { return { default: module.Modal } }))


const NewEmployee = () => {
    const { employees, setEmployees } = useContext(EmployeeContext) as EmployeeContextType
    // const dataMocked = useContext(Context);
    const [isOpen, setIsOpen] = useState(false);
    const [newEmployee, setNewEmployee] = useState<IEmployee>({
        firstName: "",
        lastName: "",
        startDate: "",
        dateOfBirth: "",
        department: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
    });
    const addEmployee = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEmployees([...employees, newEmployee])
        console.log(newEmployee);
        // reset()
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <Suspense fallback={<div>Chargement...</div>}>
                <div className="container ">
                    <h2>Create Employee</h2>
                    <div className='form border shadow p-3 mb-5 bg-white rounded mx-auto'>
                        <Form departements={Departments} states={states}
                            addEmployee={addEmployee}
                            newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
                    </div>
                </div>
                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <div id="confirmation">Employee Created!</div>
                </Modal>
            </Suspense >
        </>
    );
}

export default NewEmployee