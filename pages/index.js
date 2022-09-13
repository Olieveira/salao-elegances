import Head from "next/head";
import Menu from "../components/Menu.js";
import Desc from "../components/Desc.js";
import Footer from "../components/Footer.js";
import About from "../components/About.js";

function Home() {

  return (
    <>
      <Head>
        <title>Salão Elegances</title>
      </Head>

      <Menu />

      <Desc/>

      <About />

      <Footer />
    
    </>
  );
}
export default Home;
