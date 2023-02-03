import { FETCH_LOCATION_ERROR, FETCH_LOCATION_SUCCESS, FETCH_WEATHER_ERROR, FETCH_WEATHER_SUCCESS } from "../reducersConst"


type ActionType = {
    payload: string,
    type: string
    error: string
}
type StateType = {
    loading: boolean
    data: Object
    error: string
}

// ===================

const initialState = {
    loading: true,
    data: [],
    error: ''
}

const fetchWeatherReducer = (state : StateType = initialState, action:ActionType) =>{
    switch(action.type){
        case FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                loading: false,
                data:action.payload,
                error: ''
            }
        case FETCH_WEATHER_ERROR:
            return {
                ...state,
                loading: true,
                data:[],
                error: action.error
            }
        default:
            return state
    }
}


export default fetchWeatherReducer;