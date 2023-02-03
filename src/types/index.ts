export type locationType = {
  name: string
  lat: number
  lon: number
}

export type forecastType = {
  dt_txt: string
  main: {
    feels_like: number
    temp: number
  }
  weather:{
    main: string
    description: string
  }
  
}

// -------------------------

export const LSLocation = 'LSLocation'
