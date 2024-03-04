import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap flex-col items-center justify-between mx-auto p-4">
                <a href="/" className="">
            <span className="text-center text-6xl font-protest whitespace-nowrap dark:text-white">Foodie Calorie Quest</span>
            </a>

                

   

            <ul className="flex font-medium font-concert px-12 py-4 md:flex-row md:space-x-20 text-2xl">
                <li
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                <NavLink to='/'>Home</NavLink>
                </li>
                <li 
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <NavLink to='recipe-search'>Recipe Search</NavLink>
                </li>
                <li
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <NavLink to='recipe-analysis' >Recipe Analyzer</NavLink>
                </li>
                <li
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <NavLink to='calories-calculation'>Calorie Calculator</NavLink>
                </li>
            </ul>
        </div>

        </nav>
        

    )
}

export default Navbar;