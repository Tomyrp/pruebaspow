
import imagen13 from './images/13.png'
import imagen14 from './images/14.png'
import imagen15 from './images/15.png'
//Imagenes de cursos detallados

import imageayuda13 from "..///detalle ayuda/image/13.png"
//imagenes de cursos personalizados
import imageayuda15 from "..///detalle ayuda/image/15.png"
import imageayuda16 from "..///detalle ayuda/image/16.png"

export const ayudas = [
  
    {
      id: 13,
      tipo: 'general',
      nombre: 'MI NEGOCIO',
      descripcion: 'Curso 13',
      imagen: imagen13,
      modalidad: "En Línea",
      aprender: [
        "Aprenderás: ",
        "-Desarrollo de la idea de negocio",
        "-El mercado",
        "-Administración",
        "-Cálculo de manejo del dinero en el negocio"
      ], imagenAyuda: imageayuda13    
    },
    {
      id: 15,
      tipo: 'personalizados',
      nombre: 'SERVICIO DE VENTAS',
      descripcion: 'Curso 14 ',
      imagen: imagen14,
      modalidad:" En línea",
      aprender: [
        "Aprenderás:",
        "-Servicio de ventas",
        "-Tipos de ventas",
        "-Embudo de ventas",
        "-Cómo prospectar clientes",
        "-Cómo vender por internet",
        "-Tipos de estrategias de ventas",
        "-Qué es un vendedor",
        "-TIC´S aplicadas al marketing y ventas ",
        "-Estrategias de comunicación en ventas",
        "-Técnicas efectivas aplicadas al proceso de ventas"
      ],imagenAyuda: imageayuda15
    },
    {
      id: 15,
      tipo: 'personalizados',
      nombre: 'ATENCIÓN AL CLIENTE',
      descripcion: 'Curso 15',
      imagen: imagen15,
      modalidad: "En Línea",
      aprender: [
        "Aprenderás: ",
        "-Introducción a la contabilidad de costos y presupuestos",
        "-Metodología",
        "-Metodología para el cálculo de costos: Modelo Orgánico"
      ], imagenAyuda: imageayuda16
    }
  ]