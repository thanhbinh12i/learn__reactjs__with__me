import { useState } from "react";
function Cart(){
      const unitPrice = 1000000;
      const [quantity, setQuantity] = useState(1);
      const handleChange = (e) => {
            const updateQuantity = parseInt(e.target.value);
            setQuantity(updateQuantity);
      }
      return (
            <>
            <table className="cart" border={1}>
                  <thead>
                        <tr>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                        </tr>
                        
                  </thead>
                  <tbody>
                        <tr>
                              <td>Áo FPT</td>
                              <td>
                                    <input defaultValue={quantity} type="number" min={1} onChange={handleChange}/>
                              </td>
                              <td>{unitPrice}đ</td>
                              <td>{unitPrice * quantity}đ</td>
                        </tr>
                  </tbody>
            </table>
            </>
      )
}
export default Cart;