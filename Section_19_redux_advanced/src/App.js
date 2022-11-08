import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import { Provider } from 'react-redux';
import Products from './components/Shop/Products';
import store from './store/index';
import {Fragment, useEffect } from 'react';
import {useSelector, useDispatch} from "react-redux";
import {uiActions} from "./store/ui-slice"; 
import Notification from "./components/UI/Notification";
import {sendCartData, fetchCartData} from "./store/cart-actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  console.log(notification);

  useEffect(() => {
    console.log(123)
    dispatch(fetchCartData());
  }, [dispatch])
  
  useEffect(() => {
    if(isInitial){
      isInitial=false;
      return;
    }

    if(cart.changed){
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
  // useEffect(() => {
  //   const sendCartData = async () => {
  //     dispatch(
  //       uiActions.showNotification({
  //         status: 'pending',
  //         title: 'Sending...',
  //         message: 'Sending cart data!',
  //       })
  //     );
  //     const response = await fetch(
  //       'https://react-d4e45-default-rtdb.firebaseio.com/cart.json',
  //       {
  //         method: 'PUT',
  //         body: JSON.stringify(cart),
  //       }
  //     );
  //     console.log(response);
  //     if (!response.ok) {
  //       throw new Error('Sending cart data failed.');
  //     }

  //     dispatch(
  //       uiActions.showNotification({
  //         status: 'success',
  //         title: 'Success!',
  //         message: 'Sent cart data successfully!',
  //       })
  //     );
  //   };

  //   if (isInitial) {
  //     isInitial = false;
  //     return;
  //   }

  //   sendCartData().catch((error) => {
  //     console.log(error);
  //     dispatch(
  //       uiActions.showNotification({
  //         status: 'error',
  //         title: 'Error!',
  //         message: 'Sending cart data failed!',
  //       })
  //     );
  //   });
  // }, [cart, dispatch]);

  const showProducts = useSelector(state => state.ui.showProducts);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        {showProducts && <Products />}
      </Layout>
    </Fragment>

  );
}

export default App;
