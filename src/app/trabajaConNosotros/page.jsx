"use client"
import {Button} from "@nextui-org/react";
import Image from 'next/image'
import { CgAttachment } from "react-icons/cg";
import fisiumLogo from '@/assets/LogoSimple.svg'

const TrabajaConNosotros = () => {


    return (
        <div className='p-14 justify-center w-full'>
            <form>
                <div className='flex items-center gap-10'>
                    <Image src={fisiumLogo} alt='logo' />
                    <p>Trabajá con <span className="text-[#06B0FF] underline">nosotros</span></p>
                </div>
                <div className='px-60 py-20 flex gap-10 items-start justify-start'>
                    <div className="flex flex-col gap-10 itemes-center w-full">
                        <div className='flex flex-col gap-2'>
                            <label>Tipo de documento</label>
                            <input  readOnly  placeholder='DNI' className='border-2 border-slate-200 rounded-sm px-2 bg-slate-200 h-8 ' />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label>Número de documento</label>
                            <input type='number'   placeholder='12.345.678' className='border border-slate-200 rounded-sm px-2 bg-slate-200 h-8 ' />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label>Número de télefono</label>
                            <input type='number'   placeholder='+09 9 999 999 999' className='border border-slate-200 rounded-sm px-2 bg-slate-200 h-8 ' />
                        </div>

                        
                        <Button type='submit' className='w-full text-white bg-sky-500/100' color="primary">
                            ENVIAR
                        </Button>
                    </div>
                    <div className="flex flex-col gap-10 itemes-center w-full">
                        <div className='flex flex-col gap-2'>
                            <label>Email</label>
                            <input type='email'   placeholder='mail@mail.com' className='border border-slate-200 rounded-sm px-2 bg-slate-200 h-8 ' />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label>Agrega tu CV</label>
                            <div className="relative border border-slate-200 bg-slate-200 rounded-sm px-2 py-1 h-8">
                                <input
                                type="text"
                                className="w-full bg-transparent"
                                placeholder="file.pdf"
                                />
                                <Button
                                isIconOnly
                                className="bg-transparent font-bold py-1 px-2 absolute top-1/2 right transform -translate-y-1/2 text-sky-500"
                                >
                                    <CgAttachment />
                                </Button>
                            </div>
                        </div>


                        <div className='flex flex-col gap-2'>
                            <label>Mensaje</label>
                            <textarea placeholder='Mensaje...' className='border border-slate-200 rounded-sm px-2 bg-slate-200 ' />

                            
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default TrabajaConNosotros