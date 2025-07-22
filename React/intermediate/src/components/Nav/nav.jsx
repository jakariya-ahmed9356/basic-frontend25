import { Link } from 'react-router-dom'; 
import Logo from '../../assets/logo.png';

import { useState } from 'react';

export default function Nav() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
    <div >
        <header className='px-10 mb-6'>
            <div className='flex items-center justify-between'>
                {/* logo */}
                <Link to="/"><img src={Logo} alt="logo"  className='w-24'/></Link>
                {/* desktop menu  */}
                <nav className='xs:hidden   sm:hidden md:flex justify-center shadow-sm py-4 rounded-full px-4 py-2 space-x-6 text-gray-600 font-medium'>
                    <Link to="/" className='text-gray-700 hover:text-red-500'>Home</Link>
                    <Link to="/product" className='text-gray-700 hover:text-red-500'>Product</Link>
                    <Link to="/about" className='text-gray-700 hover:text-red-500'>About</Link>
                    <Link to="/contact" className='text-gray-700 hover:text-red-500'>Contact</Link>
                </nav>

                {/* Contact Button (always visible on desktop) */}
                <button className='xs:hidden    sm:hidden bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-500 transition'>
                    Contact
                </button>
                {/* Hamburger Menu Button (mobile ) */}
                <button className='md:hidden text-gray-700 focus:outline-none'
                onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>

            </div>

            
            {/* Mobile Menu */}
            {menuOpen && (
                <nav className="md:hidden px-4 pb-4 space-y-2">
                <a href="#" className="block text-gray-700 hover:text-blue-600">Home</a>
                <a href="#" className="block text-gray-700 hover:text-blue-600">Product</a>
                <a href="#" className="block text-gray-700 hover:text-blue-600">About</a>
                <a href="#" className="block text-gray-700 hover:text-blue-600">Contact</a>
                <button className="w-full bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-700 transition">
                    Create Account
                </button>
                </nav>
            )}


        </header>
        </div>
    );
}


