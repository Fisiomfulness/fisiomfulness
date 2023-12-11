import ServicioMainContainer from "./ServicioMainContainer"

const ServicioMain = ({data}) => {
  return (
    <div>
        <ServicioMainContainer profesionales={data}/>
    </div>
  )
}

export default ServicioMain