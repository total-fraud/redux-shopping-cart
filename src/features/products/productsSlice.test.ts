import productsReducer, {receivedProducts} from "./productsSlice"
import products from "../../../public/products.json"

describe("products reducer", () => {
    it("should return initial state on empty action", () => {
        const initialState = undefined
        const action = {type: ""}
        const result = productsReducer(initialState, action)
        expect(result).toEqual({items: {}})
    })
    it("should convert the products received to an object", () => {
        const initialState = undefined
        const action = receivedProducts(products)
        const result = productsReducer(initialState, action)
        expect(Object.keys(result.items).length).toEqual(products.length)
        products.forEach((el) => {
            expect(result.items[el.id]).toEqual(el)
        })
    })
})