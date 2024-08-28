import { Menu } from "antd";
import { MailOutlined, AppstoreOutlined, SettingOutlined} from "@ant-design/icons";
import { Link } from "react-router-dom";
function MenuSider() {
      const items = [
            {
                  label: "Menu 1",
                  icon: <MailOutlined />,
                  key: "menu-1",
                  children: [
                        {
                              label: <Link to="/">Dashboard</Link>,
                              key: "/",  
                        },
                        {
                              label: "Menu 1 - 2",
                              key: "menu-1-2",  
                        },
                        {
                              label: "Menu 1 - 3",
                              key: "menu-1-3",  
                        }
                  ]
            },
            {
                  label: <Link to="/create-room">Create Room</Link>,
                  icon: <AppstoreOutlined />,
                  key: "/create-room"
            },
            {
                  label: <Link to="/list-room">List Room</Link>,
                  icon: <AppstoreOutlined />,
                  key: "/list-room"
            },
            {
                  label: <Link to="/book-room">Book Room</Link>,
                  icon: <SettingOutlined />,
                  key: "/book-room"
            }
      ]
      return (
            <>
                  <Menu
                        mode="inline"
                        items={items}
                        defaultSelectedKeys={['/']}
                        defaultOpenKeys={["menu-1"]}
                  />
            </>
      )
}
export default MenuSider;