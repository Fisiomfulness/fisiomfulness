import ServicioAsideBar from "@/components/Servicios/ServicioAsideBar"
import ServicioPrecioCard from "@/components/Servicios/ServicioPrecioCard"
import data from "@/components/Servicios/data/servicios.json"

const ServicioPrecios = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around">
      <div>
        <ServicioAsideBar/>
      </div>
      <div>

        <ServicioPrecioCard servicios={data.servicios}/>
      </div>
    </div>
  )
}

export default ServicioPrecios