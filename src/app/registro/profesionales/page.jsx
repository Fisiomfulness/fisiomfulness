import FisiumLogo from "../FisiumLogo/FisiumLogo";


const RegistroProfesionales = () => {

  return (
    <div className="w-full h-screen flex items-center justify-center bg-action-blue">
      <div className="bg-white w-3/4 h-3/4 lg:w-4/6 lg:h-4/6 flex items-center justify-center">
        <div className="w-1/2 lg:w-1/2 h-full items-center justify-center">
          <div className="bg-pale-blue w-1/2 lg:w-full h-1/3 flex items-center justify-center">
            <FisiumLogo />
          </div>
          <div className="bg-pale-blue w-1/2 lg:w-full h-1/2 items-center justify-center text-center">
            <div className="bg-pale-blue w-1/4 lg:w-full h-1/2 py-6 items-center text-center">
              <h3 className="font-semibold">Registrarse</h3>
              <label
                htmlFor="usuario"
                className="font-normal text-primary block"
              >
                <input
                  id="usuario"
                  type="radio"
                  name="tipoUsuario"
                  className="rounded-full form-checkbox h-4 w-4 accent-action-blue focus:accent-secondary"
                ></input>
                Usuario
              </label>
              <label
                htmlFor="profesional"
                className="font-normal text-primary block"
              >
                <input
                  id="profesional"
                  type="radio"
                  name="tipoUsuario"
                  className="rounded-full form-checkbox h-4 w-4 accent-action-blue focus:accent-secondary"
                ></input>
                Profesional
              </label>
            </div>
            <div className="bg-pale-blue w-1/3 lg:w-full h-1/3 py-8 text-start px-10">
              <label
                htmlFor="terminosCondiciones"
                className="font-normal text-xs text-primary block"
              >
                <input
                  id="terminosCondiciones"
                  type="checkbox"
                  name="terminosCondiciones"
                  className="form-checkbox h-4 w-4 accent-action-blue focus:accent-secondary"
                ></input>
                Acepto los términos y condiciones del servicio de Fisiomfulness.
                Declaro haber leído y entiendo la política de privacidad.
              </label>
              <label
                htmlFor="terminosCondiciones"
                className="font-normal text-xs text-primary block"
              >
                <input
                  id="consentimiento"
                  type="checkbox"
                  name="consentimiento"
                  className="form-checkbox h-4 w-4 accent-action-blue focus:accent-secondary"
                ></input>
                Doy mi consentimiento y acepto recibir información sobre los
                servicios y novedades de Fisiomfulness. Qué significa esto?
              </label>
            </div>
          </div>
        </div>
        <div className="w-1/2 lg:w-1/2 h-full flex items-center justify-center">
          <div className="bg-gray-500 w-full h-full">
           
            <button className="btn btn-primary">CREAR PERFIL</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistroProfesionales;
