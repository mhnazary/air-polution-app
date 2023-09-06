import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import '../index.css';
import { BiSolidMicrophone } from 'react-icons/bi';
import { FaRegSun } from 'react-icons/fa';

const Header = () => (
  <header className="py-4">
    <div className="flex justify-between text-2xl items-center">
      <div className="w-28 flex flex-row h-12 items-center">
        <BsChevronLeft className="backBttn" />
        <NavLink to="/" className="text-xl font-bold">Back</NavLink>
      </div>
      <NavLink to="/" className="text-3xl font-bold">Europe</NavLink>
      <div className="w-40 flex justify-evenly text-xl">
        <BiSolidMicrophone className="text-3xl" />
        <FaRegSun className="text-3xl" />
      </div>
    </div>
  </header>
);

export default Header;
