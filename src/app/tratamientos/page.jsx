
import TreatmentClient from "@/components/Tratamientos/TreatmentClient";

import data from "@/components/Tratamientos/data/treatmentsList.json";

const TreatmentsPage = () => {
  return (
    <div className="w-full min-h-screen mb-10 flex flex-row gap-5 pt-6 md:pr-5 md:pl-5 justify-center">
      <TreatmentClient data={data.treatments} />
    </div>
  );
};

export default TreatmentsPage;
