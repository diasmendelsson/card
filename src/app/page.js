import '/src/app/estilo.css';
import styles from '/src/app/page.module.css';
import React from 'react'
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';



export default function Home() {
  return ( 
    <section className='container'>
      <div className='boxi'>
        <div className='cartao'>
          <img
            className='imagem'
          src="perfil.jpg"
          alt='mulher de perfil'
          width={205}/> 
        <h1>Mendelsson<br />Dias</h1>
        
          <div className='traco'></div>

        <p>Desenvolvedor</p>
        </div> 

        <div className='rodape-icones'>
          <ul>
            <li><Link href="#"><FaFacebook className='my-icon'/></Link></li>
            <li><Link href="#"><FaTwitter className='my-icon'/></Link></li>
            <li><Link href="#"><FaLinkedin className='my-icon'/></Link></li>
            <li><Link href="#"><FaInstagram className='my-icon'/></Link></li>
          </ul>
        </div>

      </div>

     
      <div className='titulo'>
          <h1>Olá</h1>
          <h2>Meu perfil e meus projetos</h2>

          <div className='buttons'>
            <button className='btn1'>Currículo</button>
            <button className='btn2'>Projetos</button>
          </div>

          <p>Sou um parágrafo. Aqui você pode adicionar seu texto. É fácil, basta clicar em "Editar texto" ou clicar duas vezes sobre mim para editar o conteúdo, a fonte e mais.</p>

        </div>
        
      

    </section>
  )
}
