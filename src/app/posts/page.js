import React from 'react';

export const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = res.json();
    return data
}

const page = async () => {
    const posts = await fetchPosts();
    console.log(posts);
    
    return (
        <div className='grid grid-cols-4 gap-6 py-10'>
            {
                posts?.map(post => {
                    return <div key={post.id} className='p-5 bg-gray-300 rounded-2xl'>
                        <h4>{post.id}</h4>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                })
            }
        </div>
    );
};

export default page;