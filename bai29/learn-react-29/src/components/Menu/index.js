function Menu() {
      const arrayMenu = [
            "Trang chủ",
            "Sản phẩm",
            "Tin tức",
            "Giới thiệu",
            "Liên hệ",
      ];
      return (
            <>
                  <ul>
                        {arrayMenu.map((item, index) =>
                              <li key={index}>{item}</li>
                        )}
                  </ul>

            </>
      )
}
export default Menu;