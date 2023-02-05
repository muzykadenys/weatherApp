import React, { useEffect, useState } from 'react'
import '../main/main.scss'
import MainSection from '../mainSection/MainSection'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'


function Main() {
  return (
    <Provider store={store}>
      <div className="main">
        <MainSection />
      </div>
    </Provider>
  )
}

export default Main
