"use client";

import { Chat } from "@/features/chat";
import { cn } from "@/features/ui";
import { Avatar } from "@nextui-org/react";

export default function MisProductosPage() {
	return (
		<div className="flex flex-row p-4 max-h-[520px] max-w-fit mx-auto">
			<div className="flex flex-col overflow-y-auto min-w-md gap-2">
				{Array(10)
					.fill(0)
					.map((_, i) => (
						<div
							key={i}
							className={cn(
								"bg-primary-light px-6 py-2 rounded-lg text-black w-64 mr-4",
								"flex items-center",
								2 === i && "bg-secondary-light text-white",
							)}
						>
							<Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
							<p className="text-lg mx-auto">Ronald Marino</p>
						</div>
					))}
			</div>
			<Chat />
		</div>
	);
}
