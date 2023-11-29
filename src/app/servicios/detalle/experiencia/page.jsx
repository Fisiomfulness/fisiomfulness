import ServicioAsideBar from "@/components/Servicios/ServicioAsideBar"
import ServicioExperienciaCard from "@/components/Servicios/ServicioExperienciaCard"
import data from "@/components/Servicios/data/experiencia.json"

const ServicioExperiencia = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around">
      <div>
        <ServicioAsideBar/>
      </div>
      <div>

        <ServicioExperienciaCard experiencia={data.experiencia}/>
      </div>
    </div>
  )
}

export default ServicioExperiencia