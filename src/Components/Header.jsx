import React from 'react'
import logo from '../images/logo.svg'

function Header() {
    return (
        <>
            <header className="flex justify-between">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-10 w-10 ml-28"
                    />
                <nav className='w-7/12'>
                    <ul className=" text-white flex gap-8">
                        <li className="hover:text-gray-300 mt-3 font-medium px-1.5 text-white">Home</li>
                        <li className="hover:text-gray-300 mt-3 font-medium px-1.5">PTE Practice</li>
                        <li className="hover:text-gray-300 mt-3 font-medium px-1.5" >PTE Guide</li>
                        <li className="hover:text-gray-300 mt-3 font-medium px-1.5">Tutorials</li>
                        <li className="hover:text-gray-300 mt-3 font-medium px-1.5">App</li>
                        <button className=" items-center text-[#5838FC] font-medium justify-center gap-2 px-9 py-3 rounded-[36px] bg-white ml-7">
                            Login
                        </button>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header