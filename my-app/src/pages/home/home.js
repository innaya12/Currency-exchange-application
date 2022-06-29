import React, { useState, useEffect, createContext } from "react";
import axios from 'axios';
import Table from "../../components/table";
import './style.css';

export const TableContext = createContext("Default");

function Home() {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        axios
        .get("https://api.exchangerate.host/latest")
        .then((response) => setTableData(response.data.rates));
    }, []);

    return(
        <TableContext.Provider value={tableData}>
            <h2>Currency exchange application</h2>
            <Table/>
        </TableContext.Provider>
    )
}

export default Home;