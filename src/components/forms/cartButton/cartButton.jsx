import { useState } from "react";
import Styles from "./cartButton.module.css";
import { BsCart4 } from "react-icons/bs";
import CartMenu from "@/components/cartMenu/cartMenu";

const CartButton = ({ cart, onRemove }) => {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <BsCart4 
                className={Styles.icon}
                size={40} 
                onClick={ () => {setOpen(!open)}}
            />
            {open && <CartMenu cart={cart} onRemove={onRemove} />}
        </div>
    )
}

export default CartButton;