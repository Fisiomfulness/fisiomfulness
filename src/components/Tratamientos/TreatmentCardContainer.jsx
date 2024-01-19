import TreatmentCard from "./TreatmentCard";
import React from 'react';

const TreatmentCardContainer = ({ treats }) => {
  return (
    <div className="container mt-4">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 justify-center">
        {treats.length ? (
          treats?.map((treat, index) => (
            <div key={treat.id} className={`mb-4 ${index < 3 ? 'md:col-span-2' : 'md:col-span-3'}`}>
              <TreatmentCard treat={treat} />
            </div>
          ))
        ) : (
          <h2>No hemos encontrado resultados.</h2>
        )}
      </div>
    </div>
  );
};

export default TreatmentCardContainer;