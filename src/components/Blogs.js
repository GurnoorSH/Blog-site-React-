import React, { useContext } from "react";
import Spinner from "./Spinner";
import { AppContext } from "../context/AppContext";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);
  console.log(posts, "innnnn blogggggggggssss");

  // Ensure posts is an array by default
  const safePosts = Array.isArray(posts) ? posts : [];

  return (
    <div className="w-11/12 max-w-[670px] h-screen py-3 flex flex-col gap-y-7 mt-10 pb-[36rem] pt-[33rem] mb-10 justify-center items-center">
      {loading ? (
        <Spinner />
      ) : safePosts.length === 0 ? (
        <div>
          <p>No Posts Found. Problem In API</p>
        </div>
      ) : (
        safePosts.map((post) => {
          // Add logging to check each post
          console.log(post, "current post");

          // Ensure post.tags is an array by default
          const safeTags = Array.isArray(post.tags) ? post.tags : [];

          return (
            <div key={post.id}>
              <p className="font-bold text-lg">{post.title}</p>
              <p className="text-sm">
                by <span className="italic">{post.author}</span> on{" "}
                <span className="underline font-bold">{post.category}</span>
              </p>
              <p className="text-sm mt-2">Posted on {post.date}</p>
              <p className="text-md mt-[10px]">{post.content}</p>
              <div className="flex gap-x-3">
                {safeTags.map((tag, index) => (
                  <span className="text-blue-700 underline font-bold text-xs mt-2" key={index}>
                    {`#${tag}`}
                  </span>
                ))}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Blogs;
