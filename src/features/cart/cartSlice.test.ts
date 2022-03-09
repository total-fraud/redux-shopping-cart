import cartReducer, {
    CartState,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
} from "./cartSlice"

describe("cart reducer", () => {
    test.todo("an empty action", () => {
        const initialState = undefined
        const action = { type: ""}
        const state = cartReducer(initialState, action)
        expect(state).toEqual({
            checkoutState: "READY",
            errorMessage: "",
            items: {}
        })
    })
    test.todo("add to cart")
    test.todo("remove from cart")
    test.todo("increase quantity")
    test.todo("decrease quantity")
})