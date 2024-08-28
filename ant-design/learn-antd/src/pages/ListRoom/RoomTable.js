import { Badge, Table } from "antd";
import DeleteRoom from "./DeleteRoom";

function RoomTable(props) {
      const { rooms, onReload } = props;
      const columns = [
            {
                  title: "Tên phòng",
                  dataIndex: "name",
                  key: "name"
            },
            {
                  title: "Số giường",
                  dataIndex: "quantityBed",
                  key: "quantityBed"
            },
            {
                  title: "Số người",
                  dataIndex: "quantityPeople",
                  key: "quantityPeople"
            },
            {
                  title: "Loại phòng",
                  dataIndex: "typeRoom",
                  key: "typeRoom",
                  render: (_, record) => {
                        return <>
                              {record.typeRoom ? (
                                    <Badge color="purple" text="VIP" />
                              ) : (
                                    <Badge color="gray" text="Thường" />
                              )}
                        </>
                  }
            },
            {
                  title: "Trạng thái",
                  dataIndex: "status",
                  key: "status",
                  render: (_, record) => {
                        return <>
                              {record.status ? (
                                    <Badge color="green" text="Còn phòng" />
                              ) : (
                                    <Badge color="red" text="Hết phòng" />
                              )}
                        </>;
                  }
            },
            {
                  title: "Hành động",
                  key: "actions",
                  render: (_, record) => {
                        return <>
                              <DeleteRoom record={record} onReload={onReload}/>
                        </>;
                  }
            }
      ]
      return (
            <>
                  <Table dataSource={rooms} columns={columns} rowKey="key" />
            </>
      )
}
export default RoomTable;