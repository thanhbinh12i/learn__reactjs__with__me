import { useState, useEffect } from "react";
import Modal from "react-modal";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { editProduct } from "../../services/productServices";

function EditProduct(props) {
      const { onReload, item } = props;
      const [showModal, setShowModal] = useState(false);
      const [data, setData] = useState(item);
      const [dataCategory, setDataCategory] = useState([]);

      useEffect(() => {
            const fetchApi = async () => {
                  fetch("http://localhost:3000/category")
                        .then(res => res.json())
                        .then(data => {
                              setDataCategory(data);
                        })
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
            const result = await editProduct(item.id, data);
            if (result) {
                  setShowModal(false);
                  onReload();
                  Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Cập nhật sản phẩm thành công",
                        showConfirmButton: false,
                        timer: 2000
                  });
            }

      }
      return (
            <>
                  <button onClick={openModal}>Chỉnh sửa</button>
                  <Modal isOpen={showModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
                        <form onSubmit={handleSubmit}>
                              <table>
                                    <tbody>
                                          <tr>
                                                <td>Tiêu đề</td>
                                                <td>
                                                      <input type="text" name="title" onChange={handleChange} value={data.title} required />
                                                </td>
                                          </tr>
                                          <tr>
                                                <td>Danh mục</td>
                                                <td>
                                                      <select name="category" onChange={handleChange} value={data.category}>
                                                            {dataCategory.map((item, index) => (
                                                                  <option key={index} value={item}>{item}</option>
                                                            ))}
                                                      </select>
                                                </td>
                                          </tr>
                                          <tr>
                                                <td>Giá</td>
                                                <td>
                                                      <input type="text" name="price" onChange={handleChange} value={data.price} required />
                                                </td>
                                          </tr>
                                          <tr>
                                                <td>Giảm giá</td>
                                                <td>
                                                      <input type="text" name="discountPercentage" onChange={handleChange} value={data.discountPercentage} required />
                                                </td>
                                          </tr>
                                          <tr>
                                                <td>Số lượng còn lại</td>
                                                <td>
                                                      <input type="text" name="stock" onChange={handleChange} value={data.stock} required />
                                                </td>
                                          </tr>
                                          <tr>
                                                <td>Đường dẫn ảnh</td>
                                                <td>
                                                      <input type="text" name="thumbnail" onChange={handleChange} value={data.thumbnail} required />
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
                                                      <input type="submit" value="Cập nhật" />
                                                </td>
                                          </tr>
                                    </tbody>
                              </table>
                        </form>
                  </Modal>
            </>
      )
}
export default EditProduct;