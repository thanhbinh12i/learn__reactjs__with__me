import { useEffect, useState } from "react";
import { GetProductList } from "../../services/productServices";
import "./Product.scss"
import ProductItem from "./ProductItem";

function Product(){
      const [products, setProducts] = useState([]);
      useEffect(() => {
            const fetchApi = async () => {
                  const result = await GetProductList();
                  setProducts(result);
            }
            fetchApi();
      },[]) 
      return (
            <>
              <div className="product">
                  {products.map(item => (
                        <ProductItem item={item} key={item.id}/>
                  ))}
              </div>
            </>
      )
}
export default Product;