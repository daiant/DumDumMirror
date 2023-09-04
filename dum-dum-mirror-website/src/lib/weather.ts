export const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=39.4697&longitude=-0.3774&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto';

export async function getWeather() {
  return await fetch(API_URL).then(data => data.json());
}