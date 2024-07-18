import React, { ChangeEvent } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="flex items-center border overflow-hidden w-full max-w-xs">
      <input
        type="search"
        name="search"
        placeholder="Search"
        className="bg-white rounded-l-full h-10 px-5 pr-0 text-sm focus:outline-none w-full"
        onChange={handleSearchChange}
      />
      <button
        type="submit"
        className="bg-gray-200 h-10 px-4 rounded-r-full text-gray-600">
        <svg className="h-5 w-5 text-orange-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z"/>
          <circle cx="10" cy="10" r="7" />
          <line x1="21" y1="21" x2="15" y2="15" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;