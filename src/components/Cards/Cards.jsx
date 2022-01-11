import React from 'react';
import Card from '../Card/Card'
import s from './Cards.module.css'
export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map

  return <section className={s.cardsContainer}>
    {
      cities.map((city) => {
        return <Card 
          max={city.main.temp_max}
          min={city.main.temp_min}
          name={city.name}
          img={city.weather[0].icon}
          onClose={() => alert(city.name)}
        />
      })
    }
  </section>
};