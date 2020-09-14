import React from 'react';

import cloudyNight from '../assets/02n.png'
import waterdrop from '../assets/water-drop.png'
import eye from '../assets/eye.png'
import lungs from '../assets/lungs.png'
import sun from '../assets/sun.png'
import bee from "../assets/bee.png"
import wind from '../assets/wind.png'
import clearDay from "../assets/01d.png";
import clearNight from "../assets/01n.png";
import cloudyDay from "../assets/02d.png";
import lightClouds from "../assets/03d.png";
import doubleCloud from "../assets/04d.png";
import rain from "../assets/09d.png";
import daySunnyStorm from "../assets/10d.png";
import sunnyStorms from "../assets/10n.png";
import thunderstorm from "../assets/11d.png";
import snow from "../assets/13d.png";
import mist from "../assets/50d.png";



export const degToDirection = (deg: number): string => {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round(((deg %= 360) < 0 ? deg + 360 : deg) / 45) % 8;
  return directions[index];
};

export const kelvinToFahren = (k: number): number => {
  return Math.floor((k - 273.15) * 1.8 + 32);
};


const convertDate = (date: number): string => {
  const dates = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st']

  return dates[date - 1];
}

export const forecastDtDisplay = (dt: number): React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> => {
  const date = new Date(dt * 1000);
  const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']

  const weekDate = convertDate(date.getUTCDate());
  const weekday = days[date.getDay()]
  return <span>{weekday} {weekDate}</span>
}

export const weatherDtDisplay = (dt: number): React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>  => {
  const date = new Date(dt * 1000)
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  
  const currentMonth = months[date.getMonth()]
  const currentDay = days[date.getDay()]
  const currentDate = convertDate(date.getUTCDate())
  return <span>{ currentDay } < br /> { currentMonth } { currentDate } </span>
}

export const weatherIcon = (icon: string) => {
  if (icon === "01d") {
    return <img src={clearDay} alt="Clear Day Icon" className='large-weather-icon' />;
  } else if (icon === "01n") {
    return <img src={clearNight} alt="Clear Night Icon" className='large-weather-icon' />;
  } else if (icon === "02d") {
    return <img src={cloudyDay} alt="Cloudy Day Icon" className='large-weather-icon' />;
  } else if (icon === "02n") {
    return <img src={cloudyNight} alt="Cloudy Night Icon" className='large-weather-icon' />;
  } else if (icon === "03d") {
    return <img src={lightClouds} alt="Light Clouds Icon" className='large-weather-icon' />;
  } else if (icon === "04d") {
    return <img src={doubleCloud} alt="Double Clouds Icon" className='large-weather-icon' />;
  } else if (icon === "09d") {
    return <img src={rain} alt="Rain Icon" className='large-weather-icon' />;
  } else if (icon === "10d") {
    return <img src={daySunnyStorm} alt="Day Storm Icon" className='large-weather-icon' />;
  } else if (icon === "10n") {
    return <img src={sunnyStorms} alt="Night Storm Icon" className='large-weather-icon' />;
  } else if (icon === "11d") {
    return <img src={thunderstorm} alt="Thunderstorm Icon" className='large-weather-icon' />;
  } else if (icon === "13n") {
    return <img src={snow} alt="Snow Icon" className='large-weather-icon' />;
  } else if (icon === "50n" || icon === "50d") {
    return <img src={mist} alt="Mist Icon" className='large-weather-icon' />;
  }
};