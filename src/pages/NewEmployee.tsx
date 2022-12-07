import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from '../components/Modal/Modal';

import { Departments } from '../data/Departments'
import { states } from '../data/State'
import './Style.css';

import styled from "styled-components";
import Form from '../components/Form';
import { Context } from '../App';

const NewEmployee = () => {
    const dataMocked = useContext(Context)
    const [isOpen, setIsOpen] = useState(false);
    const [newEmployee, setNewEmployee] = useState({
        firstName: "",
        lastName: "",
        startDate: "",
        department: "",
        dateOfBirth: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
    })

    const addEmployee = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsOpen(!isOpen)
        dataMocked?.push(newEmployee)
        sessionStorage.setItem("employees", JSON.stringify(dataMocked));
    }
    console.log(newEmployee.firstName)
    return (
        <div>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <Link to="listEmployee">View Current Employees</Link>
                <h2>Create Employee</h2>
                <Form departements={Departments} states={states}
                    addEmployee={addEmployee}
                    newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
            </div>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <div id="confirmation" className="modal">Employee Created!</div>
            </Modal>
        </div>
    )
}

export default NewEmployee


