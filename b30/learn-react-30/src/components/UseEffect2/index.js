import { useState, useEffect } from "react";    
import "./Product.scss"
function UseEffect2() {
      const limit =20;
      const [data, setData] = useState([]);
      const [pageActive, setPageActive] = useState(0);
      const [quantityPage, setQuantityPage] = useState(0);
      useEffect(() => {
            fetch(`https://dummyjson.com/products?skip=${pageActive*limit}&limit=${limit}`)
                  .then(res => res.json())
                  .then(data => {
                        // console.log(data)    
                        setData(data.products);
                        setQuantityPage(Math.ceil(data.total / limit));
                  })
      }, [pageActive]);
      const handleClickPagi = (e) => {
            setPageActive(e);
      }
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
            <ul className="pagination">
                  {[...Array(quantityPage)].map((item, index)=> (
                        <li key={index} onClick={() => handleClickPagi(index)}>{index + 1}</li>
                  ))}
            </ul>
            </>
      )
}
export default UseEffect2;