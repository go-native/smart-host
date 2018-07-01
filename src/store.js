import { createStore } from 'redux'
import { hotelReducer } from './hotel-reducer'

export const store = createStore(hotelReducer);