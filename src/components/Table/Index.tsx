import React, { useEffect, useState } from 'react'
import { useAsyncDebounce, useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table'

import styled, { css } from 'styled-components'

const Index = ({ columns, data }: any) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        pages,
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
        getCellProps,
        preGlobalFilteredRows,
        setGlobalFilter,
        state: { pageIndex, pageSize },
    } = useTable({ columns, data, initialState: { pageIndex: 0 }, }, useGlobalFilter, useSortBy, usePagination)
    const getVisiblePages = (currentPage: number, total: number) => {
        if (total <= 7) {
            const res = [];
            for (let i = 0; i < total; i++) {
                res.push(i + 1);
            }
            return res;
        } else {
            if (currentPage % 5 >= 0 && currentPage > 4 && currentPage + 2 < total) {
                return [1, currentPage - 1, currentPage, currentPage + 1, total];
            } else if (currentPage % 5 >= 0 && currentPage > 4 && currentPage + 2 >= total) {
                return [1, total - 3, total - 2, total - 1, total];
            } else {
                return [1, 2, 3, 4, 5, total];
            }
        }
    };

    const [value, setValue] = React.useState(state.globalFilter)
    const [currentPage, setCurrentPage] = useState(1)
    const [nbrElement, setnbrElement] = useState(0)
    const [pagination, setPagination] = useState<(number)[]>([])
    useEffect(() => {

        setPagination(
            getVisiblePages(currentPage, controlledPageCount)
        )
    }, [controlledPageCount, currentPage])
    const displayPage = (currentPage: number) => {
        let testest = 0
        console.log(currentPage);

        for (let i = 1; i <= currentPage; i++) {
            console.log(i)
            if (i === currentPage) {
                testest += page.length
            } else {
                testest += pageSize
            }
            console.log("newValue:", nbrElement)
        }
        setnbrElement(testest)
    }
    useEffect(() => {
        displayPage(currentPage)
    }, [currentPage])
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)
    // console.log(pageOptions)
    return (
        <StyledTableContainer>
            <StyledTableLength>
                <label>
                    Show{' '}
                    <select
                        value={pageSize}
                        onChange={e => {
                            setPageSize(Number(e.target.value))
                        }}>
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
                                {row.cells.map((cell) => {
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
                {`Showing ${pageIndex * pageSize + 1} to ${nbrElement} of ${rows.length} entries`}
            </TablesInfo>
            <TablesInfoPagination>

                <button onClick={() => {
                    previousPage()
                    setCurrentPage((prev) => prev - 1);
                    // setnbrElement((prev) => prev - page.length)
                }} disabled={!canPreviousPage}>
                    Previous
                </button>{' '}
                <span>
                    {
                        pagination.map((page, index, array) => {
                            return currentPage === page ?
                                <StyledPaginationSpan key={index} bgColor={currentPage === page ? "true" : "false"}>{page}</StyledPaginationSpan>
                                :
                                <StyledPaginationBtn key={index} onClick={() => {
                                    gotoPage(page - 1)
                                    setCurrentPage(page)

                                }}>
                                    {/* key={index} bgColor={pageIndex + 1 === page ? "true" : "false"} disabled={page === "..." ? true : false} > */}

                                    {page}
                                </StyledPaginationBtn>
                        })
                    }
                    {' '}
                </span>
                <button onClick={() => {
                    nextPage()
                    setCurrentPage((prev) => prev + 1);
                    // setnbrElement((prev) => prev + page.length)
                }} disabled={!canNextPage}>
                    Next
                </button>{' '}
            </TablesInfoPagination>
        </StyledTableContainer >
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

const StyledPaginationSpan = styled.span<{ bgColor: string }>`
    min-width: 1.5em;
    padding: 0.5em 1em;
    ${props => props.bgColor === 'true' && css`
    border: 1px solid #979797;
    background: linear-gradient(to bottom, #fff 0%, #dcdcdc 100%);
`}
`

const StyledPaginationBtn = styled.button`
    border: none;
    min-width: 1.5em;
    padding: 0.5em 1em;
    cursor: pointer;
    background-color: #ffffff;
    &:hover{
        background-color: #DEDEDE;
    }
`