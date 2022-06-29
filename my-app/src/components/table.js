import React, { useContext } from 'react';
import { TableContext } from '../pages/home/home';
  
function Table() {
    const data = useContext(TableContext);

    return(
        <div>
            <h4> 1 EUR</h4>
            {data && Object.entries(data).map(([key, value]) => (
            <div key={key}>{key} {value}</div>
            ))}
        </div>
    )
}

export default Table;