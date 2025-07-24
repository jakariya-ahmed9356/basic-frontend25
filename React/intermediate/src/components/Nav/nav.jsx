import { Link, useLocation } from 'react-router-dom'; 
import Logo from '../../assets/logo.png';
import { NavLink, useNavigate } from 'react-router-dom';

import { act, useState } from 'react';

export default function Nav() {
    //Open & close drowdown menu
    const [serviceOpen, setServiceOpen] = useState(false);
    // Navigate url
    const navigate = useNavigate();
    // mobile menu open and close 
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const isServicesActive = location.pathname.startsWith('/services');

const navLinkStyle = ({ isActive }) =>
  isActive ? 'text-red-500 font-semibold underline' : 'text-gray-600 hover:text-red-500';



return (
    <div className='shadow-sm py-4 mb-6 px-15'>
        <header className=''>
            <div className='flex items-center justify-between'>
                {/* logo */}
                <NavLink to="/"><img src={Logo} alt="logo"  className='w-24'/></NavLink>
                {/* desktop menu  */}
                <nav className='sm-device md:flex justify-center shadow-sm py-4 rounded-full px-4 py-2 space-x-8 text-gray-600 font-medium'>
                    <NavLink to="/" end className={navLinkStyle}>Home</NavLink>
                    <NavLink to="/product" className= {navLinkStyle} >Product</NavLink>
                    <NavLink to="/about" className= {navLinkStyle} >About</NavLink>
                    <NavLink to="/contact" className= {navLinkStyle} >Contact</NavLink>
                    <NavLink to="/Jobs" className={navLinkStyle}>Jobs</NavLink>

                    {/* Dropdown menu  */}

                    <div className="relative">
                        <NavLink 
                            onClick={(e) => {
                                e.preventDefault();  //stop auto navigation
                                setServiceOpen(!serviceOpen);
                            }}
                             className={`focus:outline-none text-lg ${
                                isServicesActive ? 'text-red-500 font-semibold underline' : 'text-gray-700 hover:text-red-500'
                            }`}
                        >
                        Services 
                        </NavLink>

                        { serviceOpen && (
                            <div
                            className='absolute top-10 right-0 bg-white py-4 text-gray-700 rounded shadow w-60 z-50'
                            onMouseLeave={() => setServiceOpen(false)}
                            >
                                <NavLink
                                to="/services/web-design"
                                onClick={() => setServiceOpen(false)} // 👈 this closes the dropdown
                                className={({ isActive }) =>
                                    `block px-4 py-2 text-lg font-semibold ${isActive ? 'text-red-500' : 'hover:text-red-500'}`
                                }
                                >
                                Web Design
                                </NavLink>

                                <NavLink
                                to="/services/web-development"
                                onClick={() => setServiceOpen(false)}
                                className={({ isActive }) =>
                                    `block px-4 py-2 text-lg font-semibold ${isActive ? 'text-red-500' : 'hover:text-red-500'}`
                                }
                                >
                                Web Development
                                </NavLink>

                                
                                    
                            </div>
                            
                        ) }
                    </div>
                

                </nav>
                
                {/* Contact Button (always visible on desktop) */}
                <button onClick={() => navigate('/contact')} className='sm-device bg-orange-400 text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-orange-500 transition'>
                    Get Started
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
                <NavLink to="/" className="block text-gray-700 hover:text-blue-600">Home</NavLink>
                    <NavLink to="/product" className="block text-gray-700 hover:text-blue-600">Product</NavLink>
                    <NavLink to="/about" className="block text-gray-700 hover:text-blue-600">About</NavLink>
                    <NavLink to="/contact" className="block text-gray-700 hover:text-blue-600">Contact</NavLink>

                <button className="w-full bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-700 transition">
                    Create Account
                </button>
                </nav>
            )}


        </header>
        </div>
    );
}


