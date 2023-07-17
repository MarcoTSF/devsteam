import Head from 'next/head'
import Navbar from '@/components/navbar/navbar'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import Container from '@/components/container/container'
import SaleCard from '@/components/cards/saleCard/saleCard'
import Styles from '@/styles/index.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="public/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Container>
          <div className={Styles.session}>
            <Subtitle>Promoções</Subtitle>
            <div className={Styles.salecontainer}>
              <SaleCard />
              <SaleCard />
              <SaleCard />
            </div>
          </div>

          <div className={Styles.session}>
            <Subtitle>Outros Jogos</Subtitle>
          </div>
        </Container>
      </div>
    </>
  )
}
