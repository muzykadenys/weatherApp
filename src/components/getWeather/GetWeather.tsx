import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../mainSection/mainSection.scss'
import { forecastType, locationType } from '../../types'
import { StoreState } from '../../redux/store'
import {
  FETCH_LOCATION_ERROR,
  FETCH_LOCATION_SUCCESS,
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_SUCCESS,
} from '../../redux/reducersConst'
import { API_KEY } from '../../settings/APIKEY'
import Search from '../search/Search'

function GetWeather() {
  const dispatch = useDispatch()

  const updateLocation = (value: locationType) => {
    dispatch({ type: FETCH_LOCATION_SUCCESS, payload: value })
  }
  const errorLocation = (value: string) => {
    dispatch({ type: FETCH_LOCATION_ERROR, error: value })
  }

  const updateWeather = (value: forecastType[]) => {
    dispatch({ type: FETCH_WEATHER_SUCCESS, payload: value })
  }
  const errorWeather = (value: string) => {
    dispatch({ type: FETCH_WEATHER_ERROR, error: value })
  }

  const state = useSelector((state: StoreState) => state)
  const location: any = state.location
  //------------------------------------------
  const [currentLocation, setCurrentLocation] = useState<locationType>({
    name: '',
    lat: 0,
    lon: 0,
  })

  /////////////////////////////////////////////// FETCHING
  //fetching location
  // useEffect(() => {
  //   const locUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`
  //   // const locUrl = `https://api.openweathermap.org/geo/1.0/direct?q=Одеса&limit=6&appid=${API_KEY}`

  //   fetch(locUrl)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const def = {
  //         name: data.name,
  //         lat: data.coord.lat,
  //         lon: data.coord.lon,
  //       }
  //       setCurrentLocation(def)
  //       updateLocation(def)
  //       // console.log(data)
  //       return data
  //     })
  // }, [])

  // fetch weather
  useEffect(() => {
    if (!location.loading) {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${location.data.lat}&lon=${location.data.lon}&units=metric&appid=b1f56ad38ec941bfdf16839c177ff648`,
      )
        .then((res) => res.json())
        .then((res) => {
          updateWeather([...res.list])
          console.log(res)
        })
    }
  }, [location])
  /////////////////////////////////////////////// FETCHING

  return <></>

}

export default GetWeather
