import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const API = "https://64cf7379ffcda80aff51dd7e.mockapi.io/products"


export const fetchProduct = createAsyncThunk(
	'product/fetchStatus', async (id) => {
		const { data } = await axios.get(`${API}/${id}`)
		return data
	}
)


const initialState = {
	product: {},
	status: 'Loading'
}

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setProduct(state, action) {
			state.product = action.payload
		},
		setStatus(state, action) {
			state.status = action.payload
		},
	},
	extraReducers: {
		[fetchProduct.pending]: (state) => {
			state.status = 'Loading'
			state.product = {}
		},
		[fetchProduct.fulfilled]: (state, action) => {
			state.product = action.payload
			state.status = 'Success'
		},
		[fetchProduct.rejected]: (state) => {
			state.status = 'Error'
			state.product = {}
		},
	}
})

export const { setProduct, setStatus } = productSlice.actions

export default productSlice.reducer