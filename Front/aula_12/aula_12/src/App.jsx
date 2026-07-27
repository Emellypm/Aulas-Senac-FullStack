import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <header>
                <img
                    src="https://www.w3.org/assets/logos/w3c/w3c-no-bars.svg"
                    alt="Logotipo do W3C"
                    className="logo"
                />
                <h1>W3C - World Wide Web Consortium</h1>
                <p>
                    Organização responsável pelos padrões utilizados na construção
                    da Web.
                </p>
            </header>
            <nav>
                <a href="#w3c">W3C</a>
                <a href="#semantica">Semântica</a>
                <a href="#seo">SEO</a>
                <a href="#react">React</a>
            </nav>
            <main>
                <section id="w3c">
                    <h2>O que é o W3C?</h2>
                    <article>
                        <p>
                            O W3C (World Wide Web Consortium) define os padrões da
                            Internet.
                            Seu objetivo é fazer com que os sites funcionem
                            corretamente
                            em qualquer navegador e dispositivo.

                        </p>
                    </article>
                </section>
                <section>
                    <h2>Tecnologias Padronizadas</h2>
                    <article>
                        <table>
                            <thead>
                                <tr>
                                    <th>Tecnologia</th>
                                    <th>Função</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>HTML</td>
                                    <td>Estrutura da página.</td>
                                </tr>
                                <tr>
                                    <td>CSS</td>
                                    <td>Define o estilo.</td>
                                </tr>
                                <tr>
                                    <td>SVG</td>
                                    <td>Imagens vetoriais.</td>
                                </tr>
                                <tr>
                                    <td>XML</td>
                                    <td>Troca de dados.</td>
                                </tr>
                                <tr>
                                    <td>WCAG</td>
                                    <td>Componentes reutilizáveis.</td>
                                </tr>
                            </tbody>
                        </table>
                    </article>
                </section>
                <section id="semantica">
                    <h2>Tags Semânticas</h2>
                    <article>
                        <ul>
                            <li><strong>header</strong>→ Cabeçalho.</li>
                            <li><strong>nav</strong>→ Menu.</li>
                            <li><strong>main</strong> → Conteúdo principal.</li>
                            <li><strong>section</strong>→ Agrupa conteúdos.</li>
                            <li><strong>article</strong> → Conteúdo independente.</li>
                            <li><strong>footer</strong> → Rodapé.</li>
                        </ul>
                    </article>
                </section>
                <section id="seo">
                    <h2>SEO</h2>
                    <article>
                        <p>EO significa Search Engine Optimization.
                            Utilizar HTML semântico ajuda o Google a compreender melhor
                            o conteúdo da página.
                        </p>
                        <img src="https://picsum.photos/500/250"
                            alt="Exemplo de imagem com descrição para acessibilidade"
                        />
                    </article>
                    <section id="react">
                        <h2>React + W3C</h2>
                        <article>
                            <p>
                                Mesmo utilizando React continuamos escrevendo HTML através
                                do JSX.
                            </p>
                            <button className="btn">Botão React</button>
                        </article>
                    </section>
                </section>
            </main>
            <aside>
                <h3>Curiosidade</h3>
                <p>
                    O inventor da Web, Tim Berners-Lee,
                    também fundou o W3C em 1994.
                </p>
            </aside>
            <footer>
                <p>
                    Página criada para demonstrar os padrões do W3C utilizando
                    React.
                </p>
                <p>
                    © 2026 - Professor Ivan Morale
                </p>
            </footer >
        </>
    );
}

export default App
