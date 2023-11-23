import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BiSolidWebcam } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaUserDoctor } from "react-icons/fa6";

import {
  Tabs,
  Tab,
  SelectItem,
  Button,
  Autocomplete,
  AutocompleteItem,
  Card,
  CardBody,
} from "@nextui-org/react";
import { especialidadesMedicas, ciudadesPeru } from "./utils";

export default function TabHome() {
  const [selected, setSelected] = useState("domiciliaria");

  return (
    <div className=" flex items-center ">
      <Card className="max-w-full  md:w-[900px] md:h-[150px] sm:w-[500px] sm:h-[260px] h-[300px]">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            color="primary"
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab
              key="domiciliaria"
              title={
                <div className="flex relative items-center space-x-2">
                  <AiFillHome className="" />
                  <span>Cita Domiciliaria</span>
                </div>
              }
              className="h-full"
            >
              <form className="flex md:flex-row h-full flex-col justify-center items-center gap-4">
                <div className="flex md:flex-row flex-col flex-1">
                  <Autocomplete
                    startsWidth={<AiFillHome />}
                    label="Seleccione:"
                    placeholder="Especialidad"
                    className="max-w-xs md:mr-2 mr-0"
                    defaultItems={especialidadesMedicas}
                    listboxProps={{
                      color: "primary",
                    }}
                  >
                    {(item) => (
                      <AutocompleteItem key={item.value}>
                        <div className="flex items-center gap-2">
                          <FaUserDoctor alt={item.label} className="text-action-blue"/>
                          <span>{item.label}</span>
                        </div>
                      </AutocompleteItem>
                    )}
                  </Autocomplete>
                  <Autocomplete
                    label="Seleccione:"
                    placeholder="Ciudad"
                    className="max-w-xs md:mt-0 mt-2"
                    defaultItems={ciudadesPeru}
                    listboxProps={{
                      color: "primary",
                    }}
                  >
                    {(item) => (
                      <AutocompleteItem key={item.value}>
                        <div className="flex items-center gap-2">
                          <CiLocationOn alt={item.label} className="text-action-blue"  />
                          <span>{item.label}</span>
                        </div>
                      </AutocompleteItem>
                    )}
                  </Autocomplete>
                </div>
                <div className="flex basis-1/5">
                  <Button fullWidth color="primary">
                    Buscar
                  </Button>
                </div>
              </form>
            </Tab>
            <Tab
              key="online"
              title={
                <div className="flex relative items-center space-x-2">
                  <BiSolidWebcam className="" />
                  <span>Cita Online</span>
                </div>
              }
              className="h-full"
            >
              <form className="flex md:flex-row flex-col h-full justify-between  items-center gap-4">
                <div className="flex mt-10 md:mt-0">
                  <Autocomplete
                    className="max-w-xs"
                    defaultItems={especialidadesMedicas}
                    label="Seleccione:"
                    placeholder="Especialidad"
                  >
                    {(especialidadesMedicas) => (
                      <SelectItem key={especialidadesMedicas.value}>
                        {especialidadesMedicas.label}
                      </SelectItem>
                    )}
                  </Autocomplete>
                </div>

                <div className="flex basis-1/5 ">
                  <Button fullWidth color="primary" className="">
                    Buscar
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}
