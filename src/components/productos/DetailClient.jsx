import Detail from "./Detail";

const DetailClient = async ({ prod }) => {
  return (
    <div className="flex w-full min-h-screen">
      <Detail />
      <aside className="w-[30%] min-h-full bg-slate-600">aside</aside>
    </div>
  );
};

export default DetailClient;
