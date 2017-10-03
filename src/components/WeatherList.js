import React, { Component } from 'react';
import WeatherListItem from './WeatherListItem';

function WeatherList(props) {
  const { days, onDayClicked } = props;
  
  return <div className="weather-list flex-parent">
    {days.map((day, index) =>
      <WeatherListItem
        key={day.dt}
        day={day}
        index={index}
        onDayClicked={onDayClicked}
      />
    )}
  </div>; 
}

export default WeatherList;