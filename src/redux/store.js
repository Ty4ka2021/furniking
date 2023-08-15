import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice'
import productsSlice from './slices/productsSlice'
import topProductsSlice from './slices/topProductsSlice'
import cartSlice from './slices/cartSlice'

export const store = configureStore({
	reducer: {
		products: productsSlice,
		filter: filterSlice,
		topProducts: topProductsSlice,
		cart: cartSlice
	}
})