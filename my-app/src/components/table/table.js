import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { TableContext } from '../../pages/home/home';
import { getYesterdaysDate } from '../../data/getDate';

import './style.css';

function Table() {
    const { symbolsOptions } = useContext(TableContext);
    const [fromCurrency, setFromCurrency] = useState('AED');
    const [toCurrency, setToCurrency] = useState('AED');
    const [currentExchangeRate, setCurrentExchangeRate] = useState([]);
    const [lastExchangeRate, setLastExchangeRate] = useState([]);

    const handleCurrency = (e) => {
        axios
        .get(`https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}`)
        .then((response) => setCurrentExchangeRate(Math.round((response.data.result + Number.EPSILON) * 100) / 100));

        axios
        .get(`https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}&date=${getYesterdaysDate}`)
        .then((response) => setLastExchangeRate(Math.round((response.data.result + Number.EPSILON) * 100) / 100));        
    }

    return(
    <tbody>
        <tr style={{textAlign:"center"}}>
            <td><select onChange={(event) =>setFromCurrency(event.target.value)}>{symbolsOptions}</select></td>
            <td><select onChange={(event) =>setToCurrency(event.target.value)}>{symbolsOptions}</select></td>
            <td>{currentExchangeRate}</td>
            <td>{lastExchangeRate}</td>
            <td><button className="submit-button" onClick={e => handleCurrency(e)}>submit</button></td>
        </tr>
    </tbody>
    )
}

export default Table;