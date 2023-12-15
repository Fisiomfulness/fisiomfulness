import React from 'react';
import CardBlog from '@/components/CardBlog';
import BlogList from '@/components/BlogList';

const Page = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-start items-start mb-5 md:ml-20 ">
      <CardBlog className="lg:w-1/2" />
      <BlogList className="lg:w-full " /> 
    </div>
  );
};

export default Page;