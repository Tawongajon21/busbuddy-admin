const initialState={
    boxes:[],
    selectedBox:null
}

const boxReducer=(state=initialState,action)=>{
    switch (action.type) {
        case SELECT_BOX:
            return {...state,selectedBoxIndex:action.selectedBoxIndex}
          
    
        default:
          return state
    }
}