import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { TableContext } from '../../pages/home/home';
import './style.css';

function Table() {
    const { symbolsOptions } = useContext(TableContext);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [currentExchangeRate, setCurrentExchangeRate] = useState([]);

    const handleCurrency = (e) => {
        console.log('submit');
        axios
        .get(`https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}`)
        .then((response) => setCurrentExchangeRate(response.data.result));
    }

    return(
        <div>
            <div className="convert-wrapper">
                <p>1</p> 
                <select onChange={(event) =>setFromCurrency(event.target.value)}>{symbolsOptions} is equl to</select>
                <p>equals to</p> 
                <select onChange={(event) =>setToCurrency(event.target.value)}>{symbolsOptions}</select>
                <p className="toP">{currentExchangeRate}</p> 
            </div>
            <button onClick={e => handleCurrency(e)}> submit</button>
        </div>
    )
}

export default Table;