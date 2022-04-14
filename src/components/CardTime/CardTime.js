import React from 'react';
import './CardTime.css';

export default function CardTime({
  time,
  icon,
  description,
  temp,
  feelsLike,
  // tempMin,
  // tempMax,
}) {

  const convertToCelsius = (temp) => (temp - 273.15).toFixed(0);
  const iconLink = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <>
      <div className=''>{time}:00</div>
      <div className=''>{}</div>
      <img className='' src={iconLink} alt={description}/>
      <div className=''>{convertToCelsius(temp)}&#8451;</div>
      <div className=''>{description}</div>
      <div className=''>Feels like {convertToCelsius(feelsLike)}&#8451;</div>
      {/* <div className=''>{convertToCelsius(tempMin)}&#8451; - {convertToCelsius(tempMax)}&#8451;</div> */}
    </>
  )
};