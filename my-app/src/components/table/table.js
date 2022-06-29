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
                    {currentExchangeRate && Object.entries(currentExchangeRate).map(([key1, value1]) => (
                    <Fragment>
                        <tr>
                            <td>{key1}</td>
                            <td>{value1}</td>
                            {Object.entries(lastExchangeRate).map(([key2, value2]) => (
                                key1 === key2 && <td>{value2}</td>
                            ))}
                        </tr>
                    </Fragment>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default Table;