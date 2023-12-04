import React from "react";
import { Card, CardFooter, Button } from "@nextui-org/react";
import data from "./assets/treatmentsList.json";

const Treatments = () => {
  return (
<content className="flex flex-wrap gap-4 p-4 h-[34rem] mx-auto md:w-[764px] w-[350px] md:mb-[0px] mb-[600px]">
  {data.results.map((el, index) => (
    <Card
      key={index}
      isFooterBlurred
      radius="sm"
      className="border-none flex-wrap min-w-[200px] min-h-[200px] flex-1 transition-transform transform hover:scale-105"
      style={{ backgroundImage: `url(${el.img})`, backgroundSize: 'cover', }}
    >

      <CardFooter className="bg-[#ACD9EC] bg-opacity-75 border-white/20 border-1 overflow-hidden py-6 absolute before:rounded-xl rounded-small bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <Button
          className="text-2xl font-bold text-[#225f7C] border-none bg-transparent"
          variant="flat"
          color="default"
          radius="sm"
          size="large"
        >
          {el.serviceName}
        </Button>
      </CardFooter>
    </Card>
  ))}
</content>
  );
};

export default Treatments;