import Head from 'next/head'
import Navbar from '@/components/navbar/navbar'
import Subtitle from '@/components/tipography/subtitle/subtitle'

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
        <Subtitle>Promoções</Subtitle>
        <Subtitle>Outros Jogos</Subtitle>
      </div>
    </>
  )
}
