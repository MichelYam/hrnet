import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from '../components/Modal/Modal';

import { Departments } from '../data/Departments'
import { states } from '../data/State'
import './Style.css';

import styled from "styled-components";
import Form from '../components/Form';

const NewEmployee = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [newEmployee, setNewEmployee] = useState({
        firstName: "",
        lastName: "",
        startDate: "",
        dateOfBirth: "",
        street: "",
        city: "",
        zipCode: "",
    })

    const saveEmployee = () => {

        setIsOpen(!isOpen)
    }
    return (
        <div>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <Link to="listEmployee">View Current Employees</Link>
                <h2>Create Employee</h2>
                <Form departements={Departments} states={states} />

                {/* <form action="#" id="create-employee" onSubmit={saveEmployee}>
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" onChange={(event) => setNewEmployee({ ...newEmployee, firstName: event.target.value })} />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" />

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <input id="date-of-birth" type="text" />

                    <label htmlFor="start-date">Start Date</label>
                    <input id="start-date" type="text" />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" />

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" />

                        <label htmlFor="state">State</label>
                        <select name="state" id="state"></select>

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" />
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <select name="department" id="department">
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>
                    <button type="submit">Save</button>
                </form> */}

            </div>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <div id="confirmation" className="modal">Employee Created!</div>
            </Modal>
        </div>
    )
}

export default NewEmployee


