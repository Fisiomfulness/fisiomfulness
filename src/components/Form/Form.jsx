"use client";
import { Button, Input, Card, CardBody, Image } from "@nextui-org/react";
import { useState } from "react";
import { validation } from "./Validation";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";

function Form(prop) {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [errors, setErrors] = useState({
    name: "",
    city: "",
    email: "",
    password: "",
    passwordRep: "",
    img: "",
  });

  const [edit, setEdit] = useState({
    name: "",
    city: "",
    email: "",
    password: "",
    passwordRep: "",
    img: "",
  });

  const [input, setInput] = useState({
    name: prop.name,
    city: prop.city,
    email: prop.email,
    password: prop.password,
    passwordRep: prop.paswordRep,
    img: prop.img,
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setInput({ ...input, [property]: value });
    setEdit({ ...edit, [property]: value });
    setErrors(validation({ ...input, [property]: value }));
  };

  return (
    <div className="flex items-center">
      <Card className="max-w-full  w-[388px] h-[518px]">
        <CardBody className="flex flex-col justify-between h-full">
          <div className="flex flex-col">
            <div>
              <Input
                autoFocus
                placeholder="Inserte su nombre"
                value={input.name}
                radius="none"
                classNames={{
                  inputWrapper: "h-39",
                  input: [
                    "bg-transparent",
                    "text-black/90 dark:text-white/90",
                    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                  ],
                }}
                name="name"
                onChange={handleChange}
                isRequired
              />
              {errors.name && (
                <span className="error text-red-500">{errors.name}</span>)}
                {!errors.name && (<span className="error text-green-500">Nombre valido</span>)}
            </div>
            <Input
              autoFocus
              placeholder="Inserte su ciudad"
              value={input.city}
              radius="none"
              classNames={{
                inputWrapper: "h-39",
                input: [
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
              }}
              name="city"
              onChange={handleChange}
              isRequired
            />
            {errors.city && <span className="error text-red-500">{errors.city}</span>}
            {!errors.city && <span className="error text-green-500">Ciudad valida</span>}
            <Input
              autoFocus
              placeholder="Inserte su email"
              value={input.email}
              radius="none"
              classNames={{
                inputWrapper: "h-39",
                input: [
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
              }}
              name="email"
              onChange={handleChange}
              isRequired
            />
            {errors.email && (
              <span className="error text-red-500">{errors.email}</span>
            )}
            {!errors.email && <span className="error text-green-500">Email valido</span>}
            <Input
              autoFocus
              placeholder="Inserte su nueva contraseña"
              value={input.password}
              radius="none"
              classNames={{
                inputWrapper: "h-39",
                input: [
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
              }}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              name="password"
              onChange={handleChange}
              isRequired
            />
            {errors.password && (
              <span className="error text-red-500">{errors.password}</span>
            )}
            {!errors.password && <span className="error text-green-500">Contraseña valida</span>}
            <Input
              autoFocus
              placeholder="Repita su nueva contraseña"
              value={input.passwordRep}
              radius="none"
              classNames={{
                inputWrapper: "h-39",
                input: [
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
              }}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              name="passwordRep"
              onChange={handleChange}
              isRequired
            />
            {errors.passwordRep && (
              <p className="error text-red-500">{errors.passwordRep}</p>
            )}
            {!errors.passwordRep && <span className="error text-green-500">Contraseña valida</span>}
            <Input
              autoFocus
              placeholder="Foto"
              value={input.img}
              radius="none"
              classNames={{
                inputWrapper: "h-39",
                input: [
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
              }}
              name="img"
              onChange={handleChange}
              isRequired
            />
            {errors.img && <span className="error text-red-500">{errors.img}</span>}
            {!errors.img && <span className="error text-green-500">Imagen valida</span>}
          </div>
          <div>
            <Button color="primary" className="w-full" radius="none">
              Edit
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
export default Form;
