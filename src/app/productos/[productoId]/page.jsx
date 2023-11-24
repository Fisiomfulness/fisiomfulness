import DetailClient from "@/components/productos/DetailClient";
import data from "@/components/productos/data/productos.json";

const ProductDetail = async ({ params }) => {
  const traerProducto = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return data.productos.find((e) => e.id === params.productoId);
  };

  const producto = await traerProducto();

  return <DetailClient prod={producto} />;
};

export default ProductDetail;
