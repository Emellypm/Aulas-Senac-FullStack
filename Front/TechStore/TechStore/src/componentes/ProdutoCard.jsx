import "./ProdutoCard.css"

function ProdutoCard({imagem,nome,preco}) {
    return (
        <div className="produto-card">

            <img src={imagem} alt={nome} />
            <h3>{nome}</h3>
            <p className="preco">{preco}</p>
            <button>Comprar</button>

        </div>
    )
}
export default ProdutoCard