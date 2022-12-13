import { useState, useEffect, memo } from "react";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { usePaginationPages } from "./usePaginationPages";

const Pagination = ({
    gotoPage,
    length,
    pageSize,
    setPageSize
}: {
    gotoPage: (updater: number | ((pageIndex: number) => number)) => void;
    length: number;
    pageSize: number;
    setPageSize: (pageSize: number) => void;
}) => {
    const [perPage, setPerPage] = useState(pageSize);

    const {
        canGo,
        currentPage,
        pages,
        goTo,
        goNext,
        goPrev
    } = usePaginationPages({
        gotoPage,
        length,
        pageSize
    });

    useEffect(() => {
        setPageSize(perPage);
    }, [perPage, setPageSize]);

    return (
        <div className="m-4 flex items-center justify-center">
            <button
                onClick={goPrev}
                disabled={!canGo.previous}
                className="m-1 px-2 py-1 border rounded-md"
            >
                Previous
            </button>
            {pages.map((page, i) => (
                <button
                    onClick={() => {
                        goTo(page)
                    }}
                    key={i}
                    style={{
                        background: currentPage === page ? "blue" : "none",
                        color: currentPage === page ? "white" : "black"
                    }}
                    className="m-1 px-3 py-1 border rounded-md"
                >
                    {page}
                </button>
            ))}
            <button
                onClick={goNext}
                disabled={!canGo.next}
                className="m-1 px-2 py-1 border rounded-md"
            >
                Next
            </button>
        </div>
    );
};

export default memo(Pagination);
