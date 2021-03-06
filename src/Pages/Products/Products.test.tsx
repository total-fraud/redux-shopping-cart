import React from "react";
import {wrapper} from "../../test-utils";
import {Products} from "./Products";
import {screen, waitFor} from "@testing-library/react";
import * as api from "../../app/api"
import mockProducts from "../../../public/products.json"

//mocking getProducts function

const getProductsSpy = jest.spyOn(api, "getProducts")
getProductsSpy.mockResolvedValue(mockProducts)

//testing if getProducts get called, and then check if length of both are equal

test("Checking rendered products", async () => {
    wrapper(<Products/>)
    await waitFor(() => expect(getProductsSpy).toHaveBeenCalledTimes(1))
    const articles = screen.getAllByRole("article")
    expect(articles.length).toEqual(mockProducts.length)
})