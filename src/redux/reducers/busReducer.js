import {DELETE_BUS_SUCCESS,DELETE_BUS_REQUEST,DELETE_BUS_FAIL,GET_BUSES_REQUEST,GET_BUSES_SUCCESS,GET_BUSES_FAIL,GET_BUS_FAIL,GET_BUS_REQUEST,GET_BUS_SUCCESS,ADD_BUS_FAIL,ADD_BUS_REQUEST,ADD_BUS_SUCCESS,UPDATE_BUS_FAIL,UPDATE_BUS_REQUEST,UPDATE_BUS_SUCCESS} from "../constants/bus";

export function addBusReducer(state = {loading:true}, action) {
  switch (action.type) {
    case ADD_BUS_REQUEST:
      return { loading: true };
    case ADD_BUS_SUCCESS:
      return { loading: false, data: action.payload };
    case ADD_BUS_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function getBusesReducer(state = {loading:true}, action) {
  switch (action.type) {
    case GET_BUSES_REQUEST:
      return { loading: true };
    case GET_BUSES_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_BUSES_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function deleteBusReducer(state = {loading:true}, action) {
  switch (action.type) {
    case DELETE_BUS_REQUEST:
      return { loading: true };
    case DELETE_BUS_SUCCESS:
      return { loading: false, data: action.payload };
    case DELETE_BUS_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

