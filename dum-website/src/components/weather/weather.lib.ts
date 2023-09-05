import { WeatherInterface } from "./weather.types";

export const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=39.4697&longitude=-0.3774&hourly=temperature_2m,apparent_temperature,precipitation_probability&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=auto';

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

export const wmo = {
  0: "sunny",
  1: "mainly_clear",
  2: "partly_cloudy",
  3: "overcast",
  45: "fog",
  48: "fog",
  51: "drizzle_light",
  53: "drizzle_moderate",
  55: "drizzle_intense",
  56: "drizzle_light_freezing",
  57: "drizzle_intense_freezing",
  61: "rain_light",
  63: "rain_moderate",
  65: "rain_heavy",
  66: "rain_light_freezing",
  67: "rain_intense_freezing",
  71: "snow_light",
  73: "snow_moderate",
  75: "snow_intense",
  77: "snow_grains",
  80: "rain_shower_light",
  81: "rain_shower_moderate",
  82: "rain_shower_intense",
  85: "snow_shower_light",
  86: "snow_shower_intense",
  95: "thunderstorm",
  96: "thunderstorm_hail_light",
  99: "thinderstorm_hail_intense"
}