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
          <h4>explore the difference</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            doloribus enim necessitatibus?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            doloribus enim necessitatibus?
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default ZeroWaste
