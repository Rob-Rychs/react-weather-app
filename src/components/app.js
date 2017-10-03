import React, { Component } from 'react';
import ZipForm from './zipForm';
import { get } from 'axios';
import WeatherList from './WeatherList';
import CurrentDay from './CurrentDay';


class App extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
      weatherData: [],
      zipcode: '',
      city: {},
      dates: [],
      selectedDate: null
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onDayClicked = this.onDayClicked.bind(this);
  }

  componentDidMount() {
    get(`http://localhost:3000/weather`)
    .then(({ data: weatherData }) => {
      this.setState({ weatherData });
    });
  }

  onFormSubmit(zipcode) {
    const zip = zipcode * 1;
    const { weatherData } = this.state;
    const data = weatherData.find(w => w.id === zip);
    const { city, list: dates } = data;

    this.setState({ zip, city, dates, selectedDate: null });
  }

  onDayClicked(dayIndex) {
    this.setState({ selectedDate: dayIndex });
  }

  render() {
    const { weatherData, dates, city, selectedDate } = this.state;
    const zips = weatherData.map(w => w.id);
  
    return (
      <div className="app">
        <ZipForm zips={zips}onSubmit={this.onFormSubmit} />
        <WeatherList days={dates} onDayClicked={this.onDayClicked} />
        {selectedDate !== null && <CurrentDay day={dates[selectedDate]} city={city} />}
      </div>
    );
  }
}

export default App;