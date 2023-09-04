import { getWeather } from "@mirror/lib/weather";
import { WeatherType } from "@mirror/types/weather.types";

export async function Weather() {
  const weather_info: WeatherType = await getWeather();
  console.log(weather_info);
  return <>
    <h2>{weather_info.daily.sunrise[0]}</h2>
  </>
}