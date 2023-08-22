import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import filterSlice from './slices/filterSlice'
import productSlice from './slices/productSlice'
import productsSlice from './slices/productsSlice'
import topProductsSlice from './slices/topProductsSlice'

export const store = configureStore({
	reducer: {
		products: productsSlice,
		filter: filterSlice,
		topProducts: topProductsSlice,
		cart: cartSlice,
		product: productSlice
	}
})