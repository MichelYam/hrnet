import React, { useEffect, useState } from 'react'
import { useAsyncDebounce, useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table'

import styled from 'styled-components'

const Index = ({ columns, data }: any) => {
    const [visibility, setVisibility] = useState([])
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        rows,
        state,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount: controlledPageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        preGlobalFilteredRows,
        setGlobalFilter,
        state: { pageIndex, pageSize },
    } = useTable({ columns, data, initialState: { pageIndex: 0 }, }, useGlobalFilter, useSortBy, usePagination)

    // const getVisiblePages = (page, total) => {
    //     if (total < 7) {
    //         return filterPages([1, 2, 3, 4, 5, 6], total);
    //     } else {
    //         if (page % 5 >= 0 && page > 4 && page + 2 < total) {
    //             return [1, page - 1, page, page + 1, total];
    //         } else if (page % 5 >= 0 && page > 4 && page + 2 >= total) {
    //             return [1, total - 3, total - 2, total - 1, total];
    //         } else {
    //             return [1, 2, 3, 4, 5, total];
    //         }
    //     }
    // };
    // const filterPages = (visiblePages, totalPages) => {
    //     console.log("test", visiblePages)
    //     return visiblePages.filter(page => page <= totalPages);
    // };
    const [value, setValue] = React.useState(state.globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)
    return (
        <StyledTableContainer>
            <StyledTableLength>
                <label>
                    Show{' '}
                    <select
                        value={pageSize}
                        onChange={e => {
                            setPageSize(Number(e.target.value))
                        }}
                    >
                        {[10, 25, 30, 50, 100].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}
                            </option>
                        ))}
                    </select>
                    {' '} entries
                </label>
            </StyledTableLength>
            <StyledTableSearch>
                <label>
                    Search:{' '}
                    <input type="search" value={value || ""}
                        onChange={e => {
                            setValue(e.target.value);
                            onChange(e.target.value);
                        }}
                        // placeholder={`${count} records...`}
                        aria-controls='employee-table'
                    />
                </label>
            </StyledTableSearch>
            <StyledTable {...getTableProps()}>
                <StyledTableThead>
                    {headerGroups.map(headerGroup => (
                        <StyledTableTr {...headerGroup.getHeaderGroupProps()} >

                            {headerGroup.headers.map(column => (
                                <StyledTableTh {...column.getHeaderProps(column.getSortByToggleProps())} >
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? <img src="../assets/img/sort_desc.png" alt="" />
                                                : <img src="../assets/img/sort_asc.png" alt="" />
                                            : <img src="../assets/img/sort_both.png" alt="" />}
                                    </span>
                                </StyledTableTh>
                            ))}
                        </StyledTableTr>
                    ))}
                </StyledTableThead>
                <StyledTableTbody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row)   
                        return (
                            <StyledTableTr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <StyledTableTd {...cell.getCellProps()} >
                                            {cell.render('Cell')}
                                        </StyledTableTd>
                                    )
                                })}
                            </StyledTableTr>
                        )
                    })}
                </StyledTableTbody>
            </StyledTable>
            <TablesInfo >
                {`Showing ${pageIndex + 1} to ${page.length} of ${rows.length} entries`}
            </TablesInfo>
            <TablesInfoPagination>

                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    Previous
                </button>{' '}
                <span>
                    <strong>
                        {pageOptions.length > 5 ?
                            [5].map(() => {
                                return <button>{pageIndex + 1}</button>
                            }) :
                            [pageSize].map((ele) => {
                                return <button>{pageIndex + 1}</button>
                            })
                        }
                    </strong>{' '}
                </span>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    Next
                </button>{' '}
            </TablesInfoPagination>
        </StyledTableContainer>
    )
}

export default Index
const StyledTableContainer = styled.div`
    position: relative;
`
const StyledTableLength = styled.div`
    float: left;
`
const StyledTableSearch = styled.div`
    float: right;
    text-align: right;
`
const StyledTable = styled.table`
    border:none;
    border-spacing: 0;
`
const StyledTableThead = styled.thead`

`
const StyledTableTr = styled.tr`
    font-size: 14px;
`
const StyledTableTbody = styled.tbody`
    ${StyledTableTr}:nth-child(odd){
        background-color: #f9f9f9;
    }
`
const StyledTableTh = styled.th`
    padding: 10px 18px;
    border-bottom: 1px solid #111;
    width: 77px;
`
const StyledTableTd = styled.td`
    border-top: 1px solid #ddd;
    padding: 8px 10px;
`

const TablesInfo = styled.div`
    float: left;
    padding-top: 0.755em;
`

const TablesInfoPagination = styled.div`
    float: right;
    text-align: right;
    padding-top: 0.25em;
`