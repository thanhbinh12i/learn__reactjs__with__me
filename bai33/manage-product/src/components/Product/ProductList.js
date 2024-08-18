import { useState, useEffect } from "react";
import "./Product.scss"
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";
import { GetProductList } from "../../services/productServices";
function ProductList(props) {
      const {reload} = props;
      const [data, setData] = useState([]);
      const [editReload, setEditReload] = useState(false);

      const handleReload = () => {
            setEditReload(!editReload);
      }

      useEffect(() => {
            const fetchApi = async () => {
                  const result = await GetProductList();
                  setData(result.reverse());
            }
            fetchApi()
      }, [reload, editReload])
      return (
            <>
                  <div className="product__list">
                        {data.map(item => (
                              <div className="product__item" key={item.id}>
                                    <div className="product__image">
                                          <img src={item.thumbnail} alt=""/>
                                    </div>
                                    <h3 className="product__title">{item.title}</h3>
                                    <p className="product__price">{item.price}</p>
                                    <p className="product__price">{item.discountPercentage}</p>
                                    <EditProduct item={item} onReload={handleReload}/>
                                    <DeleteProduct item={item} onReload={handleReload}/>
                              </div>
                        ))}
                  </div>
            </>
      )
}
export default ProductList;