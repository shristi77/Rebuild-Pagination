import React, { useState , useEffect } from 'react'

const Pagination = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize , setPageSize] = useState(props.pageSize);
    
    useEffect(() => {
        let start = props.pageSize * (currentPage - 1);
        let end = props.pageSize + start;
        props.onPaginationChange(start, end, pageSize);

    }, [currentPage , pageSize]);

    const handleChange = (e)=>{
        
        setPageSize(parseInt(e.target.value));
    }

    return (
        <div>
            <button className="btn" onClick={() => {
                setCurrentPage(1);
                }}>First</button>
            
            <button className="btn" onClick={() => {
                currentPage === 1 ? 
                        setCurrentPage(Math.ceil(props.students.length / props.pageSize)) :   
                        setCurrentPage(currentPage-1);
                }}>Previous
            </button>
            
            <button className="btn">{currentPage}</button>
            
            <button className="btn" onClick={() => {
                currentPage === Math.ceil(props.students.length / props.pageSize) ? 
                                setCurrentPage(1) : setCurrentPage(currentPage + 1);
                }}>Next
            </button>
            
            <button className="btn" onClick={() => {
                setCurrentPage(Math.ceil( props.students.length / props.pageSize));
                }}>Last
            
            </button> 

            <select value={pageSize} onChange={handleChange}>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="7">7</option>
                <option value="10">10</option>
                <option value="12">12</option>
            </select>
        </div>
    )
}

export default Pagination;
