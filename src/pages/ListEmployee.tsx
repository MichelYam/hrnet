import React, { useMemo } from 'react'
import './Style.css'
import { columns } from "../data/tableColumn";
import { mockEmployee } from '../data/MockEmployee'
import Table from "../components/Table/Index"
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NewEmployee = () => {
    const data = React.useMemo(() => mockEmployee, [])
    const Tablecolumns = useMemo(() => {
        const newColumns: any[] = []
        for (let tets of columns) {
            newColumns.push({
                Header: tets.title,
                accessor: tets.data
            })
        }
        return newColumns
    }, [])

    return (
        <StyledContainer id="employee-div">
            <h1>Current Employees</h1>
            {/* <table id="employee-table" className="display"></table> */}
            <Table columns={Tablecolumns} data={data} />
            <Link to="/">Home</Link>
        </StyledContainer>

    )
}

export default NewEmployee


const StyledContainer = styled.div`
width: 890px;
margin: auto;
`