import ServicioAsideBar from "@/components/Servicios/ServicioAsideBar"

const ServicioPrecios = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around">
      <div>
        <ServicioAsideBar/>
      </div>
      <div>

        <h1>Precios</h1>
      </div>
    </div>
  )
}

export default ServicioPrecios