import { Badge, Table, Tag, Tooltip } from "antd";
import DeleteRoom from "./DeleteRoom";
import EditRoom from "./EditRoom";

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
                                    <Tooltip title="Phòng VIP 5 sao" color="green">
                                          <Tag color="red">VIP</Tag>
                                    </Tooltip>
                                    
                              ) : (
                                    <Tooltip title="Phòng Thường 3 sao">
                                          <Tag color="gray">Thường</Tag>
                                    </Tooltip>
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
                              <EditRoom record={record} onReload={onReload}/>
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