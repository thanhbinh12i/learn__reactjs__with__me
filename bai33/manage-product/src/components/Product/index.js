import { useState } from "react";
import CreateProduct from "./CreateProduct";
import ProductList from "./ProductList";

function Product(){
      const [reload, setReload] = useState(false);
      const handleReload = () => {
            setReload(!reload)
      }
      return (
            <>
               <h1>Danh sách sản phẩm</h1>
               <CreateProduct onReload={handleReload}/>
               <ProductList reload={reload}/>
            </>
      )
}
export default Product;