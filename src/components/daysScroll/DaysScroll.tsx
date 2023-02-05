import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { StoreState } from '../../redux/store'
import { forecastType, weatherNames, weekdayNames } from '../../types'
import '../daysScroll/daysScroll.scss'

function DaysScroll() {
  const state = useSelector((state: StoreState) => state)
  const weather: any = state.weather
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

  return (
    <div className="DaysScrollSection">
      <div className="DaysScrollSection_wraper">
        {weather.data.map((el: forecastType, index: number) => {
          const date = new Date(el.dt * 1000)
          if (index === 0 || date.getHours() === 11)
            return (
              <div
                key={`DSSW_${el.dt}_${index}`}
                className={`DaysScrollSection_wraper_el DaysScrollSection_wraper_el_${index}`}
              >
                <div className="DaysScrollSection_wraper_el_top">
                  {getWeatherEmoji(el.weather[0].main)}
                </div>
                <div className="DaysScrollSection_wraper_el_bot">
                  {weekdayNames[date.getDay()]}
                </div>
              </div>
            )
        })}
      </div>
    </div>
  )
}

export default DaysScroll
