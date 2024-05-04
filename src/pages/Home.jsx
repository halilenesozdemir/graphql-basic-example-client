import React from "react";
import { GET_POSTS } from "../graphql/query";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_POST } from "../graphql/mutation";

function Home() {
  const { loading, error, data } = useQuery(GET_POSTS);
  const [createPost, { loadingg, errorr, dataa }] = useMutation(CREATE_POST);

  const [post, setPost] = React.useState({
    title: "",
    description: "",
    url: "",
  });

  console.log("data", data);

  function onChange(e) {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={post.title}
        onChange={onChange}
      />
      <label htmlFor="description">Description</label>
      <textarea
        type="text"
        name="description"
        value={post.description}
        onChange={onChange}
      />
      <label htmlFor="url">URL</label>
      <input
        type="text"
        name="url"
        value={post.url}
        onChange={onChange}
      />
      <button onClick={() => createPost({ variables: { body: post } })}>Create post</button>
      {data?.getPosts.map((dt, i) => (
        <div
          onClick={() => (window.location = `/post/${dt.id}`)}
          key={i}>
          <strong>{dt.title}</strong>
          <p>{dt.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
