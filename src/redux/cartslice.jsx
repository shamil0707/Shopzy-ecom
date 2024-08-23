import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items:[]
  },
  reducers: {
   
    addToCart: (state, action) => {  
      const product = action.payload
      const alreadyAdded = state.items.filter(item=>{
        if(item._id=== product._id){
          return item
        }
      })
      if(alreadyAdded.length ===0){
        const cartItem ={
          ...product,
          quantity:1
        }
        state.items.push(cartItem)

      }
      else{
        state.items = state.items.map(item => {
          if(item._id === product._id){
            return{
              ...item,
              quantity:item.quantity+1
            }
          }
          return item
        })
      }

      
    },
    incrementQuantity: (state, action)=>{
      const selectedProductId = action.payload
      state.items = state.items.map(item => {
        if(item._id === selectedProductId){
          return{
            ...item,
            quantity:item.quantity+1
          }
        }
        return item
      })
    },
    decrementQuantity: (state, action)=>{
      const selectedProductId = action.payload
      state.items = state.items.map(item => {
        if(item._id === selectedProductId){
          return{
            ...item,
            quantity:item.quantity-1
          }
        }
        return item
      })
      state.items = state.items.filter(item=>{
        if(item.quantity > 0){
          return item
        }
      })
    }
  }
})


export const { addToCart , incrementQuantity, decrementQuantity} = cartSlice.actions

export default cartSlice.reducer