"use client";

import TreatmentCardContainer from "./TreatmentCardContainer";

const TreatmentClient = ({data}) => {
    return (
    <main className="flex flex-col min-h-screen items-center gap-10 mt-5 pb-10 justify-start">
      <TreatmentCardContainer  treats = {data}/>
    </main>
  );
};

export default TreatmentClient;