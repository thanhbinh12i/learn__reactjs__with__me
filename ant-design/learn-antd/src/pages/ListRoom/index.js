import { useEffect, useState } from "react";
import { getListRoom } from "../../services/roomsServices";
import { Button } from "antd";
import { AppstoreOutlined, UnorderedListOutlined } from "@ant-design/icons"
import RoomGrid from "./RoomGrid";
import RoomTable from "./RoomTable";

function ListRoom() {
      const [rooms, setRooms] = useState([]);
      const [isGrid, setIsGrid] = useState(true);
      const fetchApi = async () => {
            const response = await getListRoom();
            setRooms(response);
      }
      useEffect(() => {

            fetchApi();
      }, []);
      const handleReload = () => {
            fetchApi();
      }
      return (
            <>
                  <Button onClick={() => setIsGrid(false)}>
                        <UnorderedListOutlined />
                  </Button>
                  <Button onClick={() => setIsGrid(true)}>
                        <AppstoreOutlined />
                  </Button>

                  {isGrid ? (
                        <RoomGrid rooms={rooms} />
                  ) : (
                        <RoomTable rooms={rooms} onReload={handleReload} />
                  )}


            </>
      )
}
export default ListRoom;