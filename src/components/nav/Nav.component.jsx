import "./nav.styles.css";

import { ReactComponent as MenuIcon } from "../../assets/icons/mobile-menu.svg";

import { ReactComponent as SearchIconLG } from "../../assets/icons/search-icon-lg.svg";
import { ReactComponent as CartIconLG } from "../../assets/icons/cart-icon-lg.svg";

const Nav = () => {
  return (
    <nav className="header-nav">
      <div className="nav-items-container">
        <a href="/" className="menu-icon">
          <MenuIcon />
        </a>
        <a href="/" className="logo-sm nav-icon-sm">
          <img
            src="https://assets2.razerzone.com/images/phoenix/razer-ths-logo.svg"
            alt=""
          />
        </a>
        <div className="nav-items">
          <a href="/">Store</a>
          <a href="/">PC</a>
          <a href="/">Console</a>
          <a href="/">Mobile</a>
          <a href="/">Lifestyle</a>
          <a href="/">Services</a>
          <a href="/">Community</a>
          <a href="/">Support</a>
        </div>
        <div className="nav-icons">
          <a href="/" className="search-icon">
            <SearchIconLG />
          </a>
          <a href="/" className="nav-icon-sm cart-icon">
            <CartIconLG />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
