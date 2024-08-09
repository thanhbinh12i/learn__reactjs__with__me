import { country } from "../data/country";
// import './Country.css';
import './Country.scss'
function Country() {
      return (
            <>
                  <ul className="country">
                        {(country || []).map(itemC => (
                              <li className="country__item" key={itemC.id}>
                                    <span className="country__text">{itemC.name}</span>
                                    <ul className="country__sub">
                                          {
                                                (itemC.city || []).map(item => (
                                                      <li className="country__sub-item" key={item.id}>{item.name}</li>
                                                ))
                                          }
                                    </ul>

                              </li>
                        ))}
                  </ul>
            </>
      )
}
export default Country;