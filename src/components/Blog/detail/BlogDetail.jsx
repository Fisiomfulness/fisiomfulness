import React from "react";
import CreateBlog from "@/components/Blog/detail/CreateBlog";
import ImageBlog from "@/components/Blog/detail/ImageBlog";
import { Image } from "@nextui-org/react";

function BlogDetail({ data }) {
  return (
    <div className="flex w-full my-8 md:my-10 flex-col md:flex-row gap-y-5 md:gap-y-0">
      <div className="w-full md:w-[380px] md:flex">
        <ImageBlog dataImage={data.imageUrl} />
      </div>
      <CreateBlog data={data} />
    </div>
  );
}

export default BlogDetail;
