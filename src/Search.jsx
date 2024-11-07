import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <form className="mt-4 flex space-x-2 justify-between items-center">
      <input
        className="flex-grow p-2 border border-blue-600 focus:border-blue-800 focus:border-2 rounded-md focus:outline-none"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
    </form>
  );
};

export default Search;
