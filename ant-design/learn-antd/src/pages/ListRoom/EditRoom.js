import { Button, Form, Input, InputNumber, notification, Modal, Select, Switch, Spin } from "antd";
import { EditOutlined } from "@ant-design/icons"
import { useState } from "react";
import { updateRoom } from "../../services/roomsServices";
const { Option } = Select;

function EditRoom(props) {
      const { record, onReload } = props;
      const [form] = Form.useForm();
      const [showModal, setShowModal] = useState(false);
      const [notiApi, contextHolder] = notification.useNotification();
      const [spinning, setSpinning] = useState(false);
      const handleSubmit = async (values) => {
            setSpinning(true);
            const response = await updateRoom(record.id, values);
            setTimeout(() => {
                  if (response) {
                        onReload();
                        notiApi.success({
                              message: 'Cập nhật thành công',
                              description: `Bạn đã cập nhật thành công ${record.name}`,
                        });
                        setShowModal(false);
                  } else {
                        notiApi.error({
                              message: 'Cập nhật thất bại',
                              description: `Bạn đã cập nhật thất bại ${record.name}`,
                        });
                  }
                  setSpinning(false);
            }, 3000)

      }
      const handleShowModal = () => {
            setShowModal(true);
      }
      const handleCancel = () => {
            setShowModal(false);
            form.resetFields();
      };
      return (
            <>
                  {contextHolder}
                  <Button type="primary" icon={<EditOutlined />} onClick={handleShowModal} />
                  <Modal open={showModal} onCancel={handleCancel} title="Chỉnh sửa phòng" footer={null}>
                        <Spin spinning={spinning} tip="Đang cập nhật">
                              <Form layout="vertical" name="create-room" onFinish={handleSubmit} form={form} initialValues={record}>
                                    <Form.Item
                                          label="Tên phòng"
                                          name="name"
                                          rules={[{ required: true, message: 'Bắt buộc!' }]}
                                    >
                                          <Input />
                                    </Form.Item>
                                    <Form.Item
                                          label="Số giường"
                                          name="quantityBed"
                                          rules={[{ required: true, message: 'Bắt buộc!' }]}
                                    >
                                          <InputNumber min={1} />
                                    </Form.Item>
                                    <Form.Item
                                          label="Số người tối đa"
                                          name="quantityPeople"
                                          rules={[{ required: true, message: 'Bắt buộc!' }]}
                                    >
                                          <InputNumber min={1} />
                                    </Form.Item>
                                    <Form.Item
                                          label="Mô tả"
                                          name="description"
                                    >
                                          <Input.TextArea />
                                    </Form.Item>
                                    <Form.Item label="Tiện ích" name="utils">
                                          <Select mode="multiple" allowClear>
                                                <Option value="Wifi">Wifi</Option>
                                                <Option value="Điều hòa">Điều hòa</Option>
                                          </Select>
                                    </Form.Item>
                                    <Form.Item valuePropName="checked" label="Trạng thái" name="status">
                                          <Switch checkedChildren="Còn phòng" unCheckedChildren="Hết phòng" />
                                    </Form.Item>
                                    <Form.Item valuePropName="checked" label="Loại phòng" name="typeRoom">
                                          <Switch checkedChildren="VIP" unCheckedChildren="Thường" />
                                    </Form.Item>
                                    <Form.Item>
                                          <Button type="primary" htmlType="submit">
                                                Cập nhật
                                          </Button>
                                    </Form.Item>
                              </Form>
                        </Spin>

                  </Modal>
            </>
      )
}
export default EditRoom;