import { ProductCard } from "./ProductCard";

const ProductCardContainer = ({ prods }) => {
  return (
    <div className="flex flex-wrap min-w-full min-h-full gap-4 justify-center pl-5 pr-5">
      {prods.length ? (
        prods?.map((prod) => <ProductCard key={prod.id} prod={prod} />)
      ) : (
        <h2>No hemos encontrado resultados.</h2>
      )}
    </div>
  );
};

export default ProductCardContainer;
