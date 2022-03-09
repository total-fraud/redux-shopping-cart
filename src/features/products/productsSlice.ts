import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type { Product } from "../../app/api";

export interface ProductsState {
    items: { [id: string]: Product}
}

const initialState: ProductsState = {
    items: {}
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        receivedProducts(state, action: PayloadAction<Product[]>) {
            const products = action.payload
            products.forEach(product => {
                state.items[product.id] = product
            })
        }
    }
});

export const { receivedProducts } = productsSlice.actions
export default productsSlice.reducer;