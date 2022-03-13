import React from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import {Products} from "./Pages/Products/Products";
import {CartLink} from "./components/CartLink/CartLink";
import {Cart} from "./Pages/Cart/Cart";
import styles from "./App.module.css";

function App() {
    return (
        <BrowserRouter basename={"/redux-shopping-cart"}>
            <div className={styles.app}>
                <header className={styles.header}>
                    <nav>
                        <Link className={styles.navLink} to="/">
                            Products
                        </Link>
                        <CartLink/>
                    </nav>
                </header>
            </div>
            <Switch>
                <Route path="/" exact>
                    <Products/>
                </Route>
                <Route path="/cart">
                    <Cart/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
