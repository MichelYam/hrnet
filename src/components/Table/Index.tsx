import { isDisabled } from '@testing-library/user-event/dist/utils'
import React, { useEffect, useState } from 'react'
import { useAsyncDebounce, useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table'

import styled, { css } from 'styled-components'

const Index = ({ columns, data }: any) => {
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
        pageCount: controlledPageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
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
                return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", total];
            } else if (currentPage % 5 >= 0 && currentPage > 4 && currentPage + 2 >= total) {
                return [1, "...", total - 3, total - 2, total - 1, total];
            } else {
                return [1, 2, 3, 4, 5, "...", total];
            }
        }
    };

    const [value, setValue] = React.useState(state.globalFilter)
    const [currentPage, setCurrentPage] = useState(1)
    const [nbrElement, setnbrElement] = useState(0)
    const [pagination, setPagination] = useState<(number | string)[]>([])

    useEffect(() => {
        setPagination(
            getVisiblePages(currentPage, controlledPageCount)
        )
    }, [controlledPageCount, currentPage])
    useEffect(() => {
        const displayPage = (currentPage: number) => {
            let testest = 0
            for (let i = 1; i <= currentPage; i++) {

                if (i === currentPage) {
                    testest += page.length
                } else {
                    testest += pageSize
                }
            }
            setnbrElement(testest)
        }
        displayPage(currentPage)
    }, [currentPage, nbrElement, page.length, pageSize])
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)
    return (
        <StyledTableContainer>
            <div className='d-flex d-flex justify-content-between'>
                <StyledTableSearch className='d-flex form-group align-items-center'>
                    <SearchLabel className='mr-2' htmlFor='search'>
                        Search:
                    </SearchLabel>
                    <Input className="form-control" type="search" id='search' value={value || ""}
                        onChange={e => {
                            setValue(e.target.value);
                            onChange(e.target.value);
                        }}
                        aria-controls='employee-table'
                    />
                </StyledTableSearch>
                <StyledTableLength >
                    <label className='d-flex align-items-center'>
                        Show{' '}
                        <Select className="form-select form-select-sm"
                            value={pageSize}
                            onChange={e => {
                                setPageSize(Number(e.target.value))
                            }}>
                            {[10, 25, 30, 50, 100].map(pageSize => (
                                <option key={pageSize} value={pageSize}>
                                    {pageSize}
                                </option>
                            ))}
                        </Select>
                        {' '} entries
                    </label>
                </StyledTableLength>
            </div>
            <StyledTable className="table" {...getTableProps()}>
                <StyledTableThead>
                    {headerGroups.map(headerGroup => (
                        <StyledTableTr {...headerGroup.getHeaderGroupProps()} >
                            {headerGroup.headers.map(column => (
                                <StyledTableTh scope="col" {...column.getHeaderProps(column.getSortByToggleProps())} >
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? <img src="../assets/img/sort_desc.png" alt="" />
                                                : <img src="../assets/img/sort_asc.png" alt="" />
                                            : null
                                        }
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
                {` ${pageIndex * pageSize + 1}-${nbrElement} of ${rows.length} entries`}
            </TablesInfo>
            <TablesInfoPagination>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><button className="page-link" onClick={() => {
                            previousPage()
                            setCurrentPage((prev) => prev - 1);
                        }} disabled={!canPreviousPage}>Previous</button></li>
                        {
                            pagination.map((page, index, array) => (
                                <li key={index} className="page-item">
                                    {currentPage === page ?
                                        <StyledPaginationBtn className={`page-link ${currentPage === page ? "active" : ""} `} disabled>{page}</StyledPaginationBtn>
                                        :
                                        page === "..." ?
                                            <StyledPaginationBtn className="page-link" key={index} disabled>{page}</StyledPaginationBtn>
                                            :
                                            <StyledPaginationBtn className="page-link" key={index} onClick={() => {
                                                // @ts-ignore TS2564
                                                gotoPage(page - 1)
                                                // @ts-ignore TS2564
                                                setCurrentPage(page)
                                            }}>
                                                {page}
                                            </StyledPaginationBtn >}
                                </li>
                            ))
                        }
                        <li className="page-item"><button className="page-link" onClick={() => {
                            nextPage()
                            setCurrentPage((prev) => prev + 1);
                        }} disabled={!canNextPage}>Next</button></li>
                    </ul>
                </nav>
            </TablesInfoPagination>
        </StyledTableContainer >
    )
}

export default Index
const StyledTableContainer = styled.div`
    position: relative;
`
const StyledTableLength = styled.div`
`
const Select = styled.select`
    margin: 0 5px;
`
const StyledTableSearch = styled.div`
`
const SearchLabel = styled.label`
    margin: 10px 10px 10px 0;
`;
const Input = styled.input`
    height: 40px;
`
const StyledTable = styled.table`
    border-spacing: 0 15px;
    border-collapse: separate;
    vertical-align: middle;
    border: none;
    background-color: transparent;
`
const StyledTableThead = styled.thead`

`
const StyledTableTr = styled.tr`
    height: 65px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 15px;
`
const StyledTableTbody = styled.tbody`
    ${StyledTableTr}{
        box-shadow: 0 2px 10px rgb(0 0 0 / 10%);
        border-radius: 5px;
        background-color: #FFFFFF;
    }
`
const StyledTableTh = styled.th`
    width: 70px;
    border: none;
    font-size: 18px;
`
const StyledTableTd = styled.td`
    width: calc(100% / 9);
    border: none;
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

const StyledPaginationBtn = styled.button<{ bgColor?: string }>`
    ${props => props.bgColor === 'true' && css`
    border: 1px solid #979797;
    background: linear-gradient(to bottom, #fff 0%, #dcdcdc 100%);
`}
`

// const StyledPaginationBtn = styled.button`
//     border: none;
//     min-width: 1.5em;
//     padding: 0.5em 1em;
//     cursor: pointer;
//     background-color: #ffffff;
//     &:hover{
//         background-color: #DEDEDE;
//     }
// `