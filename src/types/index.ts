export type locationType = {
  name: string
  lat: number
  lon: number
}

export type forecastType = {
  dt: number
  dt_txt: string
  main: {
    feels_like: number
    temp: number
  }
  weather: {
    '0': {
      main: string
      description: string
    }
  }
}

// -------------------------
export const weekdayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export const weatherNames = {
  names: [
    'clear sky',
    'few clouds',
    'scattered clouds clouds',
    'broken clouds',
    'shower rain drizzle',
    'rain',
    'thunderstorm squall',
    'snow',
    'mist haze dust fo sand dust ',
    'smoke ash',
    'tornado'
  ],

  emoji: ['☀️', '🌤️', '🌥️', '☁️', '🌧️', '🌦️', '🌩️', '🌨️', '🌫️', '💨', '🌪️'],
}

export const LSLocation = 'LSLocation'
