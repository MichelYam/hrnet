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
            <FormControl>
                <FormLabel htmlFor='first-name'>First Name</FormLabel>
                <FormInput type="text" id='first-name' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setNewEmployee({
                        ...newEmployee,
                        firstName: e.target.value
                    })
                }} required />
            </FormControl>
            <FormControl>
                <FormLabel htmlFor='last-name'>Last Name</FormLabel>
                <FormInput type="text" id='last-name' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setNewEmployee({
                        ...newEmployee,
                        lastName: e.target.value
                    })
                }} required />
            </FormControl>
            <FormControl>
                <FormLabel htmlFor='date-of-birth'>Date of Birth</FormLabel>
                <DatePicker renderCustomHeader={({
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
            </FormControl>
            <FormControl>
                <FormLabel htmlFor='start-date'>Start Date</FormLabel>
                <DatePicker renderCustomHeader={({
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
            </FormControl>
            <FormFieldSet>
                <FormFieldLengend>Adress</FormFieldLengend>
                <FormControl>
                    <FormLabel htmlFor='street'>Street</FormLabel>
                    <FormInput type="text" id='street' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setNewEmployee({
                            ...newEmployee,
                            street: e.target.value
                        })
                    }} required />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='city'>City</FormLabel>
                    <FormInput type="text" id='city' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setNewEmployee({
                            ...newEmployee,
                            city: e.target.value
                        })
                    }} required />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='state'>State</FormLabel>
                    <Select id="state" options={states}
                        onChange={(option: OptionType | null) => {
                            setNewEmployee({
                                ...newEmployee,
                                state: option!.label
                            })
                        }} />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='zip-code'>Zip Code</FormLabel>
                    <FormInput type="number" id='zip-code' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setNewEmployee({
                            ...newEmployee,
                            zipCode: e.target.value
                        })
                    }} required />
                </FormControl>
            </FormFieldSet>
            <FormControl>
                <FormLabel htmlFor='departments'>Department</FormLabel>
                <Select id='departments' options={departements}
                    onChange={(option: OptionType | null) => {
                        setNewEmployee({
                            ...newEmployee,
                            department: option!.label
                        })
                    }}
                />
            </FormControl>
            <FormControl>
                <FormInput type="submit" id='submit' />
            </FormControl>
        </Form>
    )
}

export default Index


const Form = styled.form`
`;
const FormControl = styled.div`
`;
const FormLabel = styled.label`
`;
const FormInput = styled.input`
`;
const FormFieldSet = styled.fieldset`
`;
const FormFieldLengend = styled.legend`
`;
