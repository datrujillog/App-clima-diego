import React from 'react'
import s from './Card.module.css'

export default function Card (props) {
  const { max, min, name, img, onClose } = props
  // acá va tu código
  return (
    <div className={s.cardContainer}>
      <button className={s.button} onClick={onClose}>
        X
      </button>
      <h3 className={s.title}>{name}</h3>
      <div className={s.bodyContainer}>
        <div className={s.temperatureContainer}>
          <div className={s.temperature}>
            <p className={s.subTitle}>min</p>
            <p>{min}</p>
          </div>
          <div className={s.temperature}>
            <p className={s.subTitle}>max</p>
            <p>{max}</p>
          </div>
        </div>
        <hr />
        <figure>
          <img
            className={s.imgCard}
            src={`http://openweathermap.org/img/wn/${img}@2x.png`}
            alt='solcito'
          />
        </figure>

        

        
               
      

      
      
        {/* <hr /> */}
      </div>
        {/* <hr /> */}

    </div>
  )
}
