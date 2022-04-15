import React, { useState, useEffect } from 'react';
import spinner from '../../assets/loading.gif';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import ForecastBlock from '../ForecastBlock/ForecastBlock';
import './HomePage.css';

const apiKey = '93af8c1ec5f32e1de2beb62d0b681c7a'; // gmail
// const apiKey = '5764b30726c51254cba63dbbfc6ea136'; // yahoo
const defaultCity = 'Sofia,BG';

export default function HomePage() {
  const [coordinates, setCoordinates] = useState();
  const [forecast, setForecast] = useState();
  const [searchData, setSearchData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [location, setLocation] = useState();

  useEffect(() => {
    const locationData = `http://api.openweathermap.org/geo/1.0/direct?q=${location || defaultCity}&limit=5&appid=${apiKey}`;
    fetch(locationData)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        data.length > 1
          ? setSearchData(data)
          : setCoordinates(data[0]);
      })
      .catch(error => setError(error))
  }, [location])

  useEffect(() => {
    coordinates && fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setForecast(data.list);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      })
  }, [coordinates])

  const title = `5 day weather forecast for ${(coordinates && coordinates.name)}`;

  const onSearch = (string) => setLocation(string)

  return (
    <div className='wrapper'>
      <Header title={title} />
      <Search onSearch={onSearch} onSelectCity={(city) => setCoordinates(city)} results={searchData} />
      <div className=''>
        {loading
          ? <div className='loading'><img src={spinner} alt='loading' /></div>
          : coordinates
            ? <ForecastBlock forecast={forecast}/>
            : error
              ? <div>An error occured</div>
              : <div>No data found</div>
        }
      </div>
    </div>
  );
}