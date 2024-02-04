export const validation = (edit) => {
  let errors = {};
  const imgRegex = /\.(jpg|jpeg|png|gif|bmp)$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordRegex =/^(?=.*[A-Z])(?=.*\d).{6,}$/;

  const name_length = 50;
  const city_length = 50;
  console.log("validando");
  console.log(edit.name);
  console.log(errors);
  // name validation
  if (!edit.name) {
    errors.name = "Nombre requerido";
  } else if (edit.name.length > name_length) {
    errors.name = `El nombre debe ser menor a ${name_length} caracteres`;
  }

  //city validation
  if (!edit.city) {
    errors.city = "Ciudad requerida";
  } else if (edit.city.length > city_length) {
    errors.city = `El nombre de la ciudad debe ser menor a ${city_length} caracteres`;
  }

  //email validation
  if (!edit.email) {
    errors.email = "Email requerido";
  } else if (!emailRegex.test(edit.email)) {
    errors.email = "No es un email valido";
  }

  //contraseña validation
  if (!edit.password) {
    errors.password = "Contraseña requerida";
  } else if (!passwordRegex.test(edit.password)) {
    errors.password = "No es una contraseña valida, minimo 6 caracteres, una mayuscula y un numero";
  }

    //contraseña repeticion validation
  if (!edit.passwordRep) {
    errors.passwordRep = "Repita la contraseña";
    console.log(edit)
  } else if (edit.passwordRep !== edit.password) {
    errors.passwordRep = "Las contraseñas no coinciden"
  }

  //validacion de imagen
  if (!imgRegex.test(edit.img)) {
    errors.img = "La imagen debe ser .jpg, .speg, .png o .bmp";
  }
  return errors;
};
