import React, { useState, Dispatch, SetStateAction } from 'react'
import Select, { ActionMeta } from 'react-select'
import styled from 'styled-components'
import DatePicker from "react-datepicker";
import { getMonth, getYear, format } from 'date-fns';
import Moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
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
    addEmployee: (e: React.FormEvent<HTMLFormElement>) => void,
    setNewEmployee: Dispatch<SetStateAction<IEmployee>>,
    newEmployee: IEmployee
}
type OptionType = {
    value: string;
    label: string;
};
const Index = ({ departements, states, addEmployee, setNewEmployee, newEmployee }: props) => {
    const [dateOfBirth, setdateOfBirth] = useState<Date | null>(new Date())
    const [startDate, setStartDate] = useState<Date | null>(new Date())

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    function range(start: number, end: number) {
        var ans = [];
        for (let i = start; i <= end; i++) {
            ans.push(i);
        }
        return ans;
    }
    const years = range(1990, getYear(new Date()) + 1);

    const handleState = (date: Date | null) => {
        setStartDate(date)
        setNewEmployee({
            ...newEmployee,
            startDate: format(startDate!, "MM/dd/yyyy")
        })
    }
    const handleBirthDay = (date: Date | null) => {
        setdateOfBirth(date)
        setNewEmployee({
            ...newEmployee,
            dateOfBirth: format(date!, "MM/dd/yyyy")
        })
    }
    return (
        <Form onSubmit={addEmployee}>
            <div className="row">
                <div className="form-group col-md-6">
                    <label htmlFor="first-name">First Name</label>
                    <input type="email" className="form-control" id="first-name" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
                    <DatePicker className="form-control" renderCustomHeader={({
                        date,
                        changeYear,
                        changeMonth,
                        decreaseMonth,
                        increaseMonth,
                        prevMonthButtonDisabled,
                        nextMonthButtonDisabled,
                    }) => (
                        <div
                            style={{
                                margin: 10,
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                {"<"}
                            </button>
                            <select
                                value={months[getMonth(date)]}
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
                                value={getYear(date)}
                                onChange={({ target: { value } }: any) => changeYear(value)}
                            >
                                {years.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                {">"}
                            </button>
                        </div>
                    )}
                        dateFormat="MM/dd/yyyy" selected={dateOfBirth} onChange={(date) => handleBirthDay(date)} />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor='start-date'>Start Date</label>
                    <DatePicker className="form-control" renderCustomHeader={({
                        date,
                        changeYear,
                        changeMonth,
                        decreaseMonth,
                        increaseMonth,
                        prevMonthButtonDisabled,
                        nextMonthButtonDisabled,
                    }) => (
                        <div
                            style={{
                                margin: 10,
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                {"<"}
                            </button>
                            <select
                                value={months[getMonth(date)]}
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
                                value={getYear(date)}
                                onChange={({ target: { value } }: any) => changeYear(value)}
                            >
                                {years.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>


                            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                {">"}
                            </button>
                        </div>
                    )}
                        dateFormat="MM/dd/yyyy" selected={startDate} onChange={(date) => handleState(date)} />
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
