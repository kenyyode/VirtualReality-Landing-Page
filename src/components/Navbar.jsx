import logo from '../assets/logo.png'
import {navItems} from '../constants/index'
import {Menu, X} from 'lucide-react';
import { useState } from 'react';

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img src={logo} alt=''className='h-10 w-10 mr-2' />
                        <span className="text-xl tracking-tight"> VirtualR </span>
                    </div>
                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center items-center space-x-4">
                        <a href="#" className='py-2 px-3 border rounded-md'> Sign In</a>
                        <a href='#' className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-2 rounded-md'> Create Account</a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleMobileMenu}>
                            {mobileMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
                        </button>

                    </div>
                </div>
                {mobileMenuOpen && (
                    <div className=" fixedright-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center gap-6 lg:hidden">
                       <ul> 
                            {navItems.map((item, index) => (
                                <li key={index} className='py-4 text-center'> 
                                    <a href={item.href}>{item.label}</a>
                                </li>
                                ))}
                        </ul> 
                        <div className='grid lg:hidden justify-center items-center space-y-4'>
                            <a href='#' className='px-2 py-2 border rounded-md text-center'> Sign In  </a>
                            <a href='#' className='px-16 py-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 text-center'> Create Account </a>
                             </div>
                    </div>
                )}
            </div>

        </nav>
    )
}

export default Navbar;