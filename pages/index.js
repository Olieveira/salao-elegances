import Head from "next/head";
import Menu from "../components/Menu.js";
import Teste from "../components/Teste.js";

function Home() {

  return (
    <>
      <Head>
        <title>Salão Elegances</title>
      </Head>

      <Menu />

      <Teste/>
    
    </>
  );
}
export default Home;
