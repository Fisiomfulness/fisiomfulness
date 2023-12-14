import CreateBlog from '@/components/CreateBlog';
import ImageBlog from '@/components/ImageBlog';
import React from 'react';


const Page = () => {
    return (
        <div style={{ display: 'flex', height: '140vh' }}>
            <div style={{ flex: 1 }} className=' flex-auto dm:ml-10 lg:ml-10 sm:ml-3 '>
                <ImageBlog />
            </div>

            <div style={{ flex: 6 }}>
                <CreateBlog/>
                
            </div>
        </div>
    );
};

export default Page;
