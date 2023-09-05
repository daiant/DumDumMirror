import React from 'react';
import { useEffect, useState } from "react";
import { WeatherInterface } from './weather.types';
import { date2iso, getHourlyIndex, getWeather } from './weather.lib';

export default function Weather() {
  const [weather, setWeather] = useState<WeatherInterface | undefined>(undefined);
  const [hourly_index, setHourlyIndex] = useState(-1)

  useEffect(() => {
    updateData();
    setTimeout(() => {
      updateData();
    }, 1800);
  }, []);

  useEffect(() => {
    if (!weather) return;
    setHourlyIndex(getHourlyIndex(weather) || -1);
  }, [weather]);

  function updateData() {
    getWeather().then(data => {
      if (!data) return;
      setWeather(data);
    });
  }

  return <>{weather?.hourly.temperature_2m[hourly_index]} gradiños</>
}