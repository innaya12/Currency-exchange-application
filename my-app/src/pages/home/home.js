import React, { useState, useEffect, createContext } from "react";
import axios from 'axios';
import Table from "../../components/table/table";
import { getYesterdaysDate } from '../../data/getDate';
import './style.css';

export const TableContext = createContext("Default");

function Home() {
    const [currentExchangeRate, setCurrentExchangeRate] = useState([]);
    const [lastExchangeRate, setLastExchangeRate] = useState([]);
    const [symbols, setSymbols] = useState([]);
    const yesterdayDate = getYesterdaysDate();
    
    useEffect(() => {
        axios
        .get("https://api.exchangerate.host/latest")
        .then((response) => setCurrentExchangeRate(response.data.rates));
    }, []);

    useEffect(() => {
        axios
        .get(`https://api.exchangerate.host/${yesterdayDate}`)
        .then((response) => setLastExchangeRate(response.data.rates));
    }, []);

    useEffect(() => {
        axios
        .get(`https://api.exchangerate.host/symbols`)
        .then((response) => setSymbols(response.data.symbols));
    }, []);

    const symbolsOptions = Object.keys(symbols).map(key => 
        <option key={key} value={key}>{key}</option>
    ) 

    return(
        <TableContext.Provider value={{ currentExchangeRate, lastExchangeRate, symbolsOptions }}>
            <h2>Currency exchange application</h2>
            <Table/>
        </TableContext.Provider>
    )
}

export default Home;