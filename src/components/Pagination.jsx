import React from 'react'

const Pagination = ({ setCurrentPage,currentPage }) => {

    function decrement() {
        setCurrentPage(currentPage - 1);
    }
    function increment() {
        setCurrentPage(currentPage + 1);
    }
    return (
        <div>
            <button disabled={currentPage === 1 ? true : false} onClick={decrement}>
                PREVIOUS
            </button>
            <button disabled={currentPage === 2 ? true : false} onClick={increment}>
                NEXT
            </button>
        </div>
    )
}

export default Pagination