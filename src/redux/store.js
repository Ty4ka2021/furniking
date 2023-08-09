import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice'
import productsSlice from './slices/productsSlice'
import topProductsSlice from './slices/topProductsSlice'

export const store = configureStore({
	reducer: {
		products: productsSlice,
		filter: filterSlice,
		topProducts: topProductsSlice
	}
})