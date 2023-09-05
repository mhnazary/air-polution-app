import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CgSearch } from 'react-icons/cg';
import '../index.css';
import EuropeCountries from './EuropeCountries';
import CountriesItem from './CountryItem';

const CountryList = () => {
  const [search, setSearch] = useState('');
  const { searchFilter } = useSelector((state) => state.detail);

  return (
    <div className="">
      <div className="searchBar-container flex w-full bg-blue">
        <div className=" bg-blue w-full flex justify-between items-center px-8 py-2">
          <h2 className="bg-blue text-lg font-bold">Details by countries</h2>
          <form className="bg-blue text-base flex items-center">
            <input
              type="text"
              className="bg-blue border border-gray-500 py-2 px-3 rounded-lg"
              onChange={(e) => setSearch(e.target.value)}
              placeholder={`Search ${searchFilter ? 'capitals' : 'countries'}`}
            />
            <CgSearch className="text-2xl bg-blue mr-4" />
          </form>
        </div>
      </div>
      <ul className="country-ul grid">
        {!searchFilter
            && EuropeCountries
              .filter((item) => (search.toLocaleLowerCase() === ''
                ? item
                : item.country.toLocaleLowerCase().includes(search)))
              .map((data) => <CountriesItem key={data.country} data={data} className="country-list" />)}
      </ul>
    </div>
  );
};

export default CountryList;
