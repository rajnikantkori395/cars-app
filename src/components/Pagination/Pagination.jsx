import React from 'react'
import { Button, Section } from './Pagination.style';
import { ReactComponent as SVGIcon } from "../../svg/chevron-circled.svg";
import { ReactComponent as SVGIcon1 } from "../../svg/chevron-circled-pre.svg";
const Pagination = ({ setCurrentPage, currentPage }) => {

    function decrement() {
        setCurrentPage(currentPage - 1);
    }
    function increment() {
        setCurrentPage(currentPage + 1);
    }
    return (
        <Section>
            <Button disabled={currentPage === 1 ? true : false} onClick={decrement}>
                {<SVGIcon />}
            </Button>
            <Button disabled={currentPage === 2 ? true : false} onClick={increment}>
                {<SVGIcon1 />}
            </Button>
        </Section>
    )
}

export default Pagination