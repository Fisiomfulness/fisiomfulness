import React from "react";
import {ScrollShadow} from "@nextui-org/react";
import CardCreateBlog from "./CardCreateBlog";

  
export default function ScrollBlog() {
  return (
    <ScrollShadow hideScrollBar className="w-[90%] h-[38%] ">
   <CardCreateBlog/>
   <CardCreateBlog/>
   <CardCreateBlog/>
   <CardCreateBlog/>
   <CardCreateBlog/>
   <CardCreateBlog/>
   <CardCreateBlog/>
   <CardCreateBlog/>
    </ScrollShadow>
  );
}
