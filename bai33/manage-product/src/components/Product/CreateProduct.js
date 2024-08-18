import { useState, useEffect } from "react";
import Modal from "react-modal";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { GetCategoryList } from "../../services/categoryServices";
import { createProduct } from "../../services/productServices";

function CreateProduct(props) {
      const {onReload} = props;
      const [showModal, setShowModal] = useState(false);
      const [data, setData] = useState([]);
      const [dataCategory, setDataCategory] = useState([]);

      useEffect(() => {
            const fetchApi = async () => {
                  const result = await GetCategoryList();
                  setDataCategory(result);
            }
            fetchApi()
      }, [])
      const customStyles = {
            content: {
                  top: '50%',
                  left: '50%',
                  right: 'auto',
                  bottom: 'auto',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)'
            }
      }
      const handleChange = (e) => {
            const name = e.target.name;
            const value = e.target.value;
            setData({
                  ...data,
                  [name]: value
            })
      }
      const openModal = () => {
            setShowModal(true);
      }
      const closeModal = () => {
            setShowModal(false);
      }
      const handleSubmit = async (e) => {
            e.preventDefault();
            const result = await createProduct(data);
            if(result){
                  setShowModal(false);
                  onReload();
                  Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Tạo mới sản phẩm thành công",
                        showConfirmButton: false,
                        timer: 2000
                      });     
            }
      }
      return (
            <>
                  <button onClick={openModal}>+ Tạo sản phẩm mới</button>
                  <Modal isOpen={showModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
                        <form onSubmit={handleSubmit}>
                              <table>
                                    <tbody>
                                          <tr>
                                                <td>Tiêu đề</td>
                                                <td>
                                                      <input type="text" name="title" onChange={handleChange} required/>
                                                </td>
                                          </tr>
                                          <tr>
                                                <td>Danh mục</td>
                                                <td>
                                                      <select name="category" onChange={handleChange}>
                                                            {dataCategory.map((item,index) => (
                                                                  <option key={index} value={item}>{item}</option>
                                                            ))}
                                                      </select>
                                                </td>
                                          </tr>
                                          <tr>
                                                <td>Giá</td>
                                                <td>
                                                      <input type="text" name="price" onChange={handleChange} required/>
                                                </td>
                                          </tr>
                                          <tr>
                                                <td>Giảm giá</td>
                                                <td>
                                                      <input type="text" name="discountPercentage" onChange={handleChange} required/>
                                                </td>
                                          </tr>
                                          <tr>
                                                <td>Số lượng còn lại</td>
                                                <td>
                                                      <input type="text" name="stock" onChange={handleChange} required/>
                                                </td>
                                          </tr>
                                          <tr>
                                                <td>Đường dẫn ảnh</td>
                                                <td>
                                                      <input type="text" name="thumbnail" onChange={handleChange} required />
                                                </td>
                                          </tr>
                                          <tr>
                                                <td>Mô tả</td>
                                                <td>
                                                      <textarea rows={4} name="description"></textarea>
                                                </td>
                                          </tr>
                                          <tr>
                                                <td>
                                                      <button onClick={closeModal}>Hủy</button>
                                                </td>
                                                <td>
                                                      <input type="submit" value="Tạo mới"/>
                                                </td>
                                          </tr>
                                    </tbody>
                              </table>
                        </form>
                  </Modal>
            </>
      )
}
export default CreateProduct;