import { useState, useEffect } from "react";
import "./Carrossel.css";
import img1 from "../assets/carrossel/img1.png"
import img2 from "../assets/carrossel/img2.png"
import img3 from "../assets/carrossel/img3.png"
import img4 from "../assets/carrossel/img4.png"

export default function Carrossel() {
    const slides = [
        {
            imagem: img1,
        },
        {
            imagem: img2,
        },
        {
            imagem: img3,
        },
        {
            imagem: img4,
        }
    ];
    const [slideAtual, setSlideAtual] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            proximoSlide();
        }, 5000);
        return () => clearInterval(intervalo);
    }, [slideAtual]);

    function proximoSlide() {
        setSlideAtual((anterior) =>
            anterior === slides.length - 1 ? 0 : anterior + 1);
    }

    function slideAnterior() {
        setSlideAtual((anterior) =>
            anterior === 0 ? slides.length - 1 : anterior - 1);
    }

    return (
        <div className="carrossel">
            <div className="carrosselImg">
                <div className="carrosselSlides" style={{ transform: `translateX(-${slideAtual * 100}%)`, }}>
                    {slides.map((item, indice) => (
                        <div className="carrosselSlide" key={indice}>
                            <img src={item.imagem} alt={item.titulo} />
                        </div>
                    ))}
                </div>
                <button className="seta esquerda" onClick={slideAnterior}> ❮ </button>
                <button className="seta direita" onClick={proximoSlide}> ❯ </button>
            </div>
            <div className="texto">
                <h2>{slides[slideAtual].titulo}</h2>
                <p>{slides[slideAtual].descricao}</p>
                
            </div>
            <div className="indicadores">
                {slides.map((_, indice) => (
                    <span key={indice} className={slideAtual === indice ? "indicador ativo" : "indicador"}
                        onClick={() => setSlideAtual(indice)} />
                ))}
            </div>
        </div>
    )

}
