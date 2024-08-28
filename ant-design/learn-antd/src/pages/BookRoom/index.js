import { Button, Checkbox, Col, DatePicker, Input, Radio, Row, Select, Space } from "antd";
import { useState } from "react";
import { bookRoom } from "../../services/bookroomServices";
const { RangePicker } = DatePicker;

function BookRoom() {
      const [data, setData] = useState({
            time: "7 giờ"
      });
      const optionsTime = [];
      for (let i = 7; i<=24; i++){
            optionsTime.push  ({
                  value: `${i} giờ`,
                  label: `${i} giờ`
            })
      }
      const handleChangeInput = (e) => {
            const object = {
                  ...data,
                  [e.target.name]: e.target.value
            }
            setData(object);
      }
      const handleChangeCheckbox = (e) => {
            const object = {
                  ...data,
                  services: e
            }
            setData(object);
      }
      const handleChangeDate = (dates,dateStrings) => {
            const object = {
                  ...data,
                  date: dateStrings
            }
            setData(object)
      }
      const handleChangeSelect = (e) => {
            const object = {
                  ...data,
                  time: e
            }
            setData(object);
      }
      const handleSubmit = async () => {
            const respone = await bookRoom(data);
            if(respone){
                  alert("Chúc mừng bạn đã đặt phòng thành công");
            }else{
                  alert("Xin lỗi, vui lòng đặt lại sau");
            }
      }
      return (
            <>
                  <h2>Đặt phòng</h2>

                  <Row gutter={[20, 20]}>
                        <Col span={24}>
                              <p>Họ Tên: </p>
                              <Input name="fullName" placeholder="Ví dụ: Thanh Binh" onChange={handleChangeInput} />
                        </Col>
                        <Col span={12}>
                              <p>Số điện thoại: </p>
                              <Input name="phone" placeholder="Ví dụ: 0xxxxxxxxx" onChange={handleChangeInput} />
                        </Col>
                        <Col span={12}>
                              <p>Email: </p>
                              <Input name="email" placeholder="Ví dụ: abc@gmail.com" onChange={handleChangeInput} />
                        </Col>
                        <Col span={12}>
                              <p>Dịch vụ thêm: </p>
                              <Checkbox.Group onChange={handleChangeCheckbox}>
                                    <Space direction="vertical">
                                          <Checkbox value="Thuê xe máy">Thuê xe máy</Checkbox>
                                          <Checkbox value="Thuê ô tô 4 chỗ">Thuê ô tô 4 chỗ</Checkbox>
                                          <Checkbox value="Thuê ô tô 7 chỗ">Thuê ô tô 7 chỗ</Checkbox>
                                          <Checkbox value="Thuê ô tô 16 chỗ">Thuê ô tô 16 chỗ</Checkbox>
                                    </Space>

                              </Checkbox.Group>
                        </Col>
                        <Col span={12}>
                              <p>Quà tặng: </p>
                              <Radio.Group name="gift" onChange={handleChangeInput}>
                                    <Space direction="vertical">
                                          <Radio value="Thuê xe máy">Áo 3 lỗ</Radio>
                                          <Radio value="Thuê ô tô 4 chỗ">Mũ</Radio>
                                          <Radio value="Thuê ô tô 7 chỗ">Đồ bơi</Radio>
                                    </Space>

                              </Radio.Group>
                        </Col>
                        <Col span={12}>
                              <p>Chọn ngày: </p>
                              <RangePicker placeholder={["Nhận phòng","Trả phòng"]} format="DD-MM-YYYY" onChange={handleChangeDate}/>
                        </Col>
                        <Col span={12}>
                              <p>Chọn ngày: </p>
                              <Select style={{ width: "100%" }} options={optionsTime} defaultValue={data.time} onChange={handleChangeSelect}/>
                        </Col>
                        
                        <Col span={24}>
                              <Button type="primary" onClick={handleSubmit}>Đặt phòng</Button>
                        </Col>
                  </Row>

            </>
      )
}
export default BookRoom;