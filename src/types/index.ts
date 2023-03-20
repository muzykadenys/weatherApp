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
    'tornado',
  ],

  emoji: ['☀️', '🌤️', '🌥️', '☁️', '🌧️', '🌦️', '🌩️', '🌨️', '🌫️', '💨', '🌪️'],

  colors: [
    ['#ffda44', '#ffda44'],
    ['#ffdb4d', '#ffe88a'],
    ['#ffe57e', '#dddddd'],
    ['#cecece', '#dddddd'],
    ['#cecece', '#b7fff3'],
    ['#adb2b7', '#fffd72'],
    ['#adb6be', '#91a0da'],
    ['#ccd3da', '#cbcfdb'],
    ['#f1f8ff', '#cbcfdb'],
    ['#888888', '#4f4f4f'],
  ],
}

export const LSLocation = 'LSLocation'
