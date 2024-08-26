import { useDispatch } from "react-redux";
import { deleteItem, updateQuantity } from "../../actions/cart";
import { useRef } from "react";

function CartItem(props) {
      const { item } = props;
      const inputRef = useRef();
      const dispatch = useDispatch();
      const handleUp = () => {
            dispatch(updateQuantity(item.id));
            inputRef.current.value = parseInt(item.current.value) + 1;
      }
      const handleDown = () => {
            if (item.quantity > 1) {
                  dispatch(updateQuantity(item.id, -1));
                  inputRef.current.value = parseInt(item.current.value) - 1;
            }

      }
      const handleDelete = () => {
            dispatch(deleteItem(item.id));
      }
      return (
            <>
                  <div className="cart__item" key={item.id}>
                        <div className="cart__image">
                              <img src={item.info.thumbnail} alt="" />
                        </div>
                        <div className="cart__content">
                              <h3 className="cart__title">{item.info.title}</h3>
                              <h4 className="cart__price-new">{(item.info.price * (100 - item.info.discountPercentage) / 100).toFixed(0)}$</h4>
                              <h5 className="cart__price-old">{item.info.price}$</h5>

                        </div>
                        <div className="cart__quantity">
                              <button onClick={handleDown}>-</button>
                              <input ref={inputRef} defaultValue={item.quantity} />
                              <button onClick={handleUp}>+</button>
                        </div>
                        <button onClick={handleDelete} className="cart__delete">Xóa</button>
                  </div></>
      )
}
export default CartItem;