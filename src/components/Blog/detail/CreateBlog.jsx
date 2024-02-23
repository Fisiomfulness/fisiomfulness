"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import Rating from "@/components/Blog/Rating";
import ScrollBlog from "../ScrollBlog";

const CreateBlog = ({ data }) => {
  return (
    <div className="flex">
      <div className="flex flex-col px-0 md:px-5">
        <h1>{data.title}</h1>
        <h5 className="w-full mb-7">{data.description}</h5>
        <ScrollBlog />
        <div className="bg-[#D8EEF8] flex flex-wrap items-center justify-between p-4 md:p-0 mt-7">
          <h4 className="flex-grow mb-2 sm:mb-0 mr-4 ml-2 md:ml-5 sm:mr-0">
            Valoración
          </h4>
          <div className="flex-grow flex items-center mb-2 sm:mb-0 mr-4 sm:mr-0">
            <Rating />
          </div>
          <input
            className="flex-grow rounded-none mb-2 sm:mb-0 p-2 sm:w-auto sm:mr-0 bg-zinc-200"
            type="text"
            placeholder="agregar un comentario..."
          />
          <Button
            color="primary"
            className="flex-none rounded-none w-full md:w-36 sm:w-auto"
          >
            Enviar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
