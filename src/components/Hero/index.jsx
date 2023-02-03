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
        <p>🗺️{hero.city} </p>
        <p>🗓️{hero.birthDate}</p>
        <p>
          📧
          <a href={"mailto:" + hero.email}>
          tony@starkindustries.com
          </a>
        </p>
        <p>📱 {hero.phone}</p>
        <p>💾<a href={hero.gitHub}>
            GitHub
          </a></p>
      </div>
    </div>
  )
}

export default Hero
