import React from 'react'
import styles from './index.module.css'

const Hero = ({hero}) => {
  console.log('este es el componente', hero)
  return (
    <div className={styles.hero}>
      <img src={hero.image} alt="iamgen" />
      <div className={styles.card}>
      <h2>
        {hero.name} {hero.adress}
      </h2>
        <p>πΊοΈ{hero.city} </p>
        <p>ποΈ{hero.birthDate}</p>
        <p>
          π§
          <a href={"mailto:" + hero.email}>
          tony@starkindustries.com
          </a>
        </p>
        <p>π± {hero.phone}</p>
        <p>πΎ<a href={hero.gitHub}>
            GitHub
          </a></p>
      </div>
    </div>
  )
}

export default Hero
