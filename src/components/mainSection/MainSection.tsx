import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../mainSection/mainSection.scss'
import { forecastType, locationType } from '../../types'
import { StoreState } from '../../redux/store'
import axios from 'axios'
import {
  FETCH_LOCATION_ERROR,
  FETCH_LOCATION_SUCCESS,
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_SUCCESS,
} from '../../redux/reducersConst'
import { API_KEY } from '../../settings/APIKEY'
import Search from '../search/Search'
import GetWeather from '../getWeather/GetWeather'
import StartApp from '../startApp/StartApp'
import DaysScroll from '../daysScroll/DaysScroll'

function MainSection() {
  const state = useSelector((state: StoreState) => state)
  const location: any = state.location
  const weather: any = state.weather
  const current: any = state.current

  //=========================================

  // variable used to show or hide search section
  const [openSearch, setOpenSearch] = useState<boolean>(false)

  return (
    <>
      <StartApp />

      <GetWeather />

      {!weather.loading ? (
        <>
          <Search openSearch={openSearch} setOpenSearch={setOpenSearch} />

          <div className="mainSection">
            <div className="mainSection_wrapper">
              <div className="mainSection_top">
                <div className="mainSection_top_description">
                  {/* {weather.data[0].weather[0].description}. */}
                  {current.data.weather[0].description}.
                </div>

                <div
                  onClick={() => setOpenSearch((el) => !el)}
                  className="mainSection_top_chooseButton"
                >
                  {location.data.name}
                </div>
              </div>

              <div className="mainSection_bottom">
                <div className="mainSection_bottom_scrollDays">
                  <DaysScroll />
                </div>

                <div className="mainSection_bottom_temperature">
                  <div className="mainSection_bottom_temperature_wrap">
                    {Math.round(current.data.main.temp)}
                    <sup className="mainSection_bottom_temperature_sup">o</sup>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>🍩</>
      )}
    </>
  )
}

export default MainSection
