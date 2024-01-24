import { CarritoModal } from "@/features/carrito";

export default function DocCarrito() {
  return (
    <>
      <div className="flex flex-row gap-4 items-center">
        <p>
          <span className="font-bold">WIP:</span> Carrito Modal
        </p>
        <CarritoModal />
      </div>
      <div className="text-sm">
        <p>No acepta ninguna prop ni referencia.</p>
        <p>Muestra y elimina los productos que hay en el carrito.</p>
        <p className="text-red-500">
          Puede ocurrir errores de{" "}
          <a
            href="https://es.react.dev/reference/react-dom/client/hydrateRoot#hydrating-server-rendered-html"
            rel="noreferrer noopener"
            target="_blank"
            className="text-red-600 font-bold hover:text-red-700"
          >
            {`"hidratacion"`}
          </a>{" "}
          si se llama a más de uno en la misma pagina
        </p>
      </div>
    </>
  );
}
