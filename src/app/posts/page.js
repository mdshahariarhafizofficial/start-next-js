import Link from 'next/link';
import React from 'react';

export const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = res.json();
    return data
}

const page = async () => {
    const posts = await fetchPosts();
    
    return (
        <div className='grid grid-cols-4 gap-6 p-10'>
            {
                posts?.map(post => {
                    return <div key={post.id} className='p-5 bg-gray-300 rounded-2xl space-y-6'>
                        <h4>{post.id}</h4>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <Link href={`/posts/${post.id}`} className=' bg-green-400 px-3 py-2'>Read More...</Link>
                    </div>
                })
            }
        </div>
    );
};

export default page;