import Head from 'next/head'
import Header from '../Components/NavbarApp';
import CarouselSlides from '../Components/CarouselSlides';
import api from '../Services/api';
import BannerAbout from '../Components/BannerAbout';

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Atmósfera</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header ></Header>
      </header>
      <main>
        <section id="#carousel">
          <CarouselSlides slides={props.slides}/>
        </section>
        <section id="#about">
          <BannerAbout />
        </section>


      </main>


      <footer>
      </footer>
    </>
  )
}
Home.getInitialProps = async (ctx) => {
  const res = await api.home.carousel();
  return { slides: res.data}
}