import { CURRENT_ERROR, CURRENT_SUCCESS } from '../reducersConst'

import { forecastType } from '../../types'

type ActionType = {
  payload: string
  type: string
  error: string
}
type StateType = {
  loading: boolean
  data: Array<forecastType>
  error: string
}

// ===================

const initialState = {
  loading: true,
  data: [],
  error: '',
}

const currentReducer = (
  state: StateType = initialState,
  action: ActionType,
) => {
  switch (action.type) {
    case CURRENT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      }
    case CURRENT_ERROR:
      return {
        ...state,
        loading: true,
        error: action.error,
      }
    default:
      return state
  }
}

export default currentReducer
