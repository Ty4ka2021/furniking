import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTopProducts = createAsyncThunk(
	'topProducts/fetchStatus', async () => {
		const { data } = await axios.get(`https://64cf7379ffcda80aff51dd7e.mockapi.io/topProducts`)
		return data
	}
)

const initialState = {
	topProducts: [],
	status: 'Loading'
}

const topProductsSlice = createSlice({
	name: 'topProducts',
	initialState,
	reducers: {
		setTopProducts(state, action) {
			state.topProducts = action.payload
		},
		setStatus(state, action) {
			state.status = action.payload
		},
	},
	extraReducers: {
		[fetchTopProducts.pending]: (state) => {
			state.status = 'Loading'
			state.topProducts = []
		},
		[fetchTopProducts.fulfilled]: (state, action) => {
			state.topProducts = action.payload
			state.status = 'Success'
		},
		[fetchTopProducts.rejected]: (state, action) => {
			state.status = 'Error'
			state.topProducts = []
		},
	}
})

export const { setTopProducts, setStatus } = topProductsSlice.actions

export default topProductsSlice.reducer