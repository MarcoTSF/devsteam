import Image from "next/image";
import Styles from "./cartOption.module.css";

const CartOption = ({ image, title, price, onRemove }) => {
    return (
        <div className={Styles.option}>
            <Image className={Styles.image} src={`/products/${image}`} alt={`{image}`} width={62} height={74}/>
            <div className={Styles.info}>
                <h3 className={Styles.title}>{title}</h3>
                <h3 className={Styles.price}>R${price.toFixed(2)}</h3>
                <p className={Styles.remove} onClick={onRemove}>Remover</p>
            </div>
        </div>
    )
}

export default CartOption;