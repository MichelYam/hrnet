import React, { useContext, useMemo } from 'react'
import './Style.css'
import { columns } from "../data/tableColumn";
import { mockEmployee } from '../data/MockEmployee'
import Table from "../components/Table/Index"
import { Link } from 'react-router-dom';

import { Context } from '../App';

import styled from 'styled-components';



const NewEmployee = () => {
    const test = useContext(Context)
    const data = React.useMemo(() => test, [test])
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
            <Title>Current Employees</Title>
            <Table columns={Tablecolumns} data={data} />
            <Link to="/">Home</Link>
        </StyledContainer>

    )
}

export default NewEmployee

const Title = styled.h1``
const StyledContainer = styled.div`
width: 890px;
margin: auto;
`