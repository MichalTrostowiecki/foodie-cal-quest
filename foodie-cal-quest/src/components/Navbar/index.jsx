import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [ showMenu, setShowMenu ] = useState(false);

    // This function shows/hides burger menu when user clicks
    const handleToggle = () => {
        setShowMenu(!showMenu);
    }


    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Foodie Calorie Quest</span>
            </a>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                

   

            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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