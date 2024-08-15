import { useState, useEffect } from "react";    
import "./Product.scss"
function UseEffect1() {
      const [data, setData] = useState([]);
      useEffect(() => {
            fetch("https://dummyjson.com/products")
                  .then(res => res.json())
                  .then(data => {
                        // console.log(data)    
                        setData(data.products);
                  })
      }, []);
      return (
            <>
            <div className="product__list">
                  {data.map(item => (
                        <div className="product__item" key={item.id}>
                        <div className="product__image"> 
                              <img src={item.thumbnail} />
                        </div>
                        <div className="product__title"> 
                              <h3>{item.title}</h3>
                        </div>
                        <div className="product__price"> 
                              {item.price}$
                        </div>
                  </div>
                  ))}
                  
            </div>
            </>
      )
}
export default UseEffect1;