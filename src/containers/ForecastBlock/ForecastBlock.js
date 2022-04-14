import React, { useState, useMemo } from 'react';
import moment from 'moment';
import CardDay from '../../components/CardDay/CardDay';
import CardTime from '../../components/CardTime/CardTime';
import './ForecastBlock.css';

const daysToDisplay = 5;

export default function ForecastBlock({ forecast }) {
  const [selectedDay, setSelectedDay] = useState();

  const mapDayData = (day) => {
    return {
      day: moment.unix(day.dt).format('dddd'),
      date: moment.unix(day.dt).format('DD MMMM'),
      time: moment.unix(day.dt).format('HH'),
      weather: day.weather[0].main,
      description: day.weather[0].description,
      icon: day.weather[0].icon,
      temp: day.main.temp,
      tempMin: day.main.temp_min,
      tempMax: day.main.temp_max,
      feelsLike: day.main.feels_like,
    }
  }

  const forecastByDays = useMemo(() => {
    let days = [];
    forecast && forecast.map(day => {
      let date = moment.unix(day.dt).format('DD');
      return days[date] = days[date]
        ? [...days[date], mapDayData(day)]
        : [mapDayData(day)];
    })
    days = days.filter(el => !!el);
    if (Object.keys(days).length > daysToDisplay) {
      days.splice(daysToDisplay)
    }
    return days;
  }, [forecast]);

  const getProp = (array, prop) => array.find(slot => slot.time === '12')
    ? array.find(slot => slot.time === '12')[prop]
    : array[0][prop];

  const getTempMin = (array) => JSON.stringify(array
    .reduce((prev, current) => (prev.tempMin < current.tempMin) ? prev : current ));

  const getTempMax = (array) => JSON.stringify(array
    .reduce((prev, current) => (prev.tempMax > current.tempMax) ? prev : current ));

  return (
    <>
      <div className='forecast_wrapper'>
        {forecastByDays.map((day, index) => {
          return (
            <div className={`day${day === selectedDay ? ' selected_day' : ''}`} key={index} onClick={() => setSelectedDay(day)}>
              <CardDay
                day={day[0].day}
                date={day[0].date}
                weather={getProp(day, 'weather')}
                description={getProp(day, 'description')}
                icon={getProp(day, 'icon')}
                temp={getProp(day, 'temp')}
                feelsLike={getProp(day, 'feelsLike')}
                tempMin={JSON.parse(getTempMin(day)).tempMin}
                tempMax={JSON.parse(getTempMax(day)).tempMax}
              />
            </div>
          )
        })}
      </div>
      <div className='forecast_label'>{selectedDay ? `Forecast by hours for ${selectedDay[0].day}, ${selectedDay[0].date}:` : 'Click on a day to see a detailed forecast.'}</div>
      <div className='forecast_wrapper'>
        {selectedDay && selectedDay.map((day, index) => {
          return (
            <div className='time' key={index}>
              <CardTime
                time={day.time}
                icon={day.icon}
                description={day.description}
                temp={day.temp}
                feelsLike={day.feelsLike}
              />
            </div>
          )
        })}
      </div>
    </>
  )
};