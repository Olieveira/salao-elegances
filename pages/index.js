import Head from "next/head";
import Menu from "../components/Menu.js";
import Desc from "../components/Desc.js";
import Footer from "../components/Footer.js";
import About from "../components/About.js";
import Servicos from "../components/Servicos.js";

function Home() {
  return (
    <>
      <Head>
        <title>Salão Elegances</title>
      </Head>

      <Menu />

      <Desc />

      <About />

      <Servicos />

      <Footer />
    </>
  );
}
export default Home;
