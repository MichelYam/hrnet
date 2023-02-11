import React, { useContext, useMemo } from 'react'
import './Style.css'
import { columns } from "../data/tableColumn";
import { mockEmployee } from '../data/MockEmployee'
import Table from "../components/Table/Index"

import { EmployeeContext, EmployeeContextType } from '../context/employeeContext';

import styled from 'styled-components';
import { Context } from '../App';

const NewEmployee = () => {
    // const employee = useContext(Context)
    const { employees } = useContext(EmployeeContext) as EmployeeContextType
    const data = React.useMemo(() => employees, [employees])
    const Tablecolumns = useMemo(() => {
        const newColumns: any[] = []
        for (let column of columns) {
            newColumns.push({
                Header: column.title,
                accessor: column.data
            })
        }
        return newColumns
    }, [])

    return (
        <StyledContainer id="employee-div">
            <Title>Current Employees</Title>
            <Table columns={Tablecolumns} data={data} />
        </StyledContainer>

    )
}

export default NewEmployee

const Title = styled.h1``
const StyledContainer = styled.div`
width: 1140px;
margin: auto;
`