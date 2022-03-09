import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Products } from "./features/products/Products";
import { CartLink } from "./features/cart/CartLink";
import { Cart } from "./features/cart/Cart";
import styles from "./App.module.css";

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <header className={styles.header}>
          <nav>
            <Link className={styles.navLink} to="/">
              Products
            </Link>
            <CartLink />
          </nav>
        </header>
      </div>
      <Switch>
        <Route path="/" exact>
          <Products />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
