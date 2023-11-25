import ServicioAsideBar from "@/components/Servicios/ServicioAsideBar"
import ServicioDetallesCommentBox from "@/components/Servicios/ServicioDetallesCommentBox"
import ServicioProfesionalCard from "@/components/Servicios/ServicioProfesionalCard"
import ServicioProfesionalComentarios from "@/components/Servicios/ServicioProfesionalComentarios"
import data from "@/components/Servicios/data/comentarios.json"


const ServicioDetalles = () => {
  
  return (
    <div className="flex flex-col md:flex-row justify-around">
      <div>
        <ServicioAsideBar/>
      </div>
      <div>

        <ServicioProfesionalCard/>
        <ServicioDetallesCommentBox/>
        <ServicioProfesionalComentarios comentarios={data.comentarios}/>
      </div>
    </div>
  )
}

export default ServicioDetalles