import React from 'react';
import Link from 'next/link'
const Navbar = () => {
    return (
        <div className="fixed w-full z-100 bg-white shadow-lg shadow-zinc-200 text-black font-semibold tracking-wider uppercase h-64">
            <ul className='justify-end gap-36 mt-20 no-underline flex list-none mr-20 '>
                <Link href='/'>
                    <a>
                        <li className='hover:text-yellow-400 -translate-y-1 transition ease-in-out delay-150 duration-100'>
                            Home
                        </li>
                    </a>
                </Link>
                <Link href='/about'>
                    <a>
                        <li className='hover:text-yellow-400 -translate-y-1 transition ease-in-out delay-150 duration-100'>
                            About
                        </li>
                    </a>
                </Link>
                <Link href='/project'>
                    <a>
                        <li className='hover:text-yellow-400 -translate-y-1 transition ease-in-out delay-150 duration-100'>
                            Project
                        </li>
                    </a>
                </Link>
                <Link href='/contact'>
                    <a>
                        <li className='hover:text-yellow-400 -translate-y-1 transition ease-in-out delay-150 duration-100'>
                            Contact
                        </li>
                    </a>
                </Link>
            </ul>
        </div>
    );
}

export default Navbar;