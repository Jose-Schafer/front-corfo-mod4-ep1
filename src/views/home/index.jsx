import ServiceList from './services'
export default function Home() {

  const services = [
    {
      "name": "Traumatología",
      "description": "Servicio de atención especializada en el diagnóstico, tratamiento y rehabilitación de lesiones óseas, musculares y articulares. Contamos con un equipo multidisciplinario y tecnología de punta para brindar el mejor cuidado.",
      "image": "public/static/img/traumatologia_h540.png",
    },
    {
      "name": "Rayos x",
      "description": "Servicio de radiología digital para la obtención de imágenes precisas que ayudan en el diagnóstico de diversas condiciones médicas. Ofrecemos resultados rápidos y confiables.",
      "image": "public/static/img/rayos_x_h540.png",
    },
    {
      "name": "Gediatría",
      "description": "Servicio enfocado en la atención integral de adultos mayores, abordando aspectos físicos, psicológicos y sociales para mejorar su calidad de vida y bienestar.",
      "image": "public/static/img/gediatria_h540.png",
    }
  ]

  return (
    <>
      <ServiceList services={services} />
    </>
  )
}
