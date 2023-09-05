import { WeatherInterface } from "./weather.types";

export const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,precipitation_probability&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=auto&forecast_days=1';

export async function getWeather(): Promise<WeatherInterface> {
  return await fetch(API_URL).then(data => data.json() as Promise<WeatherInterface>);
}

export function date2iso(date: Date, minutes: number = 0, seconds: number = 0, milliseconds: number = 0): string {
  date.setMinutes(minutes);
  date.setSeconds(seconds);
  date.setMilliseconds(milliseconds);
  return date.toISOString().replace(':00.000Z', '');
}

export function getHourlyIndex(weather: WeatherInterface): number | undefined {
  return weather.hourly.time.findIndex(t => t === date2iso(new Date()));
}