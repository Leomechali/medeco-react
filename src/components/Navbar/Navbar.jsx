import logo from "../../assets/logo.jpg";
import Cartwidget from "../Cartwidget/Cartwidget";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" width={70} />
      
      <ul>
        <li>Productos</li>
        <li>Nosotros</li>
        <li>Contacto</li>
      </ul>

      <Cartwidget />
    </nav>
  );
};

export default Navbar;
