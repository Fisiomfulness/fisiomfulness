"use client";

import TabHome from "@/components/Home/TabHome";
import { especialidadesMedicas, ciudadesPeru } from "@/components/Home/utils";

export default function Home() {
  return (
    <div className="bg-[url('/Home.jpg')] bg-no-repeat bg-cover h-[90vh] w-full">
      <div className="flex justify-center items-center h-full">
        <TabHome
          especialidadesMedicas={especialidadesMedicas}
          ciudadesPeru={ciudadesPeru}
        />
      </div>
    </div>
  );
}
