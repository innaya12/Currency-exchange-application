import React, { useState, useEffect, createContext, useMemo } from "react";
import axios from 'axios';
import Table from "../../components/table/table";
import './style.css';

export const TableContext = createContext("Default");

function Home() {
    const [currentExchangeRate, setCurrentExchangeRate] = useState([]);
    const [lastExchangeRate, setLastExchangeRate] = useState([]);
    
    useEffect(() => {
        axios
        .get("https://api.exchangerate.host/latest")
        .then((response) => setCurrentExchangeRate(response.data.rates));
    }, []);

    useEffect(() => {
        //need to change the url to dynamic - have current date param
        axios
        .get("https://api.exchangerate.host/2022-06-28")
        .then((response) => setLastExchangeRate(response.data.rates));
    }, []);

    return(
        <TableContext.Provider value={{ currentExchangeRate, lastExchangeRate }}>
            <h2>Currency exchange application</h2>
            <Table/>
        </TableContext.Provider>
    )
}

export default Home;