import React from 'react';
import { convertToCelsius } from '../../Utils/utils';

export default function CardTime({
  time,
  icon,
  description,
  temp,
  feelsLike,
}) {

  const iconLink = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <>
      <div className=''>{time}:00</div>
      <img className='' src={iconLink} alt={description}/>
      <div className=''>{convertToCelsius(temp)}&#8451;</div>
      <div className=''>{description}</div>
      <div className=''>Feels like {convertToCelsius(feelsLike)}&#8451;</div>
    </>
  )
};