// import logo from './logo.svg';
// import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Home from './pages/home';
// import About from './pages/About';
// import Contact from './pages/contact';
// import Error404 from './pages/Error404';
// import LayoutDefault from './layouts/LayoutDefault';
// import Blog from './pages/Blog';
// import BlogNews from './pages/Blog/BlogNews';
// import BlogRelated from './pages/Blog/BlogRelated';
// import BlogAll from './pages/Blog/BlogAll';
// import BlogDetail from './pages/Blog/BlogDetail';
// import InfoUser from './pages/InfoUser';
// import Login from './pages/Login';
// import PrivateRoutes from './components/privateRouter';
import AllRoute from './components/AllRoutes';

function App() {
  return (
    <div className="">
      <AllRoute/>
      {/* <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />}>4
            <Route index element={<BlogAll />} />
            <Route path="news" element={<BlogNews />} />
            <Route path="related" element={<BlogRelated />} />
            <Route path=":id" element={<BlogDetail />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
          <Route element={<PrivateRoutes />}>
            <Route path="info-user" element={<InfoUser />} />
          </Route>
        </Route>
      </Routes> */}
    </div>
  );
}

export default App;
