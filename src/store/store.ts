import { configureStore } from '@reduxjs/toolkit'
import { catalogSlice } from '../features/catalog/catalog'
import { wishlistSlice } from '../features/wishlist/wishlist'

export const store = configureStore({
  reducer: {
    catalog: catalogSlice.reducer,
    wishlist: wishlistSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch