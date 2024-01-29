import TreatmentCardContainer from "@/components/Tratamientos/TreatmentCardContainer";
import data from "@/components/Tratamientos/data/treatmentsList.json";

const TreatmentsPage = () => {
  return (
    <div className="w-full min-h-screen mb-10 flex flex-row gap-5 pt-6 md:pr-5 md:pl-5 justify-center">
      <div className="flex flex-col min-h-screen items-center gap-10 mt-5 pb-10 justify-start">
        <TreatmentCardContainer treats={data.treatments} />
      </div>
    </div>
  );
};

export default TreatmentsPage;
