import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	searchValue: '',
	categoryId: 0
}

const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setSearchValue(state, action) {
			state.searchValue = action.payload
		},
		setCategoryId(state, action) {
			state.categoryId = action.payload
		},
	}
})

export const { setSearchValue, setCategoryId } = filterSlice.actions

export default filterSlice.reducer