
import React, { FunctionComponent } from 'react'
import './Pagination.css'

import {TiChevronLeft, TiChevronRight} from 'react-icons/ti/index'

const Pagination: FunctionComponent = ({ previous, next }) => {
    return (
        <div className="navigation">
            {previous && <button onClick={previous} type="button" className="btn btn-default"><TiChevronLeft  size={30}></TiChevronLeft></button>}
            {next && <button onClick={next} type="button" className="btn btn-default"><TiChevronRight size={30}></TiChevronRight></button>}
        </div>
    );
}

export default Pagination;