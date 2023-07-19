import CartOption from "../cartOption/cartOption";
import Styles from "./cartMenu.module.css";
import Button from "../forms/button/button";

const CartMenu = ({ cart, onRemove }) => {
  const handleSubmit = () => {
    alert("Compra realizada com sucesso!");
  };

  return (
    <div className={Styles.menu}>
      <div className={Styles.option}>
        {cart.length === 0 ? (
          <p>Nenhum produto no seu carrinho.</p>
        ) : (
          cart.map((cartInfo, pos) => (
            <CartOption
              image={cartInfo.image}
              title={cartInfo.name}
              price={cartInfo.price}
              onRemove={() => onRemove(pos)}
              key={`cart-info-${pos}`}
            />
          ))
        )}
      </div>
      <div className={Styles.priceline}>
        <h2>Total</h2>
        <h2 className={Styles.price}>
          R${" "}
          {cart.reduce((prev, current) => prev + current.price, 0).toFixed(2)}
        </h2>
      </div>
      {cart.length > 0 && (
        <div className={Styles.button}>
          <Button onClick={handleSubmit}>Finalizar Compra</Button>
        </div>
      )}
    </div>
  );
};

export default CartMenu;