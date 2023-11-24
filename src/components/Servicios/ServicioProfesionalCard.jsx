"use client";
import { FaUserDoctor } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { Card, CardBody, Image, Chip, CardFooter } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import StarRatings from "react-star-ratings";
import { Snippet } from "@nextui-org/react";

const profesional = {
  name: "Dr. Lorem Ipsum",
  especialidad: "Psiquiatra",
  matricula: "34-41412-414-12",
  rating: 4.2,
  mail: "doctorLorem@gmail.com",
  telefono: "1-234-567-890",
  descripcion:
    "El Dr. Lorem Ipsum es un psiquiatra altamente calificado con una amplia experiencia en el tratamiento de diversas condiciones mentales. Su enfoque profesional y empático ha sido elogiado por numerosos pacientes.",
  reviews: [
    {
      name: "Juan Pérez",
      rating: 4.0,
      comentario: "Excelente atención. Recomiendo al Dr. Lorem Ipsum.",
    },
    {
      name: "María Rodríguez",
      rating: 4.5,
      comentario: "Muy profesional y amable. Me sentí escuchada.",
    },
    {
      name: "Carlos González",
      rating: 3.8,
      comentario: "Buena consulta, aunque la espera fue un poco larga.",
    },
    {
      name: "Laura Fernández",
      rating: 4.2,
      comentario: "El Dr. Lorem Ipsum brinda un servicio de calidad.",
    },
    {
      name: "Alejandro Díaz",
      rating: 4.6,
      comentario: "Experiencia positiva. Lo recomendaría a otros.",
    },
    {
      name: "Ana Martínez",
      rating: 3.9,
      comentario: "La consulta fue útil, pero esperaba más empatía.",
    },
    {
      name: "Roberto Sánchez",
      rating: 4.1,
      comentario: "Buen trato y explicaciones claras. Satisfecho.",
    },
  ],
};

const ServicioProfesionalCard = () => {
  return (
    <div className="flex flex-col md:flex-row ">

    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] rounded-r-none md:rounded"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt={profesional.name}
              className="object-cover"
              height={200}
              shadow="md"
              src="/doctor-ejemplo.png"
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h1 className="font-semibold text-foreground/90">
                  {profesional.name}
                </h1>
                <div className="flex justify-between">
                  <Chip
                    className="bg-action-blue"
                    variant="faded"
                    startContent={<FaUserDoctor />}
                  >
                    <p className="text-small text-foreground/80">
                      {profesional.especialidad}
                    </p>
                  </Chip>
                  <StarRatings
                    rating={profesional.rating}
                    starRatedColor="#ffb829"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="2px"
                    name="rating"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-3 gap-1">
              <div className="flex justify-between">
                <p className="text-small">{profesional.descripcion}</p>
              </div>
            </div>
          </div>
        </div>
        
      </CardBody>

      <Divider />
      <CardFooter>
        <div className="flex w-full justify-between">
          <Snippet symbol="" variant="shadow" color="primary">
            <div className="flex flex-row gap-2 items-center">
              <CiMail />
              {profesional.mail}
            </div>
          </Snippet>
          <Snippet symbol="" variant="shadow" color="success">
            <div className="flex flex-row gap-2 items-center">
              <IoIosCall />

              <span>{profesional.telefono}</span>
            </div>
          </Snippet>
        </div>
      </CardFooter>
    </Card>
    <Card isBlurred className="border-none p-3 bg-background/60 dark:bg-default-100/50 max-w-[610px] rounded md:rounded-l-none "
      shadow="sm">
    <Image
              alt={profesional.name}
              className="object-cover"
              height={200}
              shadow="md"
              src="/servicio-ubicacion-profesionales.png"
              width="100%"
              
            />

    </Card>
    </div>
    
    
  );
};

export default ServicioProfesionalCard;
