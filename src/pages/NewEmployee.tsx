import React, { useContext, useState } from 'react';
import { Modal } from '../components/Modal/Modal';

import { Departments } from '../data/Departments'
import { states } from '../data/State'
import './Style.css';

import styled from "styled-components";
import Form from '../components/Form';
import { Context, IEmployee } from '../App';
// import { Counter } from 'dzadzadzadzadaz';
// import Calendar from "my-react-datapicker";

import { EmployeeContext, EmployeeContextType } from '../context/employeeContext';

function NewEmployee(): JSX.Element {
    const dataMocked = useContext(Context);
    const [isOpen, setIsOpen] = useState(false);
    const [newEmployee, setNewEmployee] = useState<IEmployee>({
        firstName: "",
        lastName: "",
        startDate: "",
        department: "",
        dateOfBirth: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
    });
    const { saveEmployee } = useContext(EmployeeContext) as EmployeeContextType
    const addEmployee = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsOpen(!isOpen);
        saveEmployee(newEmployee)
        // dataMocked?.push(newEmployee);
        // sessionStorage.setItem("employees", JSON.stringify(dataMocked));
    };

    return (
        <div>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <h2>Create Employee</h2>
                <StyledContainerForm className='border border-gray rounded mx-auto'>
                    <Form departements={Departments} states={states}
                        addEmployee={addEmployee}
                        newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
                </StyledContainerForm>
            </div>
            {/* <Calendar /> */}
            {/* <Counter /> */}
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <div id="confirmation">Employee Created!</div>
            </Modal>
        </div>
    );
}

export default NewEmployee


const StyledContainerForm = styled.div`
width: 75%;
`