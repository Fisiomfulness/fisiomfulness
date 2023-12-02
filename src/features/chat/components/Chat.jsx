"use client";

import { cn } from "@/features/ui";
import { Avatar, Input, forwardRef } from "@nextui-org/react";
import { useLayoutEffect, useRef, useState } from "react";
import { RiArrowUpCircleLine } from "react-icons/ri";

function Collapse({ children }) {
	const [isCollapsed, setIsCollapse] = useState(!true);
	const container = useRef(null);

	useLayoutEffect(() => {
		if (!container.current) return;

		container.current.scrollTop = container.current.scrollHeight;
	}, [isCollapsed, container]);

	if (isCollapsed) {
		return (
			<button
				className="bg-blue-800 text-white text-3xl px-1 py-2 rounded-full"
				onClick={() => setIsCollapse(false)}
			>
				⚗�
			</button>
		);
	}

	return (
		<>
			<button
				className="absolute top-5 right-5 bg-red-500 text-white px-1.5 rounded-sm"
				onClick={() => setIsCollapse(true)}
			>
				X
			</button>
			<div className="fixed bottom-0 right-0 p-4">{children}</div>
		</>
	);
}

const CustomInput = forwardRef(({ ...otherProps }, ref) => {
	return (
		<Input
			ref={ref}
			variant="bordered"
			labelPlacement="outside"
			radius="sm"
			classNames={{
				label: cn("m-0 font-normal text-base !text-inherit"),
				input: cn(
					"placeholder:!not-italic placeholder:text-base text-base flex-1",
				),
				inputWrapper: cn("border-1 border-gray-500", "bg-zinc-200 h-12 px-4"),
				innerWrapper: cn("justify-between"),
			}}
			{...otherProps}
		/>
	);
});

const defaultValue = [
	{
		id: 1,
		type: "bot",
		text: "Mensaje al usuario",
	},
	{
		id: 2,
		type: "bot",
		text: (
			<>
				<span
					className={cn("cursor-pointer font-extrabold", "animate-pulse")}
					onClick={() => alert("This is a ReactNode (╯°□°）╯︵ ┻━┻")}
				>
					This is a ReactNode
				</span>{" "}
				<span>(╯°□°）╯︵ ┻━┻</span>
			</>
		),
	},
	{
		id: 3,
		type: "user",
		text: "Respuesta del usuario",
	},
	{
		id: 4,
		type: "bot",
		text: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
	},
	{
		id: 5,
		type: "user",
		text: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
	},
	{
		id: 6,
		type: "user",
		text: "Respuesta del usuario",
	},
	{
		id: 7,
		type: "bot",
		text: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
	},
	{
		id: 8,
		type: "user",
		text: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
	},
];

function Message({ type, children }) {
	return (
		<div
			className={cn(
				"rounded-2xl max-w-[80%] text-white px-5 py-2 text-justify",
				type === "bot"
					? "bg-primary-light text-black text-left self-start rounded-bl-none"
					: "bg-secondary-light text-right self-end rounded-br-none",
			)}
		>
			{children}
		</div>
	);
}

function Chat({ isCollapsable = false }) {
	const containerRef = useRef(null);

	const [messages, setMessages] = useState(defaultValue);

	useLayoutEffect(() => {
		if (!containerRef.current) return;

		containerRef.current.scrollTop = containerRef.current.scrollHeight;
	}, [messages, containerRef]);

	const handleSubmit = (event) => {
		event.preventDefault();
		const { value } = event.target.message;

		if (!value) return;

		const draft = messages.concat({
			id: Date.now(),
			type: "user",
			text: value,
		});

		setMessages(draft);

		event.target.reset();
	};

	const content = (
		<div className="flex flex-col max-w-lg w-full rounded-md">
			<div
				className={cn(
					"bg-secondary-light px-8 py-3 rounded-lg mx-6 text-white",
					"flex justify-between items-center",
				)}
			>
				<Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
				<p className="text-lg">Ronald Marino</p>
			</div>
			<div
				ref={containerRef}
				className="flex flex-col gap-2 overflow-y-auto px-4 pl-6 py-2"
			>
				{messages.map((message) => (
					<Message key={message.id} type={message.type}>
						{message.text}
					</Message>
				))}
			</div>
			<form className="flex items-center px-6" onSubmit={handleSubmit}>
				<CustomInput
					type="text"
					name="message"
					placeholder="mensaje..."
					endContent={
						<>
							<button type="submit">
								<RiArrowUpCircleLine className="w-7 h-7 text-primary" />
							</button>
						</>
					}
				/>
			</form>
		</div>
	);

	if (isCollapsable) {
		return <Collapse>{content}</Collapse>;
	}

	return content;
}

export default Chat;
