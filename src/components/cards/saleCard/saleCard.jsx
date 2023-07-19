import Image from "next/image";

import Styles from "./saleCard.module.css";
import Button from "@/components/forms/button/button";

const SaleCard = ({ image, discount, fullPrice, discountPrice, onAdd }) => {
  return (
      <div className={Styles.salecard}>
        <Image src={`/products/${image}`} alt={image} width={250} height={300}  />
        <div className={Styles.info}>
            <h3 className={Styles.title}>Ofertas Exclusivas</h3>
            <div className={Styles.pricecard}>
                <div className={Styles.percent}>-{discount}</div>
                <div className={Styles.price}>
                    <p className={Styles.fullprice}>R${fullPrice}</p>
                    <h4 className={Styles.discountprice}>R${discountPrice}</h4>
                </div>
            </div>
            <Button onClick={onAdd} fullWidth>Adicionar ao carrinho</Button>
        </div>
      </div>

  );
};

export default SaleCard;