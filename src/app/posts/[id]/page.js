import React from "react";

export const fetchSinglePost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = res.json();
  return data;
};

const page = async ({ params }) => {
  const p = await params;

  const post = await fetchSinglePost(p.id);
  
  return (
    <div className="p-5 bg-gray-300 rounded-2xl space-y-6 mx-40">
      <h4>{post.id}</h4>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default page;
