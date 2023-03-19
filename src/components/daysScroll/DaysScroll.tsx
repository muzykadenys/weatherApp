import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CURRENT_ERROR, CURRENT_SUCCESS } from '../../redux/reducersConst'
import { StoreState } from '../../redux/store'
import { forecastType, weatherNames, weekdayNames } from '../../types'
import '../daysScroll/daysScroll.scss'

function DaysScroll() {
  const dispatch = useDispatch()

  const updateCurrent = (value: forecastType) => {
    dispatch({ type: CURRENT_SUCCESS, payload: value })
  }
  const errorCurrent = (value: string) => {
    dispatch({ type: CURRENT_ERROR, error: value })
  }

  const state = useSelector((state: StoreState) => state)
  const weather: any = state.weather
  const current: any = state.current

  const activeWord = 'selected'
  // ===================================================

  function getWeatherEmoji(val: string): string {
    let res: string = '('
    // console.log('=========================')
    weatherNames.names.forEach((el: string, index: number) => {
      // console.log(index, ' | ', el, ' | ', val)
      if (el.includes(val.toLocaleLowerCase())) {
        // console.log(index, el, val, weatherNames.emoji[index])
        res = weatherNames.emoji[index]
      }
    })

    return res
  }

  function clickOnDay(el: forecastType) {
    updateCurrent(el)
  }

  return (
    <div className="DaysScrollSection">
      <div className="DaysScrollSection_wraper">
        {weather.data.map((el: forecastType, index: number) => {
          const date = new Date(el.dt * 1000)
          let setActiveWord = ''

          if (JSON.stringify(el) === JSON.stringify(current.data))
            setActiveWord = activeWord

          // console.log(date.getHours(), date.getDate(), date.getDay())
          if (index === 0 || date.getHours() === 11) {
            return (
              <div
                onClick={() => {
                  clickOnDay(el)
                }}
                key={`DSSW_${el.dt}_${index}`}
                className={`DaysScrollSection_wraper_el DaysScrollSection_wraper_el_${setActiveWord}`}
              >
                <div className="DaysScrollSection_wraper_el_top">
                  {getWeatherEmoji(el.weather[0].main)}
                </div>
                <div className="DaysScrollSection_wraper_el_bot">
                  {weekdayNames[date.getDay()]}
                </div>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default DaysScroll
