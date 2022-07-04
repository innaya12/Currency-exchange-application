import React, { useState, useEffect, createContext } from "react";
import axios from 'axios';
import Table from "../../components/table/table";
// import { getYesterdaysDate } from '../../data/getDate';
import './style.css';

export const TableContext = createContext("Default");

function Home() {
    const [tableList, setTableList] = useState([]);

    const onAddBtnClick = event => {
        setTableList(tableList.concat(<Table/>));
    };
    
    // const [lastExchangeRate, setLastExchangeRate] = useState([]);
    const [symbols, setSymbols] = useState([]);
    // const yesterdayDate = getYesterdaysDate();
    // const [selectedCurrency, setSelectedCurrency] = useState([])

    useEffect(() => {
        axios
        .get(`https://api.exchangerate.host/symbols`)
        .then((response) => setSymbols(response.data.symbols));
    }, []);

    const symbolsOptions = Object.keys(symbols).map(key => 
        <option key={key} value={key}>{key}</option>
    ) 
    
    return(
        <TableContext.Provider value={{ symbolsOptions }}>
            <h2>Currency exchange application</h2>
            <div className="add-button">
                <button onClick={onAddBtnClick}>Add</button>
            </div>
            <Table/>
            {tableList}
        </TableContext.Provider>
    )
}

export default Home;