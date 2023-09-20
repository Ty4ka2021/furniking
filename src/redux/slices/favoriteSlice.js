import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	favorite: [],
	favoriteId: []
}

const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		addToFavorite(state, action) {
			const findItem = state.favorite.find(obj => obj.id === action.payload.id)

			if (!findItem) {
				state.favorite.push({
					...action.payload,
					count: 1
				})
				state.favoriteId.push(action.payload.id)
			} else {
				state.favorite = state.favorite.filter(item => item.id !== action.payload.id)
				state.favoriteId = state.favoriteId.filter(item => item !== action.payload.id)
			}



		}
	}
})

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer