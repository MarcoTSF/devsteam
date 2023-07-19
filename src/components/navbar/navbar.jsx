import Styles from "./navbar.module.css";

import Logo from "@/components/logo/logo";
import Input from "@/components/forms/input/input";
import CartButton from "../forms/cartButton/cartButton";

const Navbar = ({ cart, onRemove}) => {
  return (
    <div className={Styles.navbar}>
      <Logo />
      <div className={Styles.search}>
        <Input type="text" placeholder="Buscar Jogo" />
      </div>
      <CartButton 
        cart={cart}
        onRemove={onRemove}
      />
    </div>
  );
};

export default Navbar;