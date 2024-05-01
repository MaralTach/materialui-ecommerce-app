import {ADD,CLR,PLS,MIN,DEL} from "../type/basketType"

const initialState = {
    basket:[]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case ADD:
    return { ...state,basket:[...state.basket,({...payload,quantity:1})] }  //adedi arttirirken en basta adet gelmesi icin

  default:
    return state
  }
}
