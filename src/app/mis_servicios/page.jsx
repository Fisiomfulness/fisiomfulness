import { CustomTable, CustomTableHeader } from "@/features/ui";

const items = new Array(20).fill().map((_, index) => ({
  key: index + 1,
  name: `Dra. María Mercedez Guerrero ${index + 1}`,
  price: 100,
  descripcion: "000-000-000".replace(/0/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & ((15 - 6) >> (c / 4)))
    ).toString(16)
  ),
}));

function CustomTableBody({}) {
  return (
    <tbody className="whitespace-nowrap text-center">
      {items.map((item) => (
        <tr
          key={item.key}
          className="odd:bg-[#D1E7F1] even:bg-[#E7F0F4] border-t-4 border-white"
        >
          <td className="px-8 py-3 font-medium flex flex-row items-center gap-0 min-h-fit">
            <p className="w-full px-8 pr-4">{item.name}</p>
          </td>
          <td className="px-8 py-3">{item.descripcion}</td>
          <td className="px-12 py-3">$ {item.price}</td>
          <td className="px-12 py-3">botones</td>
        </tr>
      ))}
    </tbody>
  );
}

function MisServiciosPage() {
  return (
    <CustomTable>
      <CustomTableHeader headers={["Servicio", "Descripción", "Precio", ""]} />
      <CustomTableBody />
    </CustomTable>
  );
}
export default MisServiciosPage;
