import { Link, Outlet } from "react-router-dom"
import "./LayoutDefault.scss"
import CartMini from "../../components/CartMini";
import logo from "./cellphoneb.jpg"
function LayoutDefault() {
  return (
    <div className="my-website">
      {/* Header */}
      <header className="my-website__header">
        <nav className="my-website__nav">
          <div className="my-website__logo">
            <Link to="/">
              <img width={180} src={logo} alt="" className="my-website__logo-image" />
            </Link>
          </div>
          <div className="my-website__cart-link">
            <CartMini />
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="my-website__main-content" style={{ padding: '20px' }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="my-website__footer">
        <p className="my-website__footer-text">&copy; 2024 My Website</p>
      </footer>
    </div>
  )
}
export default LayoutDefault;