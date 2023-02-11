import React, { useState, Dispatch, SetStateAction } from 'react'
import Select, { ActionMeta } from 'react-select'
import styled from 'styled-components'
import { Datapicker } from 'my-react-datapicker'
import 'my-react-datapicker/dist/stylesheets/datapicker.css'
import { getMonth, getYear, format } from 'date-fns';
// import "react-datepicker/dist/react-datepicker.css";
// import { Datapicker } from "my-react-datapicker/dist/index";

import { IEmployee } from '../../App';

type props = {
    departements: {
        value: string,
        label: string
    }[],
    states: {
        value: string,
        label: string
    }[],
    addEmployee: (e: React.FormEvent<HTMLFormElement>, value: string, valueB: string) => void,
    setNewEmployee: Dispatch<SetStateAction<IEmployee>>,
    newEmployee: IEmployee
}

type OptionType = {
    value: string;
    label: string;
};

const Index = ({ departements, states, addEmployee, setNewEmployee, newEmployee }: props) => {
    const [dateOfBirth, setdateOfBirth] = useState("")
    const [startDate, setStartDate] = useState("")
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    function range(start: number, end: number) {
        var ans = [];
        for (let i = start; i <= end; i++) {
            ans.push(i);
        }
        return ans;
    }
    const years = range(1990, getYear(new Date()) + 1);

    // const handleState = (date: string) => {
    //     console.log(date);

    //     setStartDate(date)
    //     setNewEmployee({
    //         ...newEmployee,
    //         startDate: startDate
    //     })
    // }
    // const handleBirthDay = (date: string) => {
    //     setdateOfBirth(date)
    //     // setNewEmployee({
    //     //     ...newEmployee,
    //     //     dateOfBirth: e.target.value
    //     // })
    // }
    return (
        <Form onSubmit={(e) => addEmployee(e, dateOfBirth, startDate)}>
            <div className="row">
                <div className="form-group col-md-6">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" className="form-control" id="first-name" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setNewEmployee({
                            ...newEmployee,
                            firstName: e.target.value
                        })
                    }} required />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="last-name">Password</label>
                    <input type="text" className="form-control" id="last-name" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setNewEmployee({
                            ...newEmployee,
                            lastName: e.target.value
                        })
                    }} required />
                </div>
            </div>

            <div className="row">
                <div className="form-group col-md-6">
                    <label htmlFor='date-of-birth'>Date of Birth</label>
                    <Datapicker
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
                        dataFormat='DD/MM/YYYY' selectedDate={dateOfBirth} setSelectedDate={setdateOfBirth} />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor='start-date'>Start Date</label>
                    <Datapicker
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
                        dataFormat='DD/MM/YYYY' selectedDate={startDate} setSelectedDate={setStartDate} />
                </div>
            </div>
            <FieldSet >
                <FieldLengend>Address</FieldLengend>
                <div className='row'>
                    <div className='form-group col-md-4'>
                        <label htmlFor='street'>Street</label>
                        <input className='form-control' type="text" id='street' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setNewEmployee({
                                ...newEmployee,
                                street: e.target.value
                            })
                        }} required />
                    </div>
                    <div className='form-group col-md-4'>
                        <label htmlFor='city'>City</label>
                        <input className='form-control' type="text" id='city' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setNewEmployee({
                                ...newEmployee,
                                city: e.target.value
                            })
                        }} required />
                    </div>
                </div>
                <div className='row'>
                    <div className='form-group col-md-6'>
                        <label htmlFor='state'>State</label>
                        <Select id="state" options={states}
                            onChange={(option: OptionType | null) => {
                                setNewEmployee({
                                    ...newEmployee,
                                    state: option!.label
                                })
                            }} />
                    </div>
                    <div className='form-group col-md-4'>
                        <label htmlFor='departments'>Department</label>
                        <Select id='departments' options={departements}
                            onChange={(option: OptionType | null) => {
                                setNewEmployee({
                                    ...newEmployee,
                                    department: option!.label
                                })
                            }}
                        />
                    </div>
                    <div className='form-group col-md-2'>
                        <label htmlFor='zip-code'>Zip Code</label>
                        <input className='form-control' type="number" id='zip-code' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setNewEmployee({
                                ...newEmployee,
                                zipCode: e.target.value
                            })
                        }} required />
                    </div>
                </div>
            </FieldSet>
            <button type="submit" className="btn btn-primary">Sign in</button>
        </Form>
    )
}

export default Index


const Form = styled.form`
    width:100%;
    padding: 20px;
`;
const FormControl = styled.div`
`;
const Formlabel = styled.label`
`;
const FormInput = styled.input`
`;
const FieldSet = styled.fieldset`
border: 1px solid #ced4da;
padding: 0 1.4em 1.4em 1.4em;
margin: 0 0 1.5em 0;
border-radius: 0.375rem;
`;
const FieldLengend = styled.legend`
font-size: 1.2em;
font-weight: bold;
text-align: left;
width:auto;
padding:0 10px;
border-bottom:none;
float:none;
`;
