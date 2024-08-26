import LayoutDefault from "../layouts/LayoutDefault";
import Cart from "../pages/Cart";
import Home from "../pages/Home";


export const routes = [
      {
            path: "/",
            element: <LayoutDefault />,
            children: [
                  {
                        path: "/",
                        element: <Home />
                  },
                  {
                        path: "cart",
                        element: <Cart />
                  }
            ]
      }
]