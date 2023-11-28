import ServicioAsideBar from "@/components/Servicios/ServicioAsideBar"

const ServicioTurno = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around">
      <div>
        <ServicioAsideBar/>
      </div>
      <div>

        <h1> Turno</h1>
      </div>
    </div>
  )
}

export default ServicioTurno