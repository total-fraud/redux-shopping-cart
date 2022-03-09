import {createSlice, createSelector, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

export interface CartState {
    items: { [productId: string]: number }
}

const initialState: CartState = {
    items: {}
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<string>) {
            const id = action.payload
            if (state.items[id]) {
                state.items[id]++
            } else {
                state.items[id] = 1
            }
        },
        removeFromCart(state, action: PayloadAction<string>) {
            delete state.items[action.payload]
        },
        decreaseQuantity(state, action: PayloadAction<string>) {
            const id = action.payload
            if (state.items[id] > 0) {
                state.items[id]--
            }

        },
        increaseQuantity(state, action: PayloadAction<string>) {
            const id = action.payload
            state.items[id]++
        }
    }
})
export function getNumItems(state: RootState) {
    let numItems = 0
    for (let id in state.cart.items) {
        numItems += state.cart.items[id]
    }
    return numItems
}



export const getTotalPrice = createSelector(
    (state: RootState) => state.cart.items,
    (state: RootState) => state.products.items,
    (items, products) => {
        let total = 0
        for (let id in items) {
            total += products[id].price * items[id]
        }
        return total.toFixed(2)
    }
)

export const {addToCart, removeFromCart, decreaseQuantity, increaseQuantity} = cartSlice.actions
export default cartSlice.reducer
