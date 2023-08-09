import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const API = "https://64cf7379ffcda80aff51dd7e.mockapi.io/products"

export const fetchProducts = createAsyncThunk(
	'products/fetchStatus', async (category) => {
		const { data } = await axios.get(`${API}?${category === 'All' ? '' : `category=${category}`}`)
		return data
	}
)

export const fetchProduct = createAsyncThunk(
	'products/fetchStatus', async (id) => {
		const { data } = await axios.get(`${API}/${id}`)
		return data
	}
)


const initialState = {
	products: [],
	status: 'Loading'
}

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts(state, action) {
			state.products = action.payload
		},
		setStatus(state, action) {
			state.status = action.payload
		},
	},
	extraReducers: {
		[fetchProducts.pending]: (state) => {
			state.status = 'Loading'
			state.products = []
		},
		[fetchProducts.fulfilled]: (state, action) => {
			state.products = action.payload
			state.status = 'Success'
		},
		[fetchProducts.rejected]: (state, action) => {
			state.status = 'Error'
			state.products = []
		},
	}
})

export const { setProducts, setStatus } = productsSlice.actions

export default productsSlice.reducer