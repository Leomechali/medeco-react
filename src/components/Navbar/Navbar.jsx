import logo from "../../assets/logo_me.jpg";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" width={60} height={60} />
        </div>

        <ul className="categorias">
          <li>Sahumerios</li>
          <li>Velas</li>
          <li>Esencias</li>
          <li>Fuentes</li>
          <li>Deco</li>
        </ul>

        <CartWidget />
      </nav>
    </header>
  );
};

export default Navbar;
