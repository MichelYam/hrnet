import React, { lazy, Suspense, useContext, useState } from 'react';
//Data
import { Departments } from '../data/Departments'
import { states } from '../data/State'

import { IEmployee } from '../App';
import { EmployeeContext, EmployeeContextType } from '../context/employeeContext';
import './Style.css';
// import FieldDatapicker from '../components/Form/fieldDatapicker';

//Components
import Select from 'react-select'

const Modal = lazy(() => import('../components/Modal/Modal').then(module => { return { default: module.Modal } }))
const FieldInput = lazy(() => import('../components/Form/fieldInput'))
const FieldDatapicker = lazy(() => import('../components/Form/fieldDatapicker'))

type OptionType = {
    label: string
    value: string
}

const NewEmployee = () => {
    const [dateOfBirth, setdateOfBirth] = useState("")
    const [startDate, setStartDate] = useState("")
    const { employees, setEmployees } = useContext(EmployeeContext) as EmployeeContextType
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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewEmployee({
            ...newEmployee,
            [event.target.id]: event.target.value,
        })
    }
    const handleState = (date: string) => {
        setStartDate(date)
        setNewEmployee({
            ...newEmployee,
            startDate: date
        })
    }
    const handleBirthDay = (date: string) => {
        setdateOfBirth(date)
        setNewEmployee({
            ...newEmployee,
            dateOfBirth: date
        })
    }
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
                        {/* <Form departements={Departments} states={states}
                            addEmployee={addEmployee}
                            newEmployee={newEmployee} setNewEmployee={setNewEmployee} /> */}
                        <form onSubmit={(e) => { addEmployee(e) }}>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="firstName">First Name</label>
                                    <FieldInput label='firstName' type="text" handleChange={handleChange} classInput="form-control" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="lastName">Last Name</label>
                                    <FieldInput label='lastName' type="text" handleChange={handleChange} classInput="form-control" />

                                    {/* <input type="text" className="form-control" id="last-name" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        setNewEmployee({
                                            ...newEmployee,
                                            lastName: e.target.value
                                        })
                                    }} required /> */}
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor='date-of-birth'>Date of Birth</label>
                                    <FieldDatapicker inputId='date-of-birth' dataFormat='DD/MM/YYYY' selectedDate={dateOfBirth} onChange={(dateOfBirth: string) => handleBirthDay(dateOfBirth)} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor='start-date'>Start Date</label>
                                    <FieldDatapicker inputId='start-date' dataFormat='DD/MM/YYYY' selectedDate={startDate} onChange={(startDate: string) => handleState(startDate)} />
                                </div>
                            </div>
                            <fieldset className='fieldset'>
                                <legend>Address</legend>
                                <div className='row'>
                                    <div className='form-group col-md-4'>
                                        <label htmlFor='street'>Street</label>
                                        <FieldInput label='street' type="text" handleChange={handleChange} classInput="form-control" />
                                    </div>
                                    <div className='form-group col-md-4'>
                                        <label htmlFor='city'>City</label>
                                        <FieldInput label='city' type="text" handleChange={handleChange} classInput="form-control" />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='form-group col-md-6'>
                                        <label htmlFor='state'>State</label>
                                        <Select options={states} inputId="state"
                                            onChange={(option: OptionType | null) => {
                                                setNewEmployee({
                                                    ...newEmployee,
                                                    state: option!.label
                                                })
                                            }} />
                                    </div>
                                    <div className='form-group col-md-4'>
                                        <label htmlFor='departments'>Department</label>
                                        <Select inputId='departments' options={Departments}
                                            onChange={(option: OptionType | null) => {
                                                setNewEmployee({
                                                    ...newEmployee,
                                                    department: option!.label
                                                })
                                            }}
                                        />
                                    </div>
                                    <div className='form-group col-md-2'>
                                        <label htmlFor='zipCode'>Zip Code</label>
                                        <FieldInput label='zipCode' type="number" handleChange={handleChange} classInput="form-control" />
                                    </div>
                                </div>
                            </fieldset>
                            <div className='button'>
                                <button type="submit" className="btn btn-primary">Create</button>
                            </div>
                        </form>
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
