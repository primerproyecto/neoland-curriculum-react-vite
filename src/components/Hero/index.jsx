import React from 'react'

const Hero = ({hero}) => {
  return (
    <div>
      <h1>{hero.name} {hero.surname}</h1>
      <p>{hero.city}</p>
      <p>{hero.email}</p>
    </div>
  )
}

export default Hero
