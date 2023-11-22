"use client";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const FormRegistroProfesionales = () => {
  const formik = useFormik({
    initialValues: {
      nombreApellido: "",
      ciudad: "",
      telefono: "",
      email: "",
      password: "",
      RepitaPassword: "",
      numeroColegiado: "",
    },
    validationSchema: Yup.object({
      nombreApellido: Yup.string()
        .max(30, "Nombre y Apellido debe ser de 30 caracteres o menos")
        .required("Campo obligatorio"),
      ciudad: Yup.string()
        .max(30, "Ciudad debe ser de 30 caracteres o menos")
        .required("Campo obligatorio"),
      telefono: Yup.string()
        .matches(/^\d{10,}$/, {
          message:
            "Teléfono debe incluir código de país y ciudad, sin caracteres especiales",
        })
        .max(30, "Teléfono debe ser de 30 caracteres o menos")
        .required("Campo obligatorio"),
      email: Yup.string().email("Email inválido").required("Campo obligatorio"),
      password: Yup.string()
        .required("Campo obligatorio")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Contraseña debe tener al menos 8 caracteres, e incluir un número y un caracter especial"
        ),
      RepitaPassword: Yup.string()
        .required("Debe confirmar la contraseña elegida")
        .oneOf([Yup.ref("password")], "Las contraseñas deben coincidir"),
      numeroColegiado: Yup.string()
        .max(15, "Número Colegiado debe ser de 15 caracteres o menos")
        .required("Campo obligatorio"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showRepitaPassword, setShowRepitaPassword] = useState(false);

  return (
    <form onSubmit={formik.handleSubmit} className="">
      <label htmlFor="nombreApellido">Nombre y Apellido</label>
      <input
        id="nombreApellido"
        name="nombreApellido"
        type="text"
        placeholder="Pedro Gonzalez"
        className=""
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.nombreApellido}
      />
      {formik.touched.nombreApellido && formik.errors.nombreApellido ? (
        <div className="text-sm text-red-600">
          {formik.errors.nombreApellido}
        </div>
      ) : null}
      <label htmlFor="ciudad">Ciudad</label>
      <input
        id="ciudad"
        name="ciudad"
        type="text"
        placeholder="Lima"
        className=""
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.ciudad}
      />
      {formik.touched.ciudad && formik.errors.ciudad ? (
        <div className="text-sm text-red-600">{formik.errors.ciudad}</div>
      ) : null}
      <label htmlFor="telefono">Teléfono</label>
      <input
        id="telefono"
        name="telefono"
        type="text"
        placeholder="5491151212515"
        className=""
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.telefono}
      />
      {formik.touched.telefono && formik.errors.telefono ? (
        <div className="text-sm text-red-600">{formik.errors.telefono}</div>
      ) : null}
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="text"
        placeholder="maria@correo.com"
        className=""
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="text-sm text-red-600"> {formik.errors.email}</div>
      ) : null}
      <label htmlFor="password">Password</label>
      <div className="flex items-center">
        <div className="relative flex-grow">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="passwordMaria"
            className=""
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-sm text-red-600">{formik.errors.password}</div>
          ) : null}
          <button
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? (
              <MdOutlineVisibility className="absolute top-1/2 transform -translate-y-1/2 right-1 w-6 h-6" />
            ) : (
              <MdOutlineVisibilityOff className="absolute top-1/2 transform -translate-y-1/2 right-1 w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      <label htmlFor="RepitaPassword">Repita password</label>
      <div className="flex items-center">
        <div className="relative flex-grow">
          <input
            id="RepitaPassword"
            name="RepitaPassword"
            type={showRepitaPassword ? "text" : "password"}
            placeholder="passwordMaria"
            className=""
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.RepitaPassword}
          />
          {formik.touched.RepitaPassword && formik.errors.RepitaPassword ? (
            <div className="text-sm text-red-600">
              {formik.errors.RepitaPassword}
            </div>
          ) : null}
          <button
            onClick={() => {
              setShowRepitaPassword(!showRepitaPassword);
            }}
          >
            {showRepitaPassword ? (
              <MdOutlineVisibility className="absolute top-1/2 transform -translate-y-1/2 right-1 w-6 h-6" />
            ) : (
              <MdOutlineVisibilityOff className="absolute top-1/2 transform -translate-y-1/2 right-1 w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      <label htmlFor="numeroColegiado">Número de colegiado</label>
      <input
        id="numeroColegiado"
        name="numeroColegiado"
        type="text"
        placeholder="1234567890"
        className=""
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.numeroColegiado}
      />
      {formik.touched.numeroColegiado && formik.errors.numeroColegiado ? (
        <div className="text-sm text-red-600">
          {formik.errors.numeroColegiado}
        </div>
      ) : null}
      {/* <div className="grid grid-cols-2 justify-items-end">
        <label htmlFor="DiplomaCV">Agregue su Diploma o CV</label>
        <button className="btn btn-primary">AGREGAR</button>
      </div> */}
    </form>
  );
};

export default FormRegistroProfesionales;
