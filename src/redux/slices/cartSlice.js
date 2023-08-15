import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	cart: []
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action) {
			const findItem = state.cart.find(obj => obj.id === action.payload.id)

			if (findItem) {
				findItem.count++
			} else {
				state.cart.push({
					...action.payload,
					count: 1
				})
			}

		},
		minusItem(state, action) {
			const findItem = state.cart.find(obj => obj.id === action.payload)

			if (findItem) {
				findItem.count--
			}
		},
		removeFromCart(state, action) {
			state.cart = state.cart.filter(item => item.id !== action.payload)
		}
	}
})

export const { addToCart, removeFromCart, minusItem } = cartSlice.actions

export default cartSlice.reducer