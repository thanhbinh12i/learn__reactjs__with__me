import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { deleteProduct } from '../../services/productServices';

function DeleteProduct(props) {
      const { item, onReload } = props;

      const deleteItem = async () => {
            const result = await deleteProduct(item.id);
            if (result) {
                  onReload();
                  Swal.fire({
                        title: "Đã xóa!",
                        text: "Bạn đã xóa thành công.",
                        icon: "success"
                  });
            }
      }

      const handleDelete = () => {
            Swal.fire({
                  title: "Bạn có chắc muốn xóa không",
                  text: "Nếu bạn xóa thì không thể khôi phục lại",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Vẫn xóa!"
            }).then((result) => {
                  if (result.isConfirmed) {
                        deleteItem();
                  }
            });
      }
      return (
            <>
                  <button onClick={handleDelete}>Xóa</button>
            </>
      )
}
export default DeleteProduct;