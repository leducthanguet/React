import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import {Fragment, useState} from "react";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);
  const showCartHandler = () => {
    setCartIsShow(true);
  }
  const hiddenCartHandler = () => {
    setCartIsShow(false);
  }
  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={hiddenCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
