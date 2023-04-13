import React from "react";

const Search = ({ setSearch, updatePageNumber }) => {
    let searchBtn = (e) => {
        e.preventDefault();
    };
    return (
        <form className="">
          
            <input
                onChange={(e) => {
                    updatePageNumber(1);
                    setSearch(e.target.value);
                }}
                placeholder="Search for characters"
                className=""
                type="text"
            />
            <button onClick={searchBtn} className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                Search
            </button>
        </form>
    );
};

export default Search;
