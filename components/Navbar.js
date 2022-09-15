import React from 'react';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link'
const Navbar = () => {
    return (
        <div className={styles.mainnav}>
            <ul>
                <Link href='/'><a><li>Home</li></a></Link>
                <Link href='/about'><a><li>About</li></a></Link>
                <Link href='/project'><a><li>Project</li></a></Link>
                <Link href='/contact'><a><li>Contact</li></a></Link>
            </ul>
        </div>
    );
}

export default Navbar;