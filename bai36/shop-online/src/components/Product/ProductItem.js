import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateQuantity } from '../../actions/cart';

function ProductItem(props) {
      const { item } = props;
      const dispatch = useDispatch();
      const cart = useSelector(state => state.cartReducer);
      const handleAddToCart = () => {
            if (cart.some(itemCart => itemCart.id === item.id)) {
                  dispatch(updateQuantity(item.id));
            } else {
                  dispatch((addToCart(item.id, item)));
            }

      }
      return (
            <>
                  <div className="product__item" key={item.id}>
                        <img className="product__image" src={item.thumbnail} alt="" />
                        <h3 className="product__title">{item.title}</h3>
                        <div className="product__price-new">{(item.price * (100 - item.discountPercentage) / 100).toFixed(0)}$</div>
                        <div className="product__price-old">{item.price}$</div>
                        <div className="product__percent">{item.discountPercentage}%</div>
                        <button onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
                  </div>
            </>
      )
}
export default ProductItem;