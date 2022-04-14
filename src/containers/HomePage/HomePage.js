import React, { useState, useEffect } from 'react';
import spinner from '../../assets/loading.gif';
import Header from '../../components/Header/Header';
import ForecastBlock from '../ForecastBlock/ForecastBlock';
import './HomePage.css';

const apiKey = '93af8c1ec5f32e1de2beb62d0b681c7a';
const defaultLocation = 'Sofia';
const locationData = `http://api.openweathermap.org/geo/1.0/direct?q=${defaultLocation}&limit=5&appid=${apiKey}`;

export default function HomePage() {
  const [data, setData] = useState();
  const [forecast, setForecast] = useState();
  const [searchData, setSearchData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(locationData)
      .then(response => response.json())
      .then(data => {
        setData(data);
        fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&appid=${apiKey}`)
          .then(res => res.json())
          .then(json => setForecast(json.list))
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      })
  }, []);

  const title = `5 day weather forecast for ${(data && data.name) || defaultLocation }`;

  const onSearch = (string) => {
    // fetch(url)
    //   .then(response => response.json())
    //   .then(data => {
    //     const size = Math.min(data.length, 10);
    //     data.length = size;
    //     setSearchData(data);
    //   })
    //   .catch(error => console.log(error))
    }

  return (
    <div className='wrapper'>
      <Header title={title} onSearch={onSearch} searchData={searchData} />
      <div className=''>
        {loading
          ? <div className=''><img src={spinner} alt='loading' /></div>
          : data
            ? <ForecastBlock forecast={forecast}/>
            : error
              ? <div>An error occured</div>
              : <div>No data found</div>
        }
      </div>
    </div>
  );
}