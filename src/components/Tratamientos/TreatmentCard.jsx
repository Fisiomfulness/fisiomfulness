import { Link, Card, CardFooter, Image, Button } from "@nextui-org/react";

const TreatmentCard = ({ treat }) => {
  return (
    <Card
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
        <Link
          className="text-2xl font-bold text-[#225f7C] hover:text-[#225f7C]"
          href="#"
        >
          {treat.serviceName}
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TreatmentCard;
