import React from "react";
import { Card } from "react-bootstrap";
import "../styles.css";

const Post = ({ posts, loading }) => {
  if (loading) {
    return <h2>loading...</h2>;
  }

  return (
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <Card
          body
          inverse
          style={{ backgroundColor: "#FFA07A", borderColor: "#333" }}
        >
          <Card.Body>
            <li key={post.id} className="block-example border border-dark">
              <h4>{post.episode}</h4>
              <h5>{post.name}</h5>
              {post.air_date}
            </li>
          </Card.Body>
        </Card>
      ))}
    </ul>
  );
};

export default Post;
