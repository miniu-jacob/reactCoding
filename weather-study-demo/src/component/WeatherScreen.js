import React from 'react'

const WeatherScreen = ({data}) => {
    if(!data){
        return <div>No data available</div>;
    }
    console.log('data: ', data)
    const metricTemp = data?.main.temp;
    const fahrenheitTemp = (metricTemp * 9/5) + 32;


    const city = data?.cityInfo;
    console.log('cityInfo',city)


  return (
    <div className='screen-box'>
        <div className='screen-area'>
            <h2>{data?.name}</h2>
            <h1>{metricTemp.toFixed(1)}°C / {fahrenheitTemp.toFixed(1)}°F</h1>
            <h2>{data?.weather[0].description}</h2>
        </div>
      
    </div>
  )
}

export default WeatherScreen
