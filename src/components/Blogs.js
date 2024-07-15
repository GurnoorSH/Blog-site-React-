import React, { useContext } from "react";
import Spinner from "./Spinner";
import { AppContext } from "../context/AppContext";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);
  console.log(posts , "innnnn blogggggggggssss")
  return (
    <div>
      {" "}
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p> No Posts Found </p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p> {post.title} </p>
            <p>
              {" "}
              by <span> on </span>
              <span> {post.category} </span>{" "}
            </p>
            <p> Posted on {post.date} </p>
            <p>  {post.content} </p>
            <div> 
              {
                posts.tags.map ((tag , index ) => {
                  return <span key={index}> {`#${tag}`} </span>
                })
              } </div> 
          </div>
        ))
      )}{" "}
    </div>
  );
};

export default Blogs;
