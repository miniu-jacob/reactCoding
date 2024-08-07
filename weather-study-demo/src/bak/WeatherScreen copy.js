import React from 'react'

const WeatherScreen = ({cityData}) => {
    if(!cityData) return <div className='loading-box'>날씨 정보를 가져오는 중...</div>; // 초기 로딩 상태 표시
    // console.log('CityData', cityData)
    // console.log('temp: ', cityData.main.temp)
    const metricTemp = cityData?.main.temp;
    const fahrenheitTemp = (metricTemp * 9/5) + 32;
  return (
    <div className='screen-box'>
        <div className='screen-area'>
            <h2>{cityData?.name}</h2>
            <h1>{metricTemp.toFixed(1)}°C / {fahrenheitTemp.toFixed(1)}°F</h1>
            <h2>{cityData?.weather[0].description}</h2>
        </div>
      
    </div>
  )
}

export default WeatherScreen
