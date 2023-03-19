import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { StoreState } from '../../redux/store'
import '../backRender/backRender.scss'

function BackRender() {
  const state = useSelector((state: StoreState) => state)
  const current: any = state.current
  const [color, setColor] = useState()

  useEffect(() => {
    console.log(current)
  }, [])

  return (
    <div className="BackRenderSection">
      {/* <div className="BackRenderSection_glass"></div>
      <div className="BackRenderSection_element"></div> */}
    </div>
  )
}

export default BackRender
