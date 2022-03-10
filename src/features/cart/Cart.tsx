import React from "react";
import {useAppSelector, useAppDispatch} from "../../app/hooks"
import styles from "./Cart.module.css";
import {getTotalPrice, removeFromCart, decreaseQuantity, increaseQuantity} from "./cartSlice";

export function Cart() {
    const dispatch = useAppDispatch()
    const products = useAppSelector(state => state.products.items)
    const items = useAppSelector(state => state.cart.items)
    const totalPrice = useAppSelector(getTotalPrice)

    return (
        <main className="page">
            <h1>Shopping Cart</h1>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Remove</th>
                </tr>
                </thead>
                <tbody>
                {Object.entries(items).reverse().map(([id]) => (
                    <tr key={id}>
                        <td>{products[id].name}</td>
                        <td>
                            <button onClick={(e) => dispatch(decreaseQuantity(id))}
                                    aria-label={`Remove ${products[id].name} from Shopping Cart`}>
                                -
                            </button>
                            {items[id]}
                            <button onClick={(e) => dispatch(increaseQuantity(id))}
                                    aria-label={`Remove ${products[id].name} from Shopping Cart`}>
                                +
                            </button>
                        </td>
                        <td>${products[id].price}</td>
                        <td>
                            <button onClick={() => dispatch(removeFromCart(id))}
                                    aria-label={`Remove ${products[id].name} from Shopping Cart`}>
                                X
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>

                <tfoot>
                <tr>
                    <td>Total</td>
                    <td></td>
                    <td className={styles.total}>${totalPrice}</td>
                    <td></td>
                </tr>
                </tfoot>
            </table>
            <form>
                <button className={styles.button} type="submit">
                    Checkout
                </button>
            </form>
        </main>
    );
}
