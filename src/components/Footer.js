import React from "react"
import styles from "../css/footer.module.css"
import links from "../constants/links"
import {Link} from 'gatsby';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.links1.map((item, index) => {
          return (
            <Link key={index} to={item.path}>
              {item.text}
            </Link>
          )
        })}
      </div>
      <div className={styles.copyright}>
        copyright &copy; cleanlabel company {new Date().getFullYear()} all
        rights reserved
      </div>
    </footer>
  )
}

export default Footer
