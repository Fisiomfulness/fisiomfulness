import data from "@/components/productos/data/productos.json";
// import Image from "next/image";
import Nav from "@/components/Nav";

import ProductClient from "@/components/productos/ProductClient";

const ProductosPage = () => {
  return (
    <>
      <Nav />
      <ProductClient data={data.productos} />
    </>
  );
};

export default ProductosPage;
