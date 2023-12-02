"use client";

import { cn } from "@/features/ui";
import { Input, forwardRef } from "@nextui-org/react";
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
		text: "Hello ",
	},
	{
		id: 2,
		type: "bot",
		text: (
			<p
				className="cursor-pointer text-yellow-400 font-bold"
				onClick={() => alert("This is a ReactNode (╯°□°）╯︵ ┻━┻")}
			>
				This is a ReactNode
			</p>
		),
	},
	{
		id: 3,
		type: "user",
		text: "Hi",
	},
];

function Chat({ isCollapsable = false }) {
	const containerRef = useRef(null);

	const [messages, setMessages] = useState(defaultValue);

	useLayoutEffect(() => {
		if (!containerRef.current) return;

		containerRef.current.scrollTop = containerRef.current.scrollHeight;
	}, [messages, containerRef]);

	const handleSubmit = (event) => {
		event.preventDefault();
		const value = event.target.message;

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
		<div className="flex flex-col gap-4 max-w-lg m-auto p-4 rounded-md bg-red-100">
			<div
				ref={containerRef}
				className="flex flex-col gap-2 h-[300px] overflow-y-auto no-scrollbar"
			>
				{messages.map((message) => (
					<div
						key={message.id}
						className={`rounded-lg px-3 py-0.5 max-w-[80%]
              ${
								message.type === "bot"
									? "bg-slate-500 text-left self-start rounded-bl-none"
									: "bg-blue-500 text-right self-end rounded-br-none"
							}
            `}
					>
						{message.text}
					</div>
				))}
			</div>
			<form className="flex items-center" onSubmit={handleSubmit}>
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
