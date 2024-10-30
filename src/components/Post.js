import React, { useState, useEffect } from "react";
import sanityClient from "../client"; 
import { Link } from "react-router-dom";

const Post = () => {
  const [postData, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          }
        }`
      )
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error: ", error.message);
        setError(error.message); // Set error message
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen p-12 bg-purple-100">
      <section className="container mx-auto">
        <h1 className="flex justify-center text-5xl cursive">BlogPost Page</h1>
        <h2 className="flex justify-center mb-12 text-lg text-gray-600">
          Welcome to my Blog Page
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <p className="text-lg text-gray-600">Loading posts...</p>
            </div>
          ) : error ? ( // Show error if exists
            <div className="flex items-center justify-center h-64">
              <p className="text-lg text-red-600">Error: {error}</p>
            </div>
          ) : postData.length > 0 ? (
            postData.map((post) => (
              <article key={post.slug.current}>
                <Link to={`/post/${post.slug.current}`}>
                  <span className="relative block h-64 leading-snug bg-white border-l-8 rounded shadow border-lime-400">
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="absolute object-cover w-full h-full rounded-r"
                    />
                    <span className="relative flex items-end justify-end block h-full pb-4 pr-4">
                      <h3 className="px-3 py-4 text-lg font-bold text-gray-800 text-red-100 bg-red-700 bg-opacity-75 rounded">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))
          ) : (
            <div className="flex items-center justify-center h-64">
              <p className="text-lg text-gray-600">No posts found</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Post;
