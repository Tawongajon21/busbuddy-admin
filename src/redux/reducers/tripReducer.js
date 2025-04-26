import {EDIT_TRIP_SUCCESS,EDIT_TRIP_REQUEST,EDIT_TRIP_FAIL,GET_PASSENGERS_SUCCESS,GET_PASSENGERS_REQUEST,GET_PASSENGERS_FAIL,DELETE_TRIP_SUCCESS,DELETE_TRIP_REQUEST,DELETE_TRIP_FAIL,ADD_TRIP_SUCCESS,ADD_TRIP_REQUEST,ADD_TRIP_FAIL,CANCEL_TRIP_SUCCESS,CANCEL_TRIP_REQUEST,CANCEL_TRIP_FAIL,GET_USER_TRIP_SUCCESS,GET_USER_TRIP_REQUEST,GET_USER_TRIP_FAIL,ADD_PASSENGER_SUCCESS,ADD_PASSENGER_REQUEST,ADD_PASSENGER_FAIL,GET_TRIPS_FAIL,GET_TRIPS_REQUEST,GET_TRIPS_SUCCESS,GET_TRIP_FAIL,GET_TRIP_REQUEST,GET_TRIP_SUCCESS} from "../constants/trips"

export function getTripsReducer(state = {loading:true}, action) {
    switch (action.type) {
      case GET_TRIPS_REQUEST:
        return { loading: true };
      case GET_TRIPS_SUCCESS:
        return { loading: false, data: action.payload };
      case GET_TRIPS_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }
  export function getTripReducer(state = {}, action) {
    switch (action.type) {
      case GET_TRIP_REQUEST:
        return { loading: true };
      case GET_TRIP_SUCCESS:
        return { loading: false, data: action.payload };
      case GET_TRIP_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }
  export function addPassengerReducer(state = {}, action) {
    switch (action.type) {
      case ADD_PASSENGER_REQUEST:
        return { loading: true };
      case ADD_PASSENGER_SUCCESS:
        return { loading: false, data: action.payload };
      case ADD_PASSENGER_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }
  export function getPassengerTripsReducer(state = {}, action) {
    switch (action.type) {
      case GET_USER_TRIP_REQUEST:
        return { loading: true };
      case GET_USER_TRIP_SUCCESS:
        return { loading: false, data: action.payload };
      case GET_USER_TRIP_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }
  export function cancelPassengerTripReducer(state = {}, action) {
    switch (action.type) {
      case CANCEL_TRIP_REQUEST:
        return { loading: true };
      case CANCEL_TRIP_SUCCESS:
        return { loading: false, data: action.payload };
      case CANCEL_TRIP_FAIL:
        return { loading: false, error: action.payload };
      default: return state;

    }

  }

  export function addTripReducer(state = {}, action) {
    switch (action.type) {
      case ADD_TRIP_REQUEST:
        return { loading: true };
      case ADD_TRIP_SUCCESS:
        return { loading: false, data: action.payload };
      case ADD_TRIP_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }
  export function deleteTripReducer(state = {}, action) {
    switch (action.type) {
      case DELETE_TRIP_REQUEST:
        return { loading: true };
      case DELETE_TRIP_SUCCESS:
        return {loading:false,data:state.getTrips.data.filter((trip)=>trip._id!==action.payload._id),error:null}
     
      case DELETE_TRIP_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }


  export function getPassengersReducer(state = {}, action) {
    switch (action.type) {
      case GET_PASSENGERS_REQUEST:
        return { loading: true };
      case GET_PASSENGERS_SUCCESS:
        return {loading:false,data:action.payload}
     
      case GET_PASSENGERS_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }


  export function editTripReducer(state = {}, action) {
    switch (action.type) {
      case EDIT_TRIP_REQUEST:
        return { loading: true };
      case EDIT_TRIP_SUCCESS:
        return { loading: false, data: action.payload };
      case EDIT_TRIP_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }