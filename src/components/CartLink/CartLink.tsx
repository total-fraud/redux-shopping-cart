import React from "react";
import {Link} from "react-router-dom";
import styles from "./CartLink.module.css";
import {useAppSelector} from "../../app/hooks";
import {getNumItems} from "../../features/cart/cartSlice";

export function CartLink() {
    //just getting the sum of all items in the cart, if @numItems is falsy, then show "Cart"

    const numItems: number = useAppSelector(getNumItems)
    return (
        <Link data-testid="CartLink" to="/cart" className={styles.link}>
            <span className={styles.text}>
                🛒 {numItems ? numItems : "Cart"}
            </span>
        </Link>
    );
}
