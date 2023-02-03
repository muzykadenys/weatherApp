import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { StoreState } from '../../redux/store'
import { locationType, LSLocation } from '../../types'
import { useLocalStorage } from '../../hook/useLocalStorage'
import {
  FETCH_LOCATION_ERROR,
  FETCH_LOCATION_SUCCESS,
} from '../../redux/reducersConst'

function StartApp() {
  const dispatch = useDispatch()
  const updateLocation = (value: locationType) => {
    dispatch({ type: FETCH_LOCATION_SUCCESS, payload: value })
  }
  const errorLocation = (value: string) => {
    dispatch({ type: FETCH_LOCATION_ERROR, error: value })
  }

  const state = useSelector((state: StoreState) => state)
  const location: any = state.location

  const [LSS_location, setLSS_location] = useLocalStorage(LSLocation, {
    name: '',
    lat: 0,
    lon: 0,
  })
  // =======================================================

  //creating function to load ip address from the API
  const getData = () => {
    if (!LSS_location?.name) {
      axios.get('https://geolocation-db.com/json/').then((res) => {
        const def: locationType = {
          name: res.data.city || res.data.country_name,
          lat: res.data.latitude,
          lon: res.data.longitude,
        }

        // console.log('vadim blyat', res)

        setLSS_location(def)
        updateLocation(def)
      })
    } else {
        updateLocation(LSS_location)
    //   console.log('state is available', LSS_location)
    }
  }

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData()
  }, [])

  return <></>
}

export default StartApp
