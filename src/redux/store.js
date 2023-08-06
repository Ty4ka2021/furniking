import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice'
import productsSlice from './slices/productsSlice'

export const store = configureStore({
	reducer: {
		products: productsSlice,
		filter: filterSlice
	}
})