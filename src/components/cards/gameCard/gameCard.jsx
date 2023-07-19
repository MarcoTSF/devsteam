import Image from "next/image";
import Styles from "./gameCard.module.css";
import Button from "@/components/forms/button/button";

const GameCard = ({ image, title, category, price, onAdd}) => {
  return (
    <div className={Styles.gameCard}>
      <Image className={Styles.image} src={`/products/${image}`} alt={image} width={300} height={145} />
      <div className={Styles.info}>
        <h3 className={Styles.title }>{title}</h3>
        <p className={Styles.category}>{category}</p>
        <div className={Styles.pricing}>
          <h2 className={Styles.price}>R${price}</h2>
          <Button onClick={onAdd}>Adicionar ao carrinho</Button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;