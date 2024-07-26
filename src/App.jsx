import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import TextConverter from './components/text-converter/text-converter'
import Button from './components/button/button'

function App() {
  return (
    <>


      <header className='header'>

      <h1 className='title'>Desafio React Basico</h1>

      </header>

      <div className="main">



        <div className="instructions">


          <p className="title">Desafio 1</p>

          <p className='text-default'>Componente que colore e transforma um texto para
            maiúsculo (uppercase) utilizando JS.
          </p>

          <ol className='list'>
            <li>Faça o componente renderizar na tela um parágrafo colorido
              e com todas as letras maiúsculas usando JS;</li>

            <li>Utilize props para passar o texto e a cor de texto desejada
              para dentro do componente (a cor pode ser uma palavra, como
              'red', ou um hexadecimal);</li>

            <li>Pode utilizar o style inline para colorir o componente da forma
              que foi mostrado nas aulas;</li>
          </ol>



          <p className="title">Desafio 2</p>

          <p className='text-default'>Mostrar mensagem com a label do botão
          </p>

          <ol className='list'>
            <li>Crie um componente Button com um evento de clique que
              apresente um alerta informando a prop label do botão</li>

          </ol>




        </div>

        <div className="result">



          <div className="exercice-text-converter">


            <TextConverter fontColor='Blue'>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nesciunt et, consectetur aspernatur facilis hic impedit iure voluptatibus temporibus quidem! Ipsa labore qui quisquam totam. Commodi totam obcaecati veritatis eius.</p>

            </TextConverter>

            <TextConverter fontColor='gold'>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nesciunt et, consectetur aspernatur facilis hic impedit iure voluptatibus temporibus quidem! Ipsa labore qui quisquam totam. Commodi totam obcaecati veritatis eius.</p>

            </TextConverter>

            <TextConverter fontColor='red'>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nesciunt et, consectetur aspernatur facilis hic impedit iure voluptatibus temporibus quidem! Ipsa labore qui quisquam totam. Commodi totam obcaecati veritatis eius.</p>

            </TextConverter>

            <TextConverter>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet eligendi itaque assumenda rerum velit ad vitae doloribus illum quod repellendus, aspernatur odit expedita nihil numquam porro totam? Repellendus, nihil beatae.</p>

            </TextConverter>



          </div>

          <div className="exercice-button">

            <Button />
            <Button title='Enviar' />
            <Button title='Atualizar dados' />

          </div>



        </div>



      </div>








    </>
  )
}

export default App
