"use client";

import React, { useState, ChangeEvent } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Buscar productos..."
      />
    </div>
  );
};

export default SearchBar;
