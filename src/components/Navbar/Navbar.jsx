import logo from "../../assets/logo_me.jpg";
import Cartwidget from "../CartWidget/CartWidget";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="logo" width={70} />
      
      <ul className="categorias">
        <li>Sahumerios</li>
        <li>Velas</li>
        <li>Esencias</li>
        <li>Fuentes</li>
        <li>Deco</li>
      </ul>

      <Cartwidget />
    </nav>
  );
};

export default Navbar;
