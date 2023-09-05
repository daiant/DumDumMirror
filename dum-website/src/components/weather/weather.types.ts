export interface WeatherInterface {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  current_weather: CurrentWeather
  hourly_units: HourlyUnits
  hourly: Hourly
  daily_units: DailyUnits
  daily: Daily
}

export interface CurrentWeather {
  temperature: number
  windspeed: number
  winddirection: number
  weathercode: number
  is_day: number
  time: number
}

export interface HourlyUnits {
  time: string
  temperature_2m: string
  precipitation_probability: string
}

export interface Hourly {
  time: any[]
  temperature_2m: any[]
  precipitation_probability: number[]
}

export interface DailyUnits {
  time: string
  temperature_2m_max: string
  temperature_2m_min: string
  sunrise: string
  sunset: string
}

export interface Daily {
  time: number[]
  temperature_2m_max: number[]
  temperature_2m_min: number[]
  sunrise: number[]
  sunset: number[]
}
