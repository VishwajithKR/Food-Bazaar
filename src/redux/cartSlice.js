import { createSlice } from '@reduxjs/toolkit'
import { FoodMenu, FoodData } from '../assets/data/data'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    ismenuData:"All",
    menuData:FoodMenu,
    foodData:FoodData,
    wishListData:[],
    cartListData:[],
    totalAmount:0,
    overAllQuantity:0
  },
  reducers: {
    setMenuData: (state, action) => {
      state.ismenuData = action.payload
    },
    setWishListData: (state, action) => {
        const existingItem = state.wishListData.find(item => item.id === action.payload.id);
        if (existingItem) {
          state.wishListData = state.wishListData.filter(item => item.id !== action.payload.id);
        }else{
          state.wishListData.push(action.payload)
        }
    },
    setCartListData: (state, action) => {
      const existingCartItem = state.cartListData.find(item => item.id === action.payload.id);
      const existingFoodItem = state.foodData.find(item => item.id === action.payload.id);
    
      if (existingFoodItem) {
        if (!existingFoodItem.quantity) existingFoodItem.quantity = 1;
        else existingFoodItem.quantity += 1;
      }
    
      if (existingCartItem) {
        existingCartItem.quantity += 1;
        existingCartItem.totalPrice = parseInt(existingCartItem.price * existingCartItem.quantity);
      } else {
        const newItem = {
          ...action.payload,
          quantity: 1,
          totalPrice: parseInt(action.payload.price)
        };
        state.cartListData.push(newItem);
      }
      state.totalAmount = state.cartListData.reduce((acc, item) => acc + item.totalPrice, 0);
      state.overAllQuantity = state.cartListData.reduce((acc, item) => acc + item.quantity, 0);
    }
,    
    setRemoveCartList: (state, action) => {
      const existingCartItem = state.cartListData.find(item => item.id === action.payload.id);
      if (existingCartItem) {
        if (existingCartItem.quantity <= 1) {
          state.cartListData = state.cartListData.filter(item => item.id !== action.payload.id);
        } else {
          existingCartItem.quantity -= 1;
          existingCartItem.totalPrice = parseInt(existingCartItem.price * existingCartItem.quantity);
        }
        const existingFoodItem = state.foodData.find(item => item.id === action.payload.id);
        if (existingFoodItem && existingFoodItem.quantity > 0) {
          existingFoodItem.quantity -= 1;
        }
      }
      state.totalAmount = state.cartListData.reduce((acc, item) => acc + item.totalPrice, 0);
      state.overAllQuantity = state.cartListData.reduce((acc, item) => acc + item.quantity, 0);

    }
    
  }
})

export const { setMenuData,setWishListData,setCartListData,setRemoveCartList } = cartSlice.actions
export default cartSlice.reducer
