import React from 'react';
import { convertToCelsius } from '../../Utils/utils';
import './CardDay.css';

export default function CardDay({
  date,
  day,
  icon,
  weather,
  description,
  temp,
  feelsLike,
  tempMin,
  tempMax,
}) {

  const iconLink = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <>
      <div className=''>{date}</div>
      <div className='card_title'>{day}</div>
      <img className='card_icon' src={iconLink} alt={description}/>
      <div className='card_title'>{weather}, {convertToCelsius(temp)}&#8451;</div>
      <div className=''>Feels like {convertToCelsius(feelsLike)}&#8451;</div>
      <div className=''>{convertToCelsius(tempMin)}&#8451; - {convertToCelsius(tempMax)}&#8451;</div>
    </>
  )
};