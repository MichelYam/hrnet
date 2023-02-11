import React, { useContext, useState } from 'react';
//Components
import { Modal } from '../components/Modal/Modal';
import Form from '../components/Form';
//Data
import { Departments } from '../data/Departments'
import { states } from '../data/State'

import { Context, IEmployee } from '../App';
import { EmployeeContext, EmployeeContextType } from '../context/employeeContext';
import styled from "styled-components";
import './Style.css';

function NewEmployee(): JSX.Element {
    const { saveEmployee } = useContext(EmployeeContext) as EmployeeContextType
    const dataMocked = useContext(Context);
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
    const addEmployee = (e: React.FormEvent<HTMLFormElement>, dateOfBirth: string, startDate: string) => {
        e.preventDefault();
        setNewEmployee({
            ...newEmployee,
            dateOfBirth: dateOfBirth,
            startDate: startDate
        })
        setIsOpen(!isOpen);
        saveEmployee(newEmployee)
    };

    return (
        <>
            <StyledTitle className="title">
                <h1>HRnet</h1>
            </StyledTitle>
            <div className="container">
                <h2>Create Employee</h2>
                <StyledContainerForm className='border border-gray rounded mx-auto'>
                    <Form departements={Departments} states={states}
                        addEmployee={addEmployee}
                        newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
                </StyledContainerForm>
            </div>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <div id="confirmation">Employee Created!</div>
            </Modal>
        </>
    );
}

export default NewEmployee

const StyledTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const StyledContainerForm = styled.div`
    width: 75%;
`
const Styled = styled.h1`
    width: 75%;
`

// label {
//     display: block;
//     margin-top: 1rem;
//     margin-bottom: 10px;
// }

// .address {
//     margin-top: 10px;
// }