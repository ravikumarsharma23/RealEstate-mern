import React from "react";
import { Link } from "react-router-dom";
import {FaSearch} from "react-icons/fa"

export default function Header() {
  return (
    <header className="bg-blue-200 shadow-xl">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-2 ">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-2xl flex flex-wrap">
            <span className="text-slate-800">Real</span>
            <span className="text-orange-600">Estate</span>
          </h1>
        </Link>
       
        <ol className="flex gap-5 ">
          <Link to="/">
            <ul className="hidden sm:inline hover:text-orange-400">Home</ul>
          </Link>
          <Link to='/about'>
          <ul className="hidden sm:inline hover:text-orange-400">About</ul>
          </Link>
          <Link to='/sign-in'>
          <ul className=" hover:text-orange-400">Sign In</ul>
          </Link>
        </ol>
        <form
          action=""
          className="flex items-center bg-slate-200 rounded-xl p-2"
        >
          <input
            type="text "
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-blue-700" />
        </form>
      </div>
    </header>
  );
}