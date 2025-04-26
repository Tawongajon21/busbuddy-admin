import  * as actionTypes from  "../constants/cart";

export  const cartReducer=(state={cartItems:[]},action)=>{
switch (action.type) {
    case actionTypes.ADD_TO_CART:
        const item = action.payload;
        const product = state.cartItems.find(x => x.productId === item.productId);
        if (product) {
          return {
            cartItems:
              state.cartItems.map(x => x.productId === product.productId ? item : x)
          };
        }
        return { cartItems: [...state.cartItems, item] };
   
    case actionTypes.REMOVE_FROM_CART:
      
        return {cartItems:state.cartItems.filter((x)=>x.productId!==action.payload)}
   
    case actionTypes.GET_CART_ITEMS:
        return {}
      

    default:
        return state;
}
}
