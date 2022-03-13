import cartReducer, {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity, CartState, getNumItems, getTotalPrice
} from "./cartSlice"
import products from "../../../public/products.json"
import {RootState} from "../../app/store";

// checking if adding to cart is working fine, id`s are random

describe("cart reducer", () => {
    test("add to cart", () => {
        const initialState = undefined
        const action = addToCart("abc")
        const state = cartReducer(initialState, action)
        expect(state).toEqual({
            items: {abc: 1}
        })
    })

    // checking if remove from cart is working fine @abc just for checking if it still there after deleting his friend :(

    test("remove from cart", () => {
        const initialState = {
            items: {
                abc: 1,
                def: 3
            }
        }
        const action = removeFromCart("def")
        const state = cartReducer(initialState, action)
        expect(state).toEqual({
            items: {abc: 1}
        })
    })


    test("increase quantity", () => {
        const initialState = {
            items: {
                abc: 1
            }
        }
        const action = increaseQuantity("abc")
        const state = cartReducer(initialState, action)
        expect(state).toEqual({
            items: {abc: 2}
        })
    })
    test("decrease quantity", () => {
        const initialState = {
            items: {
                abc: 1
            }
        }
        const action = decreaseQuantity("abc")
        const state = cartReducer(initialState, action)
        expect(state).toEqual({
            items: {abc: 0}
        })
    })
})

//checking work of selectors that check sum of all items in the cart

describe("selectors", () => {
    describe("get items number", () => {
        it("should return 0 with no items", () => {
            const cart: CartState = {
                items: {}
            }
            const result = getNumItems({cart} as RootState)
            expect(result).toEqual(0)
        })
        it("should add up the total", () => {
            const cart: CartState = {
                items: {abc: 3, def: 1}
            }
            const result = getNumItems({cart} as RootState)
            expect(result).toEqual(4)
        })
    })
})

//check price sum for cart

describe("Get total price", () => {
    it("should return 0 with an empty cart", () => {
        const state: RootState = {
            cart: {items: {}},
            products: {items: {}}
        }
        const result = getTotalPrice(state)
        expect(result).toEqual("0.00")
    })
    it("should sum all prices", () => {
        const state: RootState = {
            cart: {
                items: {
                    [products[0].id]: 3,
                    [products[0].id]: 2
                }
            },
            products: {
                items: {
                    [products[0].id]: products[0],
                    [products[0].id]: products[0],
                }
            }
        }
        const result = getTotalPrice(state)
        expect(result).toEqual("10.18")
    })
})