import { atom } from "jotai";

const products = new Array(3).fill().map((_, index) => ({
	key: index + 1,
	name: `Producto ${index + 1}`,
	price: 100,
	description: `
    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
    labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.
    Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum
    Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident.
    Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
    occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat
    officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in
    Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non
    excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut
    ea consectetur et est culpa et culpa duis.
  `,
	img: "/prod1Prueba.png",
}));

export const cartAtom = atom({
	cart: products,
	total: 0,
	quantity: 0,
});
