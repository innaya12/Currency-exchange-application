import React, { useState, useContext } from 'react';
import { TableContext } from '../../pages/home/home';
import './style.css';

function Table() {
    const { currentExchangeRate, lastExchangeRate, symbolsOptions } = useContext(TableContext);
    const [selectedCurrency, setSelectedCurrency] = useState([])

    return(
        <div>
            <p>1 EUR equals to</p> 
            <select onChange={(event) =>setSelectedCurrency([...selectedCurrency, event.target.value])}>{symbolsOptions}</select>
            <div className="table-wrapper">
                {selectedCurrency.length > 0 &&
                <table>
                    <thead> 
                        <tr>
                            <th>Currency</th>
                            <th>Current exchange rate</th>
                            <th>Last exchange rate</th>
                        </tr>
                    </thead> 
                    <tbody>
                        {selectedCurrency.map((code) => {
                            return(
                            <tr key={code}>
                                <td>{code}</td>
                                <td>{currentExchangeRate[code]}</td>
                                <td>{lastExchangeRate[code]}</td>
                                <td onClick={event => setSelectedCurrency(selectedCurrency.filter(item => item !== code))} className="remove-row">remove</td>
                            </tr>
                            )})}
                    </tbody>
                </table>
                }
            </div>
        </div>
    )
}

export default Table;