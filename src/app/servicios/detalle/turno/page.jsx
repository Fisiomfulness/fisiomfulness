import ServicioAsideBar from "@/components/Servicios/ServicioAsideBar"
import Calendario from "@/components/Servicios/Calendario/ServicioTurno"

const ServicioTurno = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around ">
      <div>
        <ServicioAsideBar/>
      </div>
      <div className="w-full max-w-[1118px] flex items-center justify-center mb-4">
        
        <Calendario className=""/>
      </div>
    </div>
  )
}

export default ServicioTurno