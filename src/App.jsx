import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles.css'
import Cardapio from './componentes/cardapio'

function App() {
  return (
    <>
     {/* redes sociais*/}
      <div className="social-icons">
            <a href="https://wa.me/5521965238876" target="_blank" class="whatsapp-link"><i class="fab fa-whatsapp"></i></a>
            <a href="https://www.linkedin.com/in/patrícia-frança-170978232/" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/franca_patricia_vl/profilecard/?igsh=Z2gycnFtMmk1YW11" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="mailto:patriciafranca.uezo@gmail.com?subject=Fale%20Conosco"><i class="far fa-envelope"></i></a>
            <a href="https://github.com/PatriciaFranca87" target="_blank"><i class="fab fa-github"></i></a>
      </div> 
    
      <div class="titulo-Cardapio"> 
        <h1>Lanchonete Imperius</h1>
      </div>
      
      {/*<div class="menu-container">*/}           
            <Cardapio />
      {/*</div>*/}
    

      <footer>
        <p>Desenvolvido por<a href="https://github.com/PatriciaFranca87" target="_blank">  Patrícia França</a> no Curso de Programador Front-End no Senai Maracanã. Todos os direitos reservados - 2025.</p>

      </footer>
    
     </>

  )
}

export default App
