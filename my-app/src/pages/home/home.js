import React, { useState, useEffect, createContext } from "react";
import axios from 'axios';
import Table from "../../components/table/table";
import './style.css';

export const TableContext = createContext("Default");

function Home() {
    const [tableList, setTableList] = useState([<Table/>]);
    const [symbols, setSymbols] = useState([]);
    const [count, setCount] = useState(0);

    const onAddBtnClick = () => {
        setTableList([...tableList, <Table/>]);
        setCount(i => i + 1);
    };
    
    const onRemoveBtnClick = () => {
        if(count > 0){
            setTableList(tableList.slice(0, count));
            setCount(i => i - 1);
        }
    }

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
                <button onClick={onRemoveBtnClick}>Remove</button>
            </div>
            {tableList}
        </TableContext.Provider>
    )
}

export default Home;
