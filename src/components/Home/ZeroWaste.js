import React from "react"
import styles from "../../css/Home/zerowaste.module.css"
import img from "../../images/cleanlabel-zerowaste.png"


const ZeroWaste = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Zero waste delivery system to reduce plastics</h4>
        </article>
      </div>
    </section>
  )
}

export default ZeroWaste
