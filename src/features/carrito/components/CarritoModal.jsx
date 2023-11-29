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
import { useAtom, useSetAtom } from "jotai";
import { MdErrorOutline, MdShoppingCart } from "react-icons/md";
import { cartAtom } from "../store";

function ModalContainer({ children, className, ...otherProps }) {
	return (
		<Modal
			placement="center"
			className={cn("!mx-2", className)}
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
	const [{ cart }] = useAtom(cartAtom);

	return (
		<div className="flex flex-col gap-4 text-secondary my-8">
			{cart.map((product) => (
				<div key={product.key} className="flex flex-row gap-5">
					{/* eslint-disable-next-line */}
					<img
						src={product.img}
						alt={product.name}
						className="min-w-[160px] h-24 object-cover object-bottom rounded-lg"
					/>
					<div className="w-80">
						<p className="font-bold text-md">{product.name}</p>
						<p className="line-clamp-3">{product.description}</p>
					</div>
					<div className="text-right flex flex-col gap-2 justify-center">
						<p className="font-bold text-xl">${product.price}</p>
						<Button color="danger" className="font-bold" radius="sm" size="sm">
							eliminar
						</Button>
					</div>
				</div>
			))}
		</div>
	);
}

function FirstModal({ onClose }) {
	const setCart = useSetAtom(cartAtom);

	return (
		<div className="overflow-x-auto">
			<p className="border-b border-primary w-fit mb-4 text-lg font-semibold">
				TU CARRO
			</p>
			<div className="mx-auto w-fit">
				<ListProducts />
				<div className="w-72 flex flex-col gap-4 mx-auto">
					<Button
						color="primary"
						className="uppercase font-bold"
						radius="sm"
						onPress={onClose}
					>
						Checkout
					</Button>
					<Button
						color="danger"
						className="uppercase font-bold"
						radius="sm"
						onPress={() => setCart((value) => ({ ...value, cart: [] }))}
					>
						Borrar todo
					</Button>
				</div>
			</div>
		</div>
	);
}

export default function CarritoModal() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [{ cart }] = useAtom(cartAtom);

	return (
		<div>
			<button onClick={onOpen}>
				<MdShoppingCart className="w-8 h-8 text-primary" />
			</button>
			{cart.length ? (
				<ModalContainer
					isOpen={isOpen}
					onOpenChange={onOpenChange}
					isDismissable={false}
					className={"max-w-3xl"}
				>
					{(onClose) => <FirstModal onClose={onClose} />}
				</ModalContainer>
			) : (
				<ModalContainer
					isOpen={isOpen}
					className={"max-w-fit"}
					onOpenChange={onOpenChange}
					hideCloseButton
					isDismissable={false}
				>
					{(onClose) => <ThirdModal onClose={onClose} />}
				</ModalContainer>
			)}
		</div>
	);
}
