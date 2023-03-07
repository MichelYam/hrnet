import React, { lazy, Suspense, useContext, useState } from 'react';
//Data
import { Departments } from '../data/Departments'
import { states } from '../data/State'

import { IEmployee } from '../App';
import { EmployeeContext, EmployeeContextType } from '../context/employeeContext';
import './Style.css';
//Library datapicker
import { Datapicker } from 'my-react-datapicker'
import 'my-react-datapicker/dist/stylesheets/datapicker.css'

//Components
import Select from 'react-select'

const Modal = lazy(() => import('../components/Modal/Modal').then(module => { return { default: module.Modal } }))
const InputField = lazy(() => import('../components/Form/InputField'))

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

    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    const getYear = (date: Date) => {
        return date.getFullYear()
    }
    const range = (start: number, end: number) => {
        var ans = [];
        for (let i = start; i <= end; i++) {
            ans.push(i);
        }
        return ans;
    }
    const years = range(1990, getYear(new Date()) + 1);

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
                        <form onSubmit={(e) => { addEmployee(e) }}>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <InputField name="firstName" label='First Name' type="text" handleChange={handleChange} classInput="form-control" />
                                </div>
                                <div className="form-group col-md-6">
                                    <InputField name="lastName" label='Last Name' type="text" handleChange={handleChange} classInput="form-control" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor='date-of-birth'>Date of Birth</label>
                                    <Datapicker inputId='date-of-birth'
                                        customHeader={({
                                            currentMonth,
                                            currentYear,
                                            changeMonth,
                                            changeYear,
                                            prev,
                                            next,
                                        }: any) => (
                                            <div>
                                                <button onClick={prev}>
                                                    {"<"}
                                                </button>
                                                <select
                                                    value={months[currentMonth as unknown as number]}
                                                    onChange={({ target: { value } }) =>
                                                        changeMonth(months.indexOf(value))
                                                    }
                                                >
                                                    {months.map((option) => (
                                                        <option key={option} value={option}>
                                                            {option}
                                                        </option>
                                                    ))}
                                                </select>
                                                <select
                                                    value={currentYear}
                                                    onChange={({ target: { value } }: any) => changeYear(value)}
                                                >
                                                    {years.map((option) => (
                                                        <option key={option} value={option}>
                                                            {option}
                                                        </option>
                                                    ))}
                                                </select>
                                                <button onClick={next} >
                                                    {">"}
                                                </button>
                                            </div>
                                        )}
                                        dataFormat='DD/MM/YYYY' selectedDate={dateOfBirth} setSelectedDate={(dateOfBirth) => handleBirthDay(dateOfBirth)} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor='start-date'>Start Date</label>
                                    <Datapicker inputId='start-date'
                                        customHeader={({
                                            currentMonth,
                                            currentYear,
                                            changeMonth,
                                            changeYear,
                                            prev,
                                            next,
                                        }: any) => (
                                            <div>
                                                <button onClick={prev}>
                                                    {"<"}
                                                </button>
                                                <select
                                                    value={months[currentMonth as unknown as number]}
                                                    onChange={({ target: { value } }) =>
                                                        changeMonth(months.indexOf(value))
                                                    }
                                                >
                                                    {months.map((option) => (
                                                        <option key={option} value={option}>
                                                            {option}
                                                        </option>
                                                    ))}
                                                </select>
                                                <select
                                                    value={currentYear}
                                                    onChange={({ target: { value } }: any) => changeYear(value)}
                                                >
                                                    {years.map((option) => (
                                                        <option key={option} value={option}>
                                                            {option}
                                                        </option>
                                                    ))}
                                                </select>
                                                <button onClick={next} >
                                                    {">"}
                                                </button>
                                            </div>
                                        )}
                                        dataFormat='DD/MM/YYYY' selectedDate={startDate} setSelectedDate={(startDate) => handleState(startDate)} />
                                </div>
                            </div>
                            <fieldset className='fieldset'>
                                <legend>Address</legend>
                                <div className='row'>
                                    <div className='form-group col-md-4'>
                                        <InputField label='Street' name="street" type="text" handleChange={handleChange} classInput="form-control" />
                                    </div>
                                    <div className='form-group col-md-4'>
                                        <InputField label='City' name="city" type="text" handleChange={handleChange} classInput="form-control" />
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
                                        <InputField label='Zip Code' name="zipCode" type="number" handleChange={handleChange} classInput="form-control" />
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
