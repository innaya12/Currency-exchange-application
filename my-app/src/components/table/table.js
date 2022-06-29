import React, { useContext, Fragment } from 'react';
import { TableContext } from '../../pages/home/home';
import './style.css';

function Table() {
    const { currentExchangeRate, lastExchangeRate } = useContext(TableContext);

    return(
        <div>
            <h4> 1 EUR</h4>
            <div className="table-wrapper">
                <table>
                    <tr>
                        <th>Currency</th>
                        <th>Current exchange rate</th>
                        <th>Last exchange rate</th>
                    </tr>
                    {currentExchangeRate && Object.entries(currentExchangeRate).map(([key, value]) => (
                    <Fragment>
                        <tr>
                            <td>{key}</td>
                            <td>{value}</td>
                        </tr>
                    </Fragment>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default Table;