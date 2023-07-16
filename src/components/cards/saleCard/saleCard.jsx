import Image from 'next/image'
import Styles from './saleCard.module.css'
import Button from '@/components/forms/button/button'

export default function SaleCard() {
    return (
        <div className={Styles.salecard}>
            <Image src='/products/league-of-legends.jpg' width={250} height={300} />
            <div className={Styles.info}>
                <h3 className={Styles.title}>Oferta Exclusiva</h3>
                <div className={Styles.pricecard}>
                    <div className={Styles.percent}>-20%</div>
                    <div className={Styles.price}>
                        <p className={Styles.fullprice}>R$99,90</p>
                        <h4 className={Styles.discountprice}>R$79,90</h4>
                    </div>
                </div>
                <Button>Adicionar ao Carrinho</Button>
            </div>
        </div>
    )
}