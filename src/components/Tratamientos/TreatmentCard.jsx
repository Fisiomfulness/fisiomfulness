
import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";


const TreatmentCard = ({ treat }) => {
  return (
    <Card
      key={treat.id}
      isFooterBlurred
      radius="sm"
      className="border-none min-w-[260px] h-[280px]"
    >
      <Image
        removeWrapper
        alt="Treatments available"
        src={treat.imagen}
        className="w-full h-full object-cover"
      />
      <CardFooter className="bg-[#ACD9EC] bg-opacity-75 overflow-hidden py-6 absolute  bottom-0 w-full z-10">
        <Button
          className="text-2xl font-bold text-[#225f7C] border-none bg-transparent"
          variant="flat"
          color="default"
          radius="sm"
          size="large"
        >
          {treat.serviceName}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TreatmentCard;
