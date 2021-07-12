import React, { useState } from 'react';
import { Transition } from "@headlessui/react";
import './NavBar.css'

import { Link } from 'react-scroll'

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="hidden lg:block fixed w-full z-40 desktopNav">
                <ul className="flex navList justify-center mx-auto">

                    <li>
                        <Link
                            className="cursor-pointer"
                            onClick={() => {
                                setIsOpen(!isOpen)
                            }}
                            to="where"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                        >
                            <p>Where &amp; When</p>
                        </Link>
                    </li>

                    <li>
                        <Link
                            className="cursor-pointer"
                            onClick={() => {
                                setIsOpen(!isOpen)
                            }}
                            to="accomodation"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                        >
                            <p>Accomodation</p>
                        </Link>
                    </li>

                    <li>
                        <Link
                            className="cursor-pointer"
                            onClick={() => {
                                setIsOpen(!isOpen)
                            }}
                            to="directions"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                        >
                            <p>Directions</p>
                        </Link>
                    </li>

                    <li>
                        <Link
                            className="cursor-pointer"
                            onClick={() => {
                                setIsOpen(!isOpen)
                            }}
                            to="rsvp"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                        >
                            <p>RSVP</p>
                        </Link>
                    </li>
                </ul>
            </div>
                <button
                    onClick={() => {
                        setIsOpen(!isOpen)
                    }}
                    type="button"
                    className="lg:hidden fixed z-50 right-0 mx-4 my-4 bg-gray-900 inline items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    {!isOpen ? (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    )}
                </button>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="lg:hidden fixed z-40 bg-white w-screen" id="mobile-menu">
                        <div ref={React.createRef} className="flex flex-col">
                                
                            <ul className="navList text-center">
                                <li>
                                        <Link
                                            className="cursor-pointer"
                                            onClick={() => {
                                                setIsOpen(!isOpen)
                                            }}
                                            to="hero"
                                            activeClass="active"
                                            spy={true}
                                            smooth={true}
                                        >
                                            S&amp;D
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="cursor-pointer"
                                            onClick={() => {
                                                setIsOpen(!isOpen)
                                            }}
                                            to="where"
                                            activeClass="active"
                                            spy={true}
                                            smooth={true}
                                        >
                                        <p>Where &amp; When</p>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="cursor-pointer"
                                            onClick={() => {
                                                setIsOpen(!isOpen)
                                            }}
                                            to="accomodation"
                                            activeClass="active"
                                            spy={true}
                                            smooth={true}
                                        >
                                            <p>Accomodation</p>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="cursor-pointer"
                                            onClick={() => {
                                                setIsOpen(!isOpen)
                                            }}
                                            to="directions"
                                            activeClass="active"
                                            spy={true}
                                            smooth={true}
                                        >
                                            <p>Directions</p>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="cursor-pointer"
                                            onClick={() => {
                                                setIsOpen(!isOpen)
                                            }}
                                            to="rsvp"
                                            activeClass="active"
                                            spy={true}
                                            smooth={true}
                                        >
                                            <p>RSVP</p>
                                        </Link>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                    )}
                </Transition>
        </div>
    )
}

export default NavBar