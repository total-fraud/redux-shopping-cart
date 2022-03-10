import React from "react"
import {screen} from "@testing-library/react";
import {getStateWithItems, wrapper} from "../../test-utils";
import {Cart} from "./Cart";
import {Product} from "../../app/api";

test("Cart should display correct total", () => {
    const state = getStateWithItems(
        {testItem: 2},
        {testItem: {name: "Test", price: 2.09} as Product}
    )
wrapper(<Cart/>, state)
    screen.getByText("$4.18", {selector: ".total"})
})