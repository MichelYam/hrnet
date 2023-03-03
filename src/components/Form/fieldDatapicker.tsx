import React from 'react'
//Library datapicker
import { Datapicker } from 'my-react-datapicker'
import 'my-react-datapicker/dist/stylesheets/datapicker.css'

type Prop = {
    inputId: string
    dataFormat: string
    selectedDate: string
    onChange: (value: string) => void
}
// dataFormat = 'DD/MM/YYYY' selectedDate = { dateOfBirth } setSelectedDate = {(dateOfBirth) => handleBirthDay(dateOfBirth)} />
const fieldDatapicker = ({ inputId, dataFormat, selectedDate, onChange }: Prop) => {
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
    return (
        <>
            <Datapicker inputId={inputId}
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
                dataFormat={dataFormat} selectedDate={selectedDate} setSelectedDate={(dateOfBirth) => onChange(dateOfBirth)} />
        </>
    )
}

export default fieldDatapicker