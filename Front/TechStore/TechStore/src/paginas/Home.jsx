import Hero from "../componentes/Hero";
import Categorias from "../componentes/Categorias";
import ProdutosDestaque from "../componentes/ProdutosDestaque";


function Home() {
    return (
        <>
            <Hero />

            <Categorias />

            <ProdutosDestaque />
        </>
    );
}

export default Home;