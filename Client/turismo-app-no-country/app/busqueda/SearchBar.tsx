// components/SearchBar.jsx
import React, { ChangeEvent } from 'react';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="flex overflow-hidden w-full">
      <input
        type="search"
        name="search"
        placeholder="Search"
        className="bg-white rounded-l-full h-10 px-5 pr-0 text-xs md:text-sm focus:outline-none w-full border border-solid border-gray-400"
        onChange={handleSearchChange}
      />
      <button
        type="submit"
        className="bg-apple border-0 cursor-pointer">
        <SearchIcon className='text-white'/>
      </button>
    </div>
  );
};

export default SearchBar;
