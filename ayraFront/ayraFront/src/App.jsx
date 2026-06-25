import { useState } from 'react'
import './App.css'
function App() {

  return (
    <>
      <body>
    <header> 
        <h1 className="logo">AyraRH</h1>
        <button className="btn">Começar grátis</button>
    </header>
    <section className="hero dark">

        <h3 className="tag">QUEM SOMOS</h3>

        <h1 className="title">Nascemos para <em>simplificar</em> a gestão</h1>
        <p className="text">A AyraRH nasceu para ajudar empresas que ainda perdem te po com planilhas,
            mensagens soltas e processos manuais.
            Criamos uma plataforma simples, inteligente e humana para organizar equipes
            com mais clareza e menos estresse.
        </p>
    </section>

    <section className="litgh">

        <h3 className="tag"> NOSSA MISSÃO</h3>
        <h1 className="title">RH mais <em>humano</em>, gestão mais inteligente.</h1>
        <p className="text">Acreditamos que a tecnologia deve simplificar o trabalho de quem cuida de pessos.
            Por isso, a AyraRH automatiza tarefas repetitivas, organiza irfomações importantes
            e ajuda gestores a tomares decisões com mais segurança.
        </p>
        <p className="text">Da pequena empresa ao negócio em crescimento, nossa plataforma foi criada para quem
            quer deixar as planilhas para trás e ganhar tempo para liderar melhor.
        </p>
    </section>



    <div className="cards">
        <div className="card">
            <div className="emoji">🎯</div>
            <h3>Clareza no essenci</h3>
            <p>Organizamos o que importa para que a gestão fique simples,
                visual e fácil de acompanhar.</p>
        </div>

        <div className="card">
            <div className="emoji">🤝</div>
            <h3>Cuidado com pessoas</h3>
            <p>
                Criamos soluções pensando em gestores e equipes
                que vivem a rotina real do trabalho.
            </p>
        </div>
        <div className="card">
            <div className="emoji">⚡</div>
            <h3>Agilidade com confiança</h3>
            <p>
                Automatizamos processos para reduzir erros,
                economizar tempo e trazer mais segurança.
            </p>
        </div>
        <div className="card">
            <div className="emoji">🌱</div>
            <h3>Evoluçao constante</h3>
            <p>
                A AyraRH cresce junto com empresas
                que querem uma gestão mais moderna.
            </p>
        </div>
    </div>
    <section className="quote-section">
        <h3 className="tag">NOSSA CRENÇA</h3>
        <h1 className="quote">
            “Nenhum gestor deveria perder horas tentando organizar uma escala.
            Esse tempo vale mais — e a AyraRH existe para devolver esse tempo.”
        </h1>
        <p className="author">
            — Equipe AyraRH
        </p>
    </section>

    <section className="cta">

        <h1 className="title">
            Pronto para conhecer a <em>AyraRH?</em>
        </h1>

        <p className="text">
            Comece com 14 dias grátis e veja como é simples organizar sua equipe de verdade.
        </p>

        <div className="buttons">
            <button className="btn">
                Começar gratuitamente →
            </button>

            <button className="btn btn-outline">
                Falar com o time
            </button>
        </div>

    </section>

    <footer>
        <h3>⬡ AyraRH</h3>
    </footer>

</body>
    </>
  )
}

export default App
