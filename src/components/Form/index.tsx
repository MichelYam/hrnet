import React, { useState, Dispatch, SetStateAction, ChangeEvent } from 'react'
import Select from 'react-select'
import { IEmployee } from '../../App';

//Library datapicker
import { Datapicker } from 'my-react-datapicker'
import 'my-react-datapicker/dist/stylesheets/datapicker.css'

import PropTypes from 'prop-types';

import styled from 'styled-components'


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
    const [dateOfBirth, setdateOfBirth] = useState("")
    const [startDate, setStartDate] = useState("")
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
    return (
        <Form onSubmit={(e) => { addEmployee(e) }}>
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
            <FieldSet>
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
                        <Select inputId='departments' options={departements}
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
            <StyledBtn>
                <Button type="submit" className="btn btn-primary">Create</Button>
            </StyledBtn>
        </Form>
    )
}

export default Index


const Form = styled.form`
    position: relative; 
    width:100%;
    padding: 20px;
`;
const FormControl = styled.div`
`;
const Formlabel = styled.label`
`;
const FormInput = styled.input`
`;
const Button = styled.button`

`;
const StyledBtn = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
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

Index.prototype = {
    departements: PropTypes.array,
    states: PropTypes.array,
    setNewEmployee: PropTypes.func,
    addEmployee: PropTypes.func,
    newEmployee: PropTypes.object
}