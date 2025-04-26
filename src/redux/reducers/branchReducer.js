import { DELETE_BRANCH_SUCCESS,DELETE_BRANCH_REQUEST,DELETE_BRANCH_FAIL,UPDATE_BRANCH_SUCCESS,UPDATE_BRANCH_REQUEST,UPDATE_BRANCH_FAIL,GET_BRANCH_SUCCESS,GET_BRANCH_REQUEST,GET_BRANCH_FAIL,ADD_BRANCH_REQUEST,ADD_BRANCH_SUCCESS,ADD_BRANCH_FAIL,GET_BRANCHES_FAIL,GET_BRANCHES_SUCCESS,GET_BRANCHES_REQUEST } from "../constants/branches";
export function createBranchReducer(state={loading:false} , action) {
  switch (action.type) {
    case ADD_BRANCH_REQUEST:
      return { loading: true };
    case ADD_BRANCH_SUCCESS:
      return { loading: false, data: action.payload ,success:true};
    case ADD_BRANCH_FAIL:
      return { loading: false, error: action.payload };
    default: 
    return state;
  }
}
export function getBranchesReducer(state = {loading:true}, action) {
  switch (action.type) {
    case GET_BRANCHES_REQUEST:
      return { loading: true };
    case GET_BRANCHES_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_BRANCHES_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function getBranchReducer(state = {}, action) {
  switch (action.type) {
    case GET_BRANCH_REQUEST:
      return { loading: true };
    case GET_BRANCH_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_BRANCH_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function updateBranchReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_BRANCH_REQUEST:
      return { loading: true };
    case UPDATE_BRANCH_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case UPDATE_BRANCH_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function deleteBranchReducer(state = {}, action) {
  switch (action.type) {
    case DELETE_BRANCH_REQUEST:
      return { loading: true };
    case DELETE_BRANCH_SUCCESS:
      return { loading: false, data: action.payload };
    case DELETE_BRANCH_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
