import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {uiActions} from "../../store/ui-slice";
import {cartActions} from "../../store/cart-slice";

const CartButton = (props) => {
  const cartQuantity = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const  toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  }
  const addItemHandler = () => {
    dispatch(cartActions.setIsAdd());
  }

  const showProductHandler = () => {
    dispatch(uiActions.setShowProducts());
  }
  const isAdd  = useSelector(state => state.cart.isAdd);
  const stateAdd = isAdd ? "Disable addItem": "Enable addItem";
  return (
    <div>
      <button className={classes.button} onClick={toggleCartHandler}>
        <span>My Cart</span>
        <span className={classes.badge}>{cartQuantity}</span>
      </button>

      <button className={classes.button} onClick={addItemHandler}>
        <span className={classes.badge}>{stateAdd}</span>
      </button>

      <button className={classes.button} onClick={showProductHandler}>
        <span className={classes.badge}>Show My Favorite Products</span>
      </button>
    </div>

  );
};

export default CartButton;
