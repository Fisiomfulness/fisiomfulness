"use client";
import { Accordion, AccordionItem, Avatar, Input } from "@nextui-org/react";
import dynamic from "next/dynamic";
const StarRatings = dynamic(() => import("react-star-ratings"), {
  ssr: false,
});

const ServicioProfesionalComentarios = ({ comentarios }) => {
  
  const indexes = comentarios.map((_, index) => String(index));
  
  return (

    
    <Accordion selectionMode="multiple" defaultExpandedKeys={indexes}>
      {comentarios.map((comentario, index) => (
        <AccordionItem
        
          key={index}
          aria-label={comentario.name}
          startContent={
            <Avatar
              isBordered
              color="primary"
              radius="lg"
              src={comentario.avatarSrc}
            />
          }
          title={comentario.title}
          subtitle={
            <StarRatings
              rating={comentario.rating}
              starRatedColor="#ffb829"
              numberOfStars={5}
              starDimension="20px"
              starSpacing="2px"
              name="rating"
            />
          }
        >
          {comentario.content}
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default ServicioProfesionalComentarios;
