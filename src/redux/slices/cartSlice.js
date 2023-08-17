import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	cart: [],
	cartId: [],
	totalPrice: 0
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
				state.cartId.push(action.payload.id)
			}

			state.totalPrice = state.totalPrice + action.payload.price

		},
		minusItem(state, action) {
			const findItem = state.cart.find(obj => obj.id === action.payload.id)

			if (findItem) {
				findItem.count--
				state.totalPrice = state.totalPrice - action.payload.price
			}
		},
		removeFromCart(state, action) {
			state.cart = state.cart.filter(item => item.id !== action.payload)
			state.cartId = state.cartId.filter(item => item !== action.payload)

			state.totalPrice = 0
			state.cart.map(item => {
				state.totalPrice += item.count * item.price
			})

		}
	}
})

export const { addToCart, removeFromCart, minusItem } = cartSlice.actions

export default cartSlice.reducer