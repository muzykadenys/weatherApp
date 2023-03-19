import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import fetchingLocationReducer from './fetchingLocation/fetchLocationReducer'
import fetchWeatherReducer from './fetchWeather/fetchWeatherReducer'
import currentReducer from './current/currentReducer'

const rootReducer = combineReducers({
    location: fetchingLocationReducer,
    weather: fetchWeatherReducer,
    current: currentReducer
})

export type StoreState = ReturnType<typeof rootReducer>


export const store = createStore(rootReducer, composeWithDevTools())