import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from "react-datepicker";
import { getMonth, getYear, format } from 'date-fns';

const Index = ({ }) => {
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

    const handleState = (date: Date | null) => {
        setStartDate(date)
        // setNewEmployee({
        //     ...newEmployee,
        //     startDate: format(startDate!, "MM/dd/yyyy")
        // })
    }
    const handleBirthDay = (date: Date | null) => {
        setdateOfBirth(date)
        // setNewEmployee({
        //     ...newEmployee,
        //     dateOfBirth: format(date!, "MM/dd/yyyy")
        // })
    }
    function range(start: number, end: number) {
        var ans = [];
        for (let i = start; i <= end; i++) {
            ans.push(i);
        }
        return ans;
    }
    const years = range(1990, getYear(new Date()) + 1);
    return (
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
    )
}

export default Index