import React from "react";
import './Header.css';

const Header = () => {

    return (
        <nav className="relative flex w-full flex-wrap items-center justify-between bg-neutral-100 py02 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-2">

            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <ul className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row">
                    <li>

                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48.24 48.24"
                            className="utk-logo utk-logo-square">
                            <title>University of Tennessee Libraries</title>
                            <polygon className="utk-logo--orange"
                                points="47.999 47.999 47.999 0 0 0 0 47.999 47.999 47.999 47.999 47.999" />
                            <path className="utk-logo--white"
                                d="M41.941,6.054V18.165H37.456c0-2.231-2.208-4.037-4.934-4.037a5.088,5.088,0,0,0-4.485,2.355V31.62a5.721,5.721,0,0,0,5.592,5.83h.014v4.486H14.357V37.45h.013a5.721,5.721,0,0,0,5.593-5.83V16.483a5.089,5.089,0,0,0-4.485-2.355c-2.725,0-4.934,1.806-4.934,4.037H6.058V6.054Z" />
                        </svg>
                    </li>
                    <li>
                        <a class="text-xl text-neutral-800 dark:text-neutral-200" href="/">
                            UTK Libraries
                        </a>
                    </li>
                </ul>
                <div className="relative flex items-center">
                    <div className="mr-4">My Account</div>
                    <div className="mr-4">Search</div>
                    <div className="mr-4">Menu</div>
                </div>
            </div>
        </nav>
    )
}

export default Header;