import { FETCH_LOCATION_ERROR, FETCH_LOCATION_SUCCESS } from "../reducersConst"


type ActionType = {
    payload: {
        name: string
        lat: number
        lon: number
      },
    type: string
    error: string
}
type StateType = {
    loading: boolean
    data: {
        name: string
        lat: number
        lon: number
      }
    error: string
}

// ===================

const initialState= {
    loading: true,
    data: {
        name: "",
        lat: 0,
        lon: 0
      },
    error: ''
}

const fetchingLocationReducer = (state : StateType = initialState, action:ActionType) =>{
    switch(action.type){
        case FETCH_LOCATION_SUCCESS:
            return {
                ...state,
                loading: false,
                data:action.payload,
                error: ''
            }
        case FETCH_LOCATION_ERROR:
            return {
                ...state,
                loading: true,
                data:{},
                error: action.error
            }
        default:
            return state
    }
}


export default fetchingLocationReducer;