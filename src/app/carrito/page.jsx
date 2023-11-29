import { Pago } from "@/features/carrito";
import { CarritoModal } from "@/features/carrito";

export default function CarritoPage() {
	return (
		<div className="flex flex-col justify-center items-center min-h-[80vh] px-4 gap-8">
			<Pago />
			<CarritoModal />
		</div>
	);
}
