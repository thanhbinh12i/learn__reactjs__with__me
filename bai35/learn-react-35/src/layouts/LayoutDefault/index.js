import { NavLink, Outlet } from "react-router-dom"
import "./LayoutDefault.css"
function LayoutDefault() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <h1>My Website</h1>
        <nav className="nav">
          <NavLink exact to="/" activeClassName="active-link">Home</NavLink> |
          <NavLink to="/about" activeClassName="active-link">About</NavLink> |
          <NavLink to="/contact" activeClassName="active-link">Contact</NavLink> |
          <div className="blog-dropdown">
            <NavLink to="/blog" activeClassName="active-link">Blog</NavLink>
            <ul className="blog-menu">
              <li><NavLink to="/blog/news" activeClassName="active-link">Blog news</NavLink></li>
              <li><NavLink to="/blog/related" activeClassName="active-link">Blog related</NavLink></li>
            </ul>
          </div> |
          <NavLink to="/login" activeClassName="active-link">Info-User</NavLink> |
          <NavLink to="/info-user" activeClassName="active-link">Login</NavLink> 
        </nav>
      </header>

      {/* Main Content */}
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 My Website</p>
      </footer>
    </div>
  )
}
export default LayoutDefault;