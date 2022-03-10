import React, { useEffect } from "react";
import {useAppSelector, useAppDispatch} from "../../app/hooks"
import { getProducts } from "../../app/api";
import { receivedProducts } from "./productsSlice";
import styles from "./Products.module.css";
import {addToCart} from "../cart/cartSlice";

export function Products() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        getProducts().then((products) => {
            dispatch(receivedProducts(products))
        })
    })
const products = useAppSelector(state => state.products.items)
  return (
    <main className="page">
      <ul className={styles.products}>
        {Object.values(products).map((product) => (
          <li key={product.id}>
            <article className={styles.product}>
              <figure>
                <img src={product.imageURL} alt={product.name} />
              </figure>
              <div>
                <h1>{product.name}</h1>
                <p>${product.price}</p>
                <button onClick={() => dispatch(addToCart(product.id))}>Add to Cart 🛒</button>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}
