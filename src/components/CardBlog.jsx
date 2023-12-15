import React from "react";
import { Card, CardHeader, Image } from "@nextui-org/react";

const cardData = [
  {
    id: 1,
    title: "Lorem 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nesciunt, earum consectetur exercitationem placeat possimus non laborum illum accusamus odit itaque vitae tenetur harum architecto accusantium facilis molestiae labore!",
    imageUrl: "https://images.ecestaticos.com/QbL6ro7ikJbVV9a66qyu4q_AjFY=/0x70:1716x1040/1440x810/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8db%2F8b6%2Faa5%2F8db8b6aa54b585253e15f79a68447aeb.jpg",
  },
  {
    id: 2,
    title: "Lorem 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nesciunt, earum consectetur exercitationem placeat possimus non laborum illum accusamus odit itaque vitae tenetur harum architecto accusantium facilis molestiae labore!",
    imageUrl: "https://images.ecestaticos.com/QbL6ro7ikJbVV9a66qyu4q_AjFY=/0x70:1716x1040/1440x810/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8db%2F8b6%2Faa5%2F8db8b6aa54b585253e15f79a68447aeb.jpg",
  },
  {
    id: 3,
    title: "Lorem 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nesciunt, earum consectetur exercitationem placeat possimus non laborum illum accusamus odit itaque vitae tenetur harum architecto accusantium facilis molestiae labore!",
    imageUrl: "https://images.ecestaticos.com/QbL6ro7ikJbVV9a66qyu4q_AjFY=/0x70:1716x1040/1440x810/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8db%2F8b6%2Faa5%2F8db8b6aa54b585253e15f79a68447aeb.jpg",
  },
  {
    id: 4,
    title: "Lorem 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nesciunt, earum consectetur exercitationem placeat possimus non laborum illum accusamus odit itaque vitae tenetur harum architecto accusantium facilis molestiae labore!",
    imageUrl: "https://images.ecestaticos.com/QbL6ro7ikJbVV9a66qyu4q_AjFY=/0x70:1716x1040/1440x810/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8db%2F8b6%2Faa5%2F8db8b6aa54b585253e15f79a68447aeb.jpg",
  },
  {
    id: 5,
    title: "Lorem 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nesciunt, earum consectetur exercitationem placeat possimus non laborum illum accusamus odit itaque vitae tenetur harum architecto accusantium facilis molestiae labore!",
    imageUrl: "https://images.ecestaticos.com/QbL6ro7ikJbVV9a66qyu4q_AjFY=/0x70:1716x1040/1440x810/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8db%2F8b6%2Faa5%2F8db8b6aa54b585253e15f79a68447aeb.jpg",
  },
  {
    id: 6,
    title: "Lorem 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nesciunt, earum consectetur exercitationem placeat possimus non laborum illum accusamus odit itaque vitae tenetur harum architecto accusantium facilis molestiae labore!",
    imageUrl: "https://images.ecestaticos.com/QbL6ro7ikJbVV9a66qyu4q_AjFY=/0x70:1716x1040/1440x810/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8db%2F8b6%2Faa5%2F8db8b6aa54b585253e15f79a68447aeb.jpg",
  },
];

export default function CardBlog() {
  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8 mt-10">
      {cardData.map((card) => (
        <Card
          key={card.id}
          className="col-span-12 sm:col-span-4 h-[305px] mr-4"
        >
          <CardHeader className="absolute z-10 top-44 flex-col !items-start bg-[#9CD4EE] mb-4 p-3 rounded-lg h-[140px]">
            <p className="text-tiny text-black uppercase font-bold color-[000000]">
              {card.title}
            </p>
            <h6 className="text-black font-medium text-xs overflow-auto">
              {card.description}
            </h6>
          </CardHeader>
          <Image
            removeWrapper
            alt={`Card background ${card.id}`}
            className="z-0 w-full h-full object-cover"
            src={card.imageUrl}
          />
        </Card>
      ))}
    </div>
  );
}
