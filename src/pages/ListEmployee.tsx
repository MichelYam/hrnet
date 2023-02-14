import React, { lazy, useContext, useMemo, Suspense } from 'react'
import { columns } from "../data/tableColumn";
// import { mockEmployee } from '../data/MockEmployee'
import { EmployeeContext, EmployeeContextType } from '../context/employeeContext';

const Table = lazy(() => import('../components/Table/Index'))

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
        <div id="employee-div">
            <h1>Current Employees</h1>
            <Suspense fallback={<div>Chargement...</div>}>
                <Table columns={Tablecolumns} data={data} />
            </Suspense>
        </div>

    )
}

export default NewEmployee
