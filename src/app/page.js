"use client";

import TabHome from "@/components/Home/TabHome";
import {especialidadesMedicas, ciudadesPeru} from "@/components/Home/utils"

export default function Home() {
  return (
    <div className="background-image relative">
      <div className="absolute sm:top-1/4 left-0 w-full flex justify-center  top-[50px]">
        <TabHome especialidadesMedicas={especialidadesMedicas} ciudadesPeru={ciudadesPeru}/>
      </div>
    </div>
  );
}