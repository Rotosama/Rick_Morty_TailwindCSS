import React, { useState, useEffect } from "react";
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";
import axios from "axios";
import "./App.css";

function App() {
    let [fetchedData, updateFetchedData] = useState([]);
    let [results, setResults] = useState("");
    let [pageNumber, updatePageNumber] = useState(1);
    let [search, setSearch] = useState("");
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

    useEffect(() => {
        (async function () {
            let data = await axios.get(api);
            updateFetchedData(data);
            setResults(data.data.results);
        })();
    }, [api]);

    return (
        <div className="bg-inherit  flex flex-column">
            <h1 className="font-semibold">Characters</h1>
            <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
            <div className="grid gap-4">
                <div className="columns-1">
                    Filter component will be placed here
                </div>
                <div className="columns-4">
                    <Card results={results} />
                </div>
            </div>
        </div>
    );
}

export default App;
