import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { StoreState } from '../../redux/store'
import { forecastType, weatherNames } from '../../types'
import '../backRender/backRender.scss'

function BackRender() {
  const state = useSelector((state: StoreState) => state)
  const current: any = state.current
  const [color, setColor] = useState(['transperent', 'transperent'])

  function getIndexOfColor(val: string): string {
    let res: string = '('
    // console.log('=========================')
    weatherNames.names.forEach((el: string, index: number) => {
      // console.log(index, ' | ', el, ' | ', val)
      if (el.includes(val.toLocaleLowerCase())) {
        // console.log(index, el, val, weatherNames.emoji[index])
        setColor(weatherNames.colors[index])
      }
    })

    return res
  }

  useEffect(() => {
    console.log(current.data)
    if (current.data.length !== 0) {
      getIndexOfColor(current.data.weather[0].main)
    }
  }, [current])

  return (
    <div className="BackRenderSection">
      <div className="BackRenderSection_glass"></div>
      <div
        className="BackRenderSection_element"
        style={{
          background: `linear-gradient(140deg, ${color[0]} 40%, ${color[1]} 80%)`,
          transition: 'background 500ms',
        }}
      ></div>
    </div>
  )
}

export default BackRender
