import { useState, useEffect } from "react";
import "./Carrosel.css"

import img1 from "../assets/carrosel/img1"
import img2 from "../assets/carrosel/img2"
import img3 from "../assets/carrosel/img3"
import img4 from "../assets/carrosel/img4"

export default function Carrosel() {
    const slides = [
        {
            imagem: img1,
            titulo: "CPU",
            descricao: "A imagem mostra um setup gamer branco com iluminação rosa e decoração em estilo anime.",
            botao: "Saiba mais"
        },
        {
            imagem: img2,
            titulo: "CPU",
            descricao: "A imagem mostra um setup gamer preto com iluminação rosa e componentes organizados",
            botao: "Saiba mais"
        },
        {
            imagem: img3,
            titulo: "CPU",
            descricao: "A imagem mostra um setup gamer preto com iluminação roxa e decoração delicada.",
            botao: "Saiba mais"
        },
        {
            imagem: img4,
            titulo: "CPU",
            descricao: "A imagem mostra um setup gamer preto com iluminação rosa e design moderno.",
            botao: "Saiba mais"
        }
    ];
    const [slideAtual, setslideAtual] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            proximoSlide();
        }, 5000);
        return () => clearInterval(intervalo);
    }, [slideAtual])

    function proximoSlide() {
        setSlideAtual((anterior) =>
            anterior === slides.length - 1 ? 0 : anterior + 1);
    }

    function slideAnterior() {
        setSlideAtual((anterior) =>
            anterior === 0 ? slides.length - 1 : anterior - 1);
    }

    return (
        <div className="carrosel">
            <div className="carroselImagem">
                <div className="carroselSlide" style={{
                    transform: `translateX(-${slideAtual * 100}%)`
                }}
                >
                    {slides.map((item, indice) => (
                        <div className="carroselSlide"
                            key={indice}
                        >
                            <img
                                src={item.imagem} alt={item.titulo}
                            />
                        </div>
                    ))}

                </div>
                <button className="seta esquerda"
                    onClick={slideAnterior}
                >
                    ❮

                </button>

                <button className="seta direita"
                    onClick={proximoSlide}
                >

                    ❯
                </button>
            </div>
            <div className="texto">
                <h2>{slides[slideAtual].titulo}</h2>
                <p>{slides[slideAtual].descricao}</p>
                <button className="botao">
                    {slides[slideAtual].botao}
                </button>
            </div>
            <div className="indicadores">
                {slides.map((_, indice) => (
                    <span key={indice} className={slideAtual === indice ? "indicador ativo" : "indicador"}
                        onClick={() => setslideAtual(indice)}
                    />
                ))}
            </div>
            <hr />
            <div
                style={{
                    arginTop: "30px",
                    padding: "20px",
                    background: "#f8f9fa",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    textAlign: "left",
                }}
            >
                <h2>📖 Guia para Alterações</h2>
                <table
                    border="1"
                    cellPadding="8"
                    style={{
                        width: "100%",
                        borderCollapse: "collapse",
                    }}
                >
                    <thead>
                        <tr>
                            <th>Desejo alterar</th>
                            <th>Onde alterar?</th>
                            <thr>Observações</thr>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Imagem</td>
                            <td>Importações + vetor slides</td>
                            <td>A imagem deve existir na pasta assets/imagens.</td>
                        </tr>

                        <tr>
                            <td>Título</td>
                            <td>Campo titulo</td>
                            <td>Sem limite de caracteres.</td>
                        </tr>

                        <tr>
                            <td>Descrição</td>
                            <td>Campo descricao</td>
                            <td>Textos menores ficam mais bonitos.</td>
                        </tr>
                        <tr>
                            <td>Texto do botão</td>
                            <td>Campo botao</td>
                            <td>Pode ser qualquer texto.</td>
                        </tr>
                        <tr>
                            <td>Adicionar slides</td>
                            <td>Adicionar um novo objeto</td>
                            <td>Não existe limite.</td>
                        </tr>
                        <tr>
                            <td>Tempo da troca automática</td>
                            <td>useEffect → 5000</td>
                            <td>1000 = 1 segundo.</td>
                        </tr>
                        <tr>
                            <td>Velocidade da animação</td>
                            <td>Carrossel.css → transition</td>
                            <td>Quanto menor, mais rápido.</td>
                        </tr>
                        <tr>
                            <td>Tamanho das imagens</td>
                            <td>Carrossel.css</td>
                            <td>Alterar width e height.</td>
                        </tr>
                        <tr>
                            <td>Cores dos botões</td>
                            <td>Classe .botao</td>
                            <td>Pode alterar fundo, texto e borda.</td>
                        </tr>
                        <tr>
                            <td>Indicadores</td>
                            <td>.indicador e .ativo</td>
                            <td>Alterar cor, tamanho e bordas.</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <h2>⚠ Limitações deste projeto</h2>
                <ul>
                    <li>Não utiliza banco de dados.</li>
                    <li>Não utiliza API.</li>
                    <li>As imagens são locais.</li>
                    <li>O botão ainda não possui ação.</li>
                    <li>Não faz upload de imagens.</li>
                    <li>Não possui legendas diferentes por idioma.</li>
                    <li>Não possui animação Fade.</li>
                    <li>Não possui efeito de Zoom.</li>
                    <li>Não possui miniaturas.</li>
                    <li>Não possui pausa ao passar o mouse.</li>
                    <li>Não possui suporte para arrastar com o mouse.</li>
                    <li>Não possui suporte para toque (Swipe) em celulares.</li>
                </ul>
            </div>
        </div >
    );
}