import React from "react";
import { Link } from "react-router-dom";

const Space = ({ space }) => {
  ///////////////////////////
  // Style Objects
  ///////////////////////////
  const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  };

  return (
    <div style={div}>
      <Link to={`/space/${space.id}`}>
        <h1>{space.borough}</h1>
      </Link>
      <h2>{space.name}</h2>
      <h2>{space.section}</h2>
      <h2>{space.description}</h2>
      <h2>{space.address}</h2>
    </div>
  );
};

export default Space;
