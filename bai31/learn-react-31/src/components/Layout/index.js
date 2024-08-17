import Header from "../Header";
import {createContext} from "react";
export const MenuContext = createContext();

function Layout(){
      const menus = ["Trang chủ", "Tin tức", "Giới thiệu", "Liên Hệ"];
      return (
            <>
            <MenuContext.Provider value={menus}>
                  <Header />
            </MenuContext.Provider>
            <div>Main</div>
            <div>Footer</div>
            </>
      )
}
export default Layout;