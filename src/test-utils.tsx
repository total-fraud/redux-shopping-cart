import React from "react";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {getStoreWithState, RootState} from "./app/store";
import {BrowserRouter as Router} from "react-router-dom";
import {Product} from "./app/api";

export function wrapper(
    element: React.ReactElement,
    state?: RootState
) {
    const store = getStoreWithState(state)
   const utils = render(
        <Provider store={store}>
            <Router>{element}</Router>
        </Provider>
    )
    return { store, ...utils }
}

export function getStateWithItems(
    items: Record<string, number>,
    products: Record<string, Product> = {}
): RootState {
    const state: RootState = {
        products: { items: products },
        cart: {  items },
    };
    return state;
}