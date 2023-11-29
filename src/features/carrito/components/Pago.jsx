"use client";

import { cn } from "@/features/ui";
import {
	Modal,
	ModalContent,
	useDisclosure,
	Button,
	RadioGroup,
	Radio,
	Input,
	ModalBody,
	ModalFooter,
} from "@nextui-org/react";
import TablaServicios from "./TablaServicios";
import { useEffect, useState } from "react";

import { MdOutlineCached, MdOutlineCheckCircle } from "react-icons/md";
import { MdErrorOutline } from "react-icons/md";

function TablaPagar() {
	return (
		<div className="overflow-x-auto w-full p-3 bg-zinc-200 rounded-md">
			<table
				className={cn(
					"min-w-max mx-auto", //scroll y centrar
					"bg-transparent",
				)}
			>
				<thead>
					<tr className="[&_th]:py-3">
						<th scope="col">Información de tu compra</th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody className={cn("[&_tr_td]:py-2", "text-left")}>
					<tr>
						<td>servicio</td>
						<td>$100</td>
					</tr>
					<tr>
						<td>servicio</td>
						<td>$100</td>
					</tr>
					<tr>
						<td>servicio</td>
						<td>$100</td>
					</tr>
					<tr className="border-t border-primary">
						<td className="font-bold">total</td>
						<td>$300</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

function CustomRadio({ children, ...otherProps }) {
	return (
		<Radio
			{...otherProps}
			classNames={{
				base: cn(
					"inline-flex flex-row items-center justify-start gap-2",
					"min-w-[280px] m-0 cursor-pointer px-5 py-3 font-normal",
					"border-1 border-primary rounded-sm",
					"data-[selected=true]:bg-zinc-200 hover:bg-zinc-200",
				),
				control: cn("w-4 h-4 bg-primary"),
				label: cn("text-base"),
				wrapper: cn("!border-secondary !bg-zinc-200"),
			}}
			size="sm"
		>
			{children}
		</Radio>
	);
}

const metodosDePago = [
	{
		value: "credito",
		label: "Tarjeta de crédito",
	},
	{
		value: "debito",
		label: "Tarjeta de débito",
	},
];
const formaDePago = [
	{
		value: "paypal",
		label: "Paypal",
	},
	{
		value: "mercadoPago",
		label: "Mercado pago",
	},
	{
		value: "tambo",
		label: "Tambo",
	},
];

function Group({ label, values }) {
	return (
		<RadioGroup label={label} classNames={{ label: cn("text-inherit") }}>
			{values.map((value) => (
				<CustomRadio key={value.value} value={value.value}>
					{value.label}
				</CustomRadio>
			))}
		</RadioGroup>
	);
}

function FirstModal({ onClose }) {
	return (
		<div className="overflow-x-auto">
			<p className="border-b border-primary w-fit mb-4 text-lg font-semibold">
				Elige tu método de pago
			</p>
			<div className="flex flex-row gap-8">
				<div>
					<div className="flex flex-col gap-6">
						<Group label="Método de pago" values={metodosDePago} />
						<Group label="Otras formas de pago" values={formaDePago} />
					</div>
				</div>
				<div>
					<div className="flex flex-col gap-4 w-72">
						<TablaPagar />
						<Input
							variant="bordered"
							label="Cupon de descuento"
							placeholder="Ingresa el codigo de tu cupon"
							labelPlacement="outside"
							radius="sm"
							classNames={{
								label: cn("m-0 font-normal text-base"),
								input: cn(
									"placeholder:!not-italic placeholder:text-base text-base",
								),
								inputWrapper: cn("bg-zinc-200 border-1 border-gray-500"),
							}}
						/>
						<Button
							color="primary"
							onPress={onClose}
							size="lg"
							className="uppercase font-bold"
							radius="sm"
						>
							Pagar
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

function CustomInput({ ...otherProps }) {
	const errorMessage = otherProps.isInvalid ? "Requerido" : "";

	return (
		<Input
			variant="bordered"
			labelPlacement="outside"
			placeholder=" "
			radius="sm"
			errorMessage={errorMessage}
			classNames={{
				label: cn("m-0 font-normal text-base !text-inherit"),
				input: cn("placeholder:!not-italic placeholder:text-base text-base"),
				inputWrapper: cn("bg-zinc-200 border-1 border-gray-500"),
			}}
			{...otherProps}
		/>
	);
}

function CustomSmallInput({ ...otherProps }) {
	const errorMessage = otherProps.isInvalid ? "Requerido" : "";

	return (
		<Input
			variant="bordered"
			labelPlacement="outside"
			placeholder=" "
			radius="sm"
			errorMessage={errorMessage}
			classNames={{
				base: cn("w-32"),
				label: cn("m-0 font-normal text-base !text-inherit"),
				input: cn(
					"placeholder:!not-italic placeholder:text-base text-base !w-[100px]",
				),
				inputWrapper: cn("bg-zinc-200 border-1 border-gray-500"),
			}}
			{...otherProps}
		/>
	);
}

function SecondModal({ onClose }) {
	const [isSubmit, setIsSubmit] = useState(false);
	const [isInvalid, setIsInvalid] = useState({
		titular: false,
		tarjeta: false,
		vencimiento: false,
		ccv: false,
	});

	useEffect(() => {
		if (isSubmit) console.log("submit");
	}, [isSubmit]);

	const handleSubmit = (event) => {
		event.preventDefault();
		const { titular, tarjeta, vencimiento, ccv } = event.target;

		const draft = {
			...isInvalid,
			titular: !titular.value,
			tarjeta: !tarjeta.value,
			vencimiento: !vencimiento.value,
			ccv: !ccv.value,
		};

		if (Object.values(draft).every((value) => value === false)) {
			setIsSubmit(true);
		} else {
			setIsSubmit(false);
		}

		setIsInvalid(draft);
	};

	return (
		<div className="overflow-x-auto">
			<p className="border-b border-primary w-fit mb-4 text-lg font-semibold">
				Ingresá tus datos
			</p>
			<form onSubmit={handleSubmit}>
				<div className="flex flex-col gap-6 pt-4 w-80">
					<CustomInput
						name="titular"
						isInvalid={isInvalid.titular}
						label="Titular de la tarjeta"
					/>
					<CustomInput
						name="tarjeta"
						isInvalid={isInvalid.tarjeta}
						label="Número de tarjeta"
					/>
					<div className="flex flex-row justify-between">
						<CustomSmallInput
							name="vencimiento"
							isInvalid={isInvalid.vencimiento}
							label="Vencimiento"
						/>
						<CustomSmallInput
							name="ccv"
							isInvalid={isInvalid.ccv}
							label="ccv"
						/>
					</div>
					<Button
						color="primary"
						type="submit"
						size="lg"
						className="uppercase font-bold"
						radius="sm"
					>
						Pagar
					</Button>
				</div>
			</form>
		</div>
	);
}

const defaultIconMapping = {
	success: <MdOutlineCheckCircle className="w-10 h-10 text-primary mb-4" />,
	error: <MdErrorOutline className="w-10 h-10 text-red-500 mb-4" />,
	loading: (
		<MdOutlineCached className="w-10 h-10 text-primary mb-4 animate-reverse-spin" />
	),
};

function ThirdModal({ status = "loading" }) {
	const content = {
		loading: (
			<p>
				Confirmando pago, <span className="font-bold italic">aguarde</span>
			</p>
		),
		error: (
			<>
				<p>Datos inválidos</p>
				<p>intente nuevamente</p>
			</>
		),
		success: <p>Pago realizado con exito</p>,
	};

	return (
		<div className="w-56 h-72 flex flex-col">
			<ModalBody className="flex justify-center gap-0 items-center my-16 p-0">
				{defaultIconMapping[status]}
				{content[status]}
			</ModalBody>
			<ModalFooter className="flex flex-col p-0">
				{status !== "loading" && (
					<Button
						radius="sm"
						color="primary"
						className="uppercase text-black p-0"
					>
						Volver
					</Button>
				)}
			</ModalFooter>
		</div>
	);
}

function ModalBase() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<>
			<Button
				color="primary"
				radius="sm"
				className="text-base"
				onPress={onOpen}
			>
				Asigna tu metodo de pago
			</Button>

			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				placement="center"
				className="max-w-fit !mx-0"
			>
				<ModalContent className="rounded-md p-8 overflow-hidden">
					{(onClose) => <ThirdModal onClose={onClose} />}
				</ModalContent>
			</Modal>
		</>
	);
}

export default function Pago() {
	return (
		<>
			<TablaServicios />
			<ModalBase />
		</>
	);
}
