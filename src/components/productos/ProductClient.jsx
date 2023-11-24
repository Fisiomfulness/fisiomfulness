"use client";

import { useState } from "react";
import { ProductCard } from "./Card";
import { SearchProd } from "./SearchProd";

const ProductClient = ({ data }) => {
  const [prodFiltrados, setProdFiltrados] = useState([]);

  return (
    <main className="flex flex-col min-h-screen items-center gap-10 mt-5">
      <div className="flex flex-col sm:flex-row w-screen items-center justify-center gap-5">
        <SearchProd prods={data} setProdFiltrados={setProdFiltrados} />
      </div>
      <div className="flex flex-wrap min-w-full min-h-full gap-4 justify-center pl-5 pr-5">
        {prodFiltrados.length ? (
          prodFiltrados?.map((prod) => (
            <ProductCard key={prod.id} prod={prod} />
          ))
        ) : (
          <h2>No hemos encontrado resultados.</h2>
        )}
      </div>
    </main>
  );
};

export default ProductClient;
