import { useState } from "react";
import Head from 'next/head';
import Styles from "@/styles/index.module.css";

import Navbar from '@/components/navbar/navbar';
import Subtitle from '@/components/tipography/subtitle/subtitle';
import Container from '@/components/container/container';
import SaleCard from '@/components/cards/saleCard/saleCard';
import GameCard from '@/components/cards/gameCard/gameCard';
import Footer from "@/components/footer/footer";


export default function Home() {
  const [cart, setCart] = useState([])
  const handleAddProduct = (info) => {
    setCart([...cart, info])
  }
  const handleRemoveProduct = (pos) => {
    setCart(cart.filter((obj, posObj) => posObj !== pos))
  }

  return (
    <>
      <Head>
        <title>DevSteam: Game Store</title>
        <meta name="description" content="DevSteam: Game Store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar  cart={cart} onRemove={handleRemoveProduct} />
        <Container>
          <div className={Styles.session}>
            <Subtitle >Promoções</Subtitle>
            <div className={Styles.salecontainer}>
              <SaleCard
                image={'league-of-legends.jpg'}
                discount='30%'
                fullPrice='199,90'
                discountPrice='99,90'
                onAdd={() => 
                  handleAddProduct ({ name: 'League of Legends', price: 99.90, image: 'league-of-legends.jpg'})}
              />
              <SaleCard
                image={'dota-2.jpg'}
                discount='40%'
                fullPrice='299,90'
                discountPrice='109,90'
                onAdd={() => 
                  handleAddProduct ({ name: 'Dota 2', price: 109.90, image: 'dota-2.jpg'})}
              />
              <SaleCard
                image={'valorant.jpg'}
                discount='50%'
                fullPrice='399,90'
                discountPrice='209,90'
                onAdd={() => 
                  handleAddProduct ({ name: 'Valorant', price: 209.90, image: 'valorant.jpg'})}
              />
            </div>
          </div>
          <div className={Styles.session}>
            <Subtitle >Outros Jogos</Subtitle>
          </div>
          <div className={Styles.gameContainer}>
            <GameCard
              image={'counter-strike.jpg'}
              title='Counter Strike: Global Offensive'
              category='Ação, Estratégia, Multijogador'
              price='99,90'
              onAdd={() => 
                handleAddProduct ({ name: 'Counter Strike: Global Offensive', price: 99.90, image: 'counter-strike.jpg'})}
            />
            <GameCard
              image={'fortnite.jpg'}
              title='Fortnite'
              category='Ação, Estratégia, Multijogador'
              price='199,90'
              onAdd={() => 
                handleAddProduct ({ name: 'Fortnite', price: 199.90, image: 'fortnite.jpg'})}
            />
            <GameCard
              image={'minecraft.jpg'}
              title='Minecraft'
              category='Criatividade, Estratégia, Multijogador'
              price='89,90'
              onAdd={() => 
                handleAddProduct ({ name: 'Minecraft', price: 89.90, image: 'minecraft.jpg'})}
            />
            <GameCard
              image={'roblox.jpg'}
              title='Roblox'
              category='Multiverso, Multijogador'
              price='109,90'
              onAdd={() => 
                handleAddProduct ({ name: 'Roblox', price: 109.90, image: 'roblox.jpg'})}
            />
            <GameCard
              image={'freefire.jpg'}
              title='Free Fire'
              category='Ação, Estratégia, Multijogador'
              price='159,90'
              onAdd={() => 
                handleAddProduct ({ name: 'Free Fire', price: 159.90, image: 'freefire.jpg'})}
            />
            <GameCard
              image={'gtav.jpg'}
              title='Grand Theft Auto V'
              category='Ação, Estratégia, Multijogador'
              price='219,90'
              onAdd={() => 
                handleAddProduct ({ name: 'Grand Theft Auto V', price: 219.90, image: 'gtav.jpg'})}
            />
            <GameCard
              image={'pubg.jpg'}
              title='PUBG: Battlegrounds'
              category='Ação, Estratégia, Multijogador'
              price='119,90'
              onAdd={() => 
                handleAddProduct ({ name: 'PUBG: Battlegrounds', price: 119.90, image: 'pubg.jpg'})}
            />
          </div>
        </Container>
        <Footer />
      </div>
    </>
  )
}