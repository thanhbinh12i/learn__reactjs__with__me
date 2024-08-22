import PrivateRoutes from "../components/privateRouter";
import LayoutDefault from "../layouts/LayoutDefault";
import About from "../pages/About";
import Blog from "../pages/Blog";
import BlogAll from "../pages/Blog/BlogAll";
import BlogDetail from "../pages/Blog/BlogDetail";
import BlogNews from "../pages/Blog/BlogNews";
import BlogRelated from "../pages/Blog/BlogRelated";
import Contact from "../pages/contact";
import Error404 from "../pages/Error404";
import Home from "../pages/home";
import InfoUser from "../pages/InfoUser";
import Login from "../pages/Login";

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
                        path: "about",
                        element: <About />
                  },
                  {
                        path: "contact",
                        element: <Contact />
                  },
                  {
                        path: "blog",
                        element: <Blog />,
                        children: [
                              {
                                    index: true,
                                    element: <BlogAll />
                              },
                              {
                                    path: "news",
                                    element: <BlogNews />
                              },
                              {
                                    path: "related",
                                    element: <BlogRelated />
                              },
                              {
                                    path: ":id",
                                    element: <BlogDetail />
                              }
                        ]
                  },
                  {
                        path: "login",
                        element: <Login />
                  },
                  {
                        path: "*",
                        element: <Error404 />
                  },
                  {
                        element: <PrivateRoutes />,
                        children: [
                              {
                                    path: "info-user",
                                    element: <InfoUser />
                              }
                        ]
                  }

            ]
      }
]