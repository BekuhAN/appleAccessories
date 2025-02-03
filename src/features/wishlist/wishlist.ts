import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProductItem } from '../../interfaces/product'
import { remove } from 'lodash'

export interface WishListState {
  list: Array<ProductItem>,
  isList: boolean
}

const initialState: WishListState = {
  list: [],
  isList: false
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    setWishList: (state, action: PayloadAction<Array<ProductItem>>) => {
      state.list = action.payload
    },
    addWishList: (state, action: PayloadAction<ProductItem>) => {
      state.list.push(action.payload)
    },
    removeWishList: (state, action: PayloadAction<number>) => {
      state.list = remove(state.list, (item) => item.id !== action.payload)
    },
    setIsWishList: (state, action: PayloadAction<number>) => {
      state.isList = state.list.find((item) => item.id === action.payload) !== undefined
    },
  },
})

export const getWishList = (state: { wishlist: WishListState }) => state.wishlist.list;
export const getIsWishList = (state: { wishlist: WishListState }) => state.wishlist.isList;

export const { setWishList, addWishList, removeWishList, setIsWishList} = wishlistSlice.actions

export default wishlistSlice.reducer