import './App.css'

export default function App() {


  return (
    <>
      <div className="top-bar">Produtos de Informática</div>
      <div className='subtitulo'>Escolha seu produto, que estregamos onde você quiser</div>
      <main className="espaço">
        <div className="produto">
          <div className="produto-cardapio">
            <img src="src/assets/teclado.jpg" alt="Teclado Mecânico RGB" />
            <h2>
              Teclado Mecânico Gamer SuperFrame Player, RGB, 60%, Switch Red, USB, ABNT2, Preto, SF-KB-PLRD60BRUAB
              R$ 146,65
            </h2>
          </div>
          <div className='produto-cardapio'>
            <img src="src/assets/mouse.jpg" alt="Mouse Gamer" />
            <h2>Mouse Gamer MSI Forge GM300, RGB, 7200 DPI, 7 Botões, Preto R$ 69,99</h2>
          </div>
          <div className='produto-cardapio'>
            <img src="src/assets/monitor.jpg" alt="Monitor" />
            <h2>Monitor Gamer 24 Pol, Full HD, 1ms, 180Hz, IPS,
              FreeSync, HDMI/DP, DXMO24F180 R$ 569,99</h2>
          </div>
          <div className='produto-cardapio'>
            <img src="src/assets/gabinete.jpg" alt="Gabinete" />
            <h2>Gabinete Gamer Montech King 95 Pro, ARGB, Mid Tower, Vidro Temperado, ATX,
              Black, Sem Fonte, Com 6 Fans R$ 1.289,99</h2>
          </div>
          <div className='produto-cardapio'>
            <img src="src/assets/placa.jpg" alt="Placa de Video" />
            <h2>Placa De Vídeo Gigabyte AMD Radeon RX 7600 Gaming OC, 8GB, GDDR6, FSR, Ray
              Tracing, GV-R76GAMINGOC-8GD R$ 1.699,90</h2>
          </div>
        </div>
      </main>
    </>

  )
}

