"use client";

import { useState } from "react";
import { SearchProd } from "./SearchProd";
import ProductCardContainer from "./ProductCardContainer";

const ProductClient = ({ data }) => {
  const [prodFiltrados, setProdFiltrados] = useState([...data]);

  return (
    <main className="flex flex-col min-h-screen items-center gap-10 mt-5 pb-10">
      <SearchProd prods={data} setProdFiltrados={setProdFiltrados} />
      <ProductCardContainer prods={prodFiltrados} />
    </main>
  );
};

export default ProductClient;
