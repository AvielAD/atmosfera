import Head from 'next/head'
import Header from '../Components/NavbarApp';
import CarouselSlides from '../Components/CarouselSlides';
import api from '../Services/api';

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Atmósfera</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header></Header>
      </header>
      <main>
        <section id="#carousel">
          <CarouselSlides slides={props.slides}/>
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