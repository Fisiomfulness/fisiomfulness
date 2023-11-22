import {Button} from "@nextui-org/react";
import Image from 'next/image'
import {Input} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";
import fisiumLogo from '@/assets/LogoSimple.svg'

const TrabajaConNosotros = () => {


    return (
        <div class='p-14'>
            <div class='flex items-center gap-10'>
                <Image src={fisiumLogo} alt='logo' />
                <p>Trabajá con <span class="text-[#06B0FF] underline">nosotros</span></p>
            </div>
            <div class='px-60 py-20 flex gap-10 items-start w-screen justify-start'>
                <div className="flex flex-col gap-10 itemes-center">
                    <Input  isReadOnly type="text" label="Tipo de documento" labelPlacement="outside" placeholder="DNI"/>
                    <Input   type="number" label="Numero de documento" labelPlacement="outside" placeholder="12.345.678"/>
                    <Input   type="number" label="Numero de teléfono" labelPlacement="outside" placeholder="+09 9 999 999 999"/>
                    <Button className='w-full text-white bg-sky-500/100' color="primary">
                        ENVIAR
                    </Button>
                </div>
                <div className="flex flex-col gap-10 itemes-center">
                    <Input   type="email" label="Email" labelPlacement="outside" placeholder="mail@mail.com"/>
                    <Input   type="text" label="Agrega tu cv" labelPlacement="outside" placeholder="file.pdf"/>
                    <Textarea 
                        label="Mensaje"
                        placeholder="Mensaje..."
                        labelPlacement="outside"
                    />
                </div>
            </div>
        </div>
    )
}

export default TrabajaConNosotros