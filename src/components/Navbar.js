import React, {useState} from 'react'
import links from '../constants/links';
import {Link} from 'gatsby';
import styles from '../css/navbar.module.css';
import logoDesktop from '../images/cleanlabel-logo.png';
import logoMobile from '../images/cleanlabel-logo-mob.png';
import hamburgerMenu from '../images/hamburger-menu.png';

const Navbar = () => {
    const [isOpen, setNav] = useState();
    const toggleNav = () => {
        setNav(isOpen => !isOpen);
    }
    return (
        <nav className={styles.navbar}>
            <div className={styles.navCenter}>
                <div className={styles.navHeader}>
                    <button type="button" className={styles.logoBtn} onClick={toggleNav}>
                        <img src={hamburgerMenu} />
                    </button>
                    <img className={styles.logoDesktop} src={logoDesktop} alt="cleanlabel logo" />
                    <img className={styles.logoMobile} src={logoMobile} alt="cleanlabel logo" />
                    <Link to={"#"}>Bag</Link>
                </div>
                <div className={styles.links1Section}>
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
                <div className={styles.links2Section}>
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
