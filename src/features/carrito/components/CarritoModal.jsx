"use client";

import { cn } from "@/features/ui";
import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { MdErrorOutline, MdShoppingCart } from "react-icons/md";

function ModalContainer({ children, className, ...otherProps }) {
	return (
		<Modal
			placement="center"
			className={cn("max-w-fit min-w-[665px] !mx-2", className)}
			{...otherProps}
		>
			<ModalContent className="rounded-md p-8 overflow-hidden">
				{children}
			</ModalContent>
		</Modal>
	);
}

function ThirdModal({ onClose }) {
	return (
		<div className="w-56 h-72 flex flex-col">
			<ModalBody className="flex justify-center gap-0 items-center my-16 p-0">
				<MdErrorOutline className="w-10 h-10 text-primary mb-4" />
				No tienes items en tu carro
			</ModalBody>
			<ModalFooter className="flex flex-col p-0">
				<Button
					radius="sm"
					color="primary"
					className="uppercase text-white p-0"
					onPress={onClose}
				>
					Volver
				</Button>
			</ModalFooter>
		</div>
	);
}

function ListProducts() {
	return (
		<div>
			<div>aaaaaaaa</div>
			<div>aaaaaaaa</div>
			<div>aaaaaaaa</div>
		</div>
	);
}

function FirstModal() {
	return (
		<div className="overflow-x-auto">
			<p className="border-b border-primary w-fit mb-4 text-lg font-semibold">
				TU CARRO
			</p>
			<div className="flex flex-col gap-8">
				<div className="flex flex-col gap-4 w-72">
					<ListProducts />
					<Button color="primary" className="uppercase font-bold" radius="sm">
						Checkout
					</Button>
					<Button color="danger" className="uppercase font-bold" radius="sm">
						Borrar todo
					</Button>
				</div>
			</div>
		</div>
	);
}

const products = new Array(3).fill().map((_, index) => ({
	key: index + 1,
	name: `Producto ${index + 1}`,
	price: 100,
	description: "Descripcion del producto",
	img: "/prod1Prueba.png",
}));

export default function CarritoModal() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [cart, setCart] = useState(products);

	return (
		<div>
			<button onClick={onOpen}>
				<MdShoppingCart className="w-8 h-8 text-primary" />
			</button>
			<ModalContainer
				isOpen={isOpen}
				className={"min-w-0"}
				onOpenChange={onOpenChange}
				hideCloseButton={!cart.length}
				isDismissable={false}
			>
				{cart.length ? (
					<FirstModal />
				) : (
					(onClose) => <ThirdModal onClose={onClose} />
				)}
			</ModalContainer>
		</div>
	);
}
