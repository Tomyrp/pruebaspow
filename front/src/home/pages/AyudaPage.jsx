import React from 'react'
import ListAyuda from '../components/ayuda/ListAyuda'
import './style.css'
import Footer from '../components/footer/Footer'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

const AyudaPage = () => {
  const{ tipos}=useParams();
  console.log(tipos)
  const[titulo,settitulo] = useState('')
  useEffect( ()=>{
    settitulo(tipos==='general'?'GENERALES':'PERSONALIZADOS')
  },[tipos] )
  return (
    <>
    <div className='container-md'>
        <h1 className='text-center mt-5 title-curso'>Ayudas{titulo}</h1>

        <ListAyuda tipos={tipos}/>

        <p className="text-center mb-5 descripcion-curso">
          
        </p>
        <ListAyuda tipos={tipos}/>
    </div>
    <Footer/>
    
    </>
  )
}

export default AyudaPage