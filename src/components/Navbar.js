import React, {useState} from 'react'
import links from '../constants/links';
import {Link} from 'gatsby';
import styles from '../css/navbar.module.css';
import logo from '../images/cleanlabel-logo.png';

const Navbar = () => {
    const [isOpen, setNav] = useState();
    const toggleNav = () => {
        setNav(isOpen => !isOpen);
    }
    return (
        <nav className={styles.navbar}>
            <div className={styles.navCenter}>
                <div className={styles.navHeader}>
                    <img src={logo} alt="cleanlabel logo" />
                    <button type="button" className={styles.logoBtn} onClick={toggleNav}>
                        link
                    </button>
                </div>
                <div className="links-1-section">
                    <ul className={
                        isOpen ? `${styles.navLinks} ${styles.showNav}`
                        : `${styles.navLinks}`
                    }>
                        {links.links1.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={item.path}>{item.text}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="links-2-section">
                    <ul className={`${styles.navLinks} ${styles.showNav}`}>
                        {links.links2.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={item.path}>{item.text}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
