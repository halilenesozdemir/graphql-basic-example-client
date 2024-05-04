import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_POST } from "../graphql/query";

function Detail() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_POST, {
    variables: { postId: id },
  });

  return <div>{data?.getPost.url}</div>;
}

export default Detail;
