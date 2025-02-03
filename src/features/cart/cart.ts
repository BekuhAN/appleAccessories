import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProductItem } from '../../interfaces/product'

export interface CartState {
  list: Array<ProductItem>,
  total: number
}

const initialState: CartState = {
  list: [],
  total: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<Array<ProductItem>>) => {
      state.list = action.payload
    },
    addCart: (state, action: PayloadAction<ProductItem>) => {
      state.list.push(action.payload)
      state.total += action.payload.price * (action.payload?.count ?? 1)
    },
    editCart: (state, action: PayloadAction<ProductItem>) => {
    state.list = state.list.map(item => {
      if (item.id === action.payload.id) {
        return {...item, count: action.payload.count}
      } else return item
    })
    state.total = state.list.reduce((acc, item) => acc + item.price * (item?.count ?? 0), 0)
    },
    removeCart: (state, action: PayloadAction<ProductItem>) => {
      state.list = state.list.filter((item) => item.id !== action.payload.id)
      state.total -= action.payload.price * (action.payload?.count ?? 1)
    },
    clearCart: (state) => {
      state.list = []
      state.total = 0
    }
  },
})

export const getCart = (state: { cart: CartState }) => state.cart.list;
export const getTotal = (state: { cart: CartState }) => state.cart.total;

export const { setCart, addCart, removeCart, editCart, clearCart} = cartSlice.actions

export default cartSlice.reducer