import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function ProductState() {
      const [products, setProducts] = useState();
      const [loading, setLoading] = useState(true);

      useEffect(() => {
            const fetchApi = () => {
                  fetch("https://dummyjson.com/products")
                        .then(res => res.json())
                        .then(data => {
                              // console.log(data)    
                              setProducts(data.products);
                              setLoading(false);
                        })
            }
            setTimeout(() => {
                  fetchApi();
            },5000)
      }, [])
      return (
            <>
                  {loading ? (
                        <Skeleton />

                  ) : (
                        <ul>
                              {products.map(item => (
                                    <li key={item.id}>{item.title}</li>
                              ))}
                        </ul>
                  )}

            </>
      )
}
export default ProductState;