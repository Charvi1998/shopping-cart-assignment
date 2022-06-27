import { Link, Outlet } from "react-router-dom";
import "./Navigation.css";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import CartIcon from "../components/Cart/CartIcon";

const Navigation = () => {
  return (
    <>
      <nav className="navigation-container">
        <div className="navigation">
          <Logo className="logo" />
        </div>
        <div className="nav-links-container ">
          <Link className="nav-link nav-link-main" to="/">
            Home
          </Link>
          <Link className="nav-link nav-link-main" to="/products">
            Products
          </Link>
        </div>
        <div className="nav-links-container nav-links-user">
          <Link className="nav-link" to="/signin">
            SignIn
          </Link>
          <Link className="nav-link" to="/register">
            Register
          </Link>
          <div className="cart-container">
            <Link className="nav-link" to="/cart">
              <CartIcon />
            </Link>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navigation;
