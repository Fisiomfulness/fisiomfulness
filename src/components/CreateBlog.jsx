"use client";
import React from 'react';
import { Button } from "@nextui-org/react";
import Rating from '@/components/Rating';
import ScrollBlog from './ScrollBlog';

const CreateBlog = () => {
    return (
        <div style={{ display: 'flex', height: '140vh' }}>
         

            <div style={{ flex: 6, padding: '20px' }}>
                <h1 >Titulo</h1>
                <h3 className="w-[90%] h-[5%] mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aperiam exercitationem laboriosam quaerat rem pariatur recusandae aliquam laudantium provident a obcaecati, natus voluptas illum porro ut inventore cum hic amet?</h3>
               <ScrollBlog/>
                <div className="bg-[#D8EEF8] grid grid-cols-8 sm:grid-cols-8 md:grid-cols-8 w-[90%] m-0">
                    <h4 className='mr-10 mt-2 ml-3 col-span-2 sm:col-span-2 md:col-span-2'>Valoracion</h4>
                    <Rating className='mr-10 mt-2 col-span-2 sm:col-span-2 md:col-span-2' />
                    <input className="bg-[#D8EEF8] rounded-lg ml-10 col-span-3 sm:col-span-3 md:col-span-3" type="text" placeholder="agregar un comentario..." />
                    <Button color="primary" className='col-span-2 sm:col-span-2 md:col-span-2 '>
                        Enviar
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CreateBlog;