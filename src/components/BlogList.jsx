import React from "react";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon.jsx";
import {Select, SelectItem} from "@nextui-org/react";
import {Image} from "@nextui-org/react";

export default function BlogList() {
  const variants = ["flat"];
  const a =  [ {label: "Cat", value: "cat", description: "The second most popular pet in the world"},
  {label: "Dog", value: "dog", description: "The most popular pet in the world"},
  {label: "Elephant", value: "elephant", description: "The largest land animal"},
  {label: "Lion", value: "lion", description: "The king of the jungle"},
  ]

  return (
    <div className="flex flex-col bg-[#D8EEF8] w-[300px] p-4 rounded-lg mt-10 h-[605px] w-[300px]  ml-12">
      <Input
        classNames={{
          base: "w-full h-10",
          mainWrapper: "mb-4",
          input: "text-small",
          inputWrapper: "font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
        }}
        placeholder="Filtrar por palabra clave"
        size="sm"
        startContent={<SearchIcon size={18} />}
        type="search"
      />

<Select items={a} placeholder="filtrar" className="max-w-xs mt-10">

</Select>


      <h4 className="mt-10">Últimas publicaciones</h4>
    

      <div style={{ display: 'flex', alignItems: 'center' , marginTop:'20', marginBottom:"20"}}>
      <Image
      isBlurred
      width={70}
      src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
      alt="NextUI Album Cover"
      classNames="m-5"
    />
  <div className="ml-5 mt-0" >
    <h2 style={{ fontSize: '0.7rem', marginBottom:0}}>Titulo del articulo</h2>
    <h4 style={{ fontSize: '0.6rem', marginTop:0}}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    </h4>
    <h6 style={{ fontSize: '0.5rem' }}>10/01/23</h6>
  </div>
</div>


<div style={{ display: 'flex', alignItems: 'center' , marginTop:'20', marginBottom:"20"}}>
      <Image
      isBlurred
      width={70}
      src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
      alt="NextUI Album Cover"
      classNames="m-5"
    />
  <div className="ml-5 mt-0" >
    <h2 style={{ fontSize: '0.7rem', marginBottom:0}}>Titulo del articulo</h2>
    <h4 style={{ fontSize: '0.6rem', marginTop:0}}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    </h4>
    <h6 style={{ fontSize: '0.5rem' }}>10/01/23</h6>
  </div>
</div>

<div style={{ display: 'flex', alignItems: 'center' , marginTop:'20', marginBottom:"20"}}>
      <Image
      isBlurred
      width={70}
      src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
      alt="NextUI Album Cover"
      classNames="m-5"
    />
  <div className="ml-5 mt-0" >
    <h2 style={{ fontSize: '0.7rem', marginBottom:0}}>Titulo del articulo</h2>
    <h4 style={{ fontSize: '0.6rem', marginTop:0}}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    </h4>
    <h6 style={{ fontSize: '0.5rem' }}>10/01/23</h6>
  </div>
</div>

<div style={{ display: 'flex', alignItems: 'center' , marginTop:'20', marginBottom:"20"}}>
      <Image
      isBlurred
      width={70}
      src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
      alt="NextUI Album Cover"
      classNames="m-5"
    />
  <div className="ml-5 mt-0" >
    <h2 style={{ fontSize: '0.7rem', marginBottom:0}}>Titulo del articulo</h2>
    <h4 style={{ fontSize: '0.6rem', marginTop:0}}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    </h4>
    <h6 style={{ fontSize: '0.5rem' }}>10/01/23</h6>
  </div>
</div>


<div style={{ display: 'flex', alignItems: 'center' , marginTop:'20', marginBottom:"20"}}>
      <Image
      isBlurred
      width={70}
      src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
      alt="NextUI Album Cover"
      classNames="m-5"
    />
  <div className="ml-5 mt-0" >
    <h2 style={{ fontSize: '0.7rem', marginBottom:0}}>Titulo del articulo</h2>
    <h4 style={{ fontSize: '0.6rem', marginTop:0}}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    </h4>
    <h6 style={{ fontSize: '0.5rem' }}>10/01/23</h6>
  </div>
</div>
    </div>
  );
}