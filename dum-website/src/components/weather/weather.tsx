import { useEffect, useState } from "react";
import { WeatherInterface } from './weather.types';
import { getWeather } from './weather.lib';

export default function Weather() {
  const [weather, setWeather] = useState<WeatherInterface | undefined>(undefined);

  useEffect(() => {
    updateData();
    setTimeout(() => {
      updateData();
    }, 1800);
  }, []);

  useEffect(() => {
    if (!weather) return;
  }, [weather]);

  function updateData() {
    getWeather().then(data => {
      if (!data) return;
      setWeather(data);
    });
  }

  return <>{weather?.current_weather.temperature} gradiños</>
}