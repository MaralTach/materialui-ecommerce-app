import {ADD,CLR,PLS,MIN,DEL} from "../type/basketType"

export const addBasket = (payload) => ({
  type: ADD,
  payload:payload
})

export const clearBasket = () => ({
  type: CLR
})

export const minusBasket = (payload) => ({
  type: MIN,
  payload:id
})

export const plusBasket  = (payload) => ({
  type: PLS,
  payload:id
})

export const removeBasket = (payload) => ({
  type: DEL,
  payload:id
})
