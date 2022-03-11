import React from "react";
import {screen} from "@testing-library/react";
import {CartLink} from "./CartLink";
import {store} from "../../app/store";
import {addToCart, decreaseQuantity, increaseQuantity} from "../../features/cart/cartSlice";
import {Cart} from "../../Pages/Cart/Cart";
import {wrapper} from "../../test-utils";

test("should contain a link", () => {
    wrapper(<CartLink/>)
    expect(screen.getByRole("link")).toBeInTheDocument()
})

test("should show when cart empty", () => {
    wrapper(<CartLink/>)
    const link = screen.getByRole("link")
    expect(link).toHaveTextContent("Cart")
    expect(link).not.toHaveTextContent("0")
})

test("should show numbers of items", () => {
  store.dispatch(addToCart("testItem"))
    wrapper(<CartLink/>)
    const link = screen.getByRole("link")
    expect(link).toHaveTextContent("1")
    store.dispatch(increaseQuantity("testItem"))
    store.dispatch(increaseQuantity("testItem"))
    expect(link).toHaveTextContent("3")
    store.dispatch(decreaseQuantity("testItem"))
    expect(link).toHaveTextContent("2")
})
