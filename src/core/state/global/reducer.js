import { createReducer } from '../../utils/redux'
import { type } from './action'

export const initialState = {
  isBlackScreenVisible: false,
}

export const reducer = {
  [type.SET_BLACK_SCREEN_VISIBLE](state, { isBlackScreenVisible }) {
    return { ...state, isBlackScreenVisible }
  },
}

export default createReducer(initialState, reducer)
