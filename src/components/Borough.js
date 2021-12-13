import React from "react"
import { Link } from "react-router-dom"

const Borough = ({ borough }) => {
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
        <Link to={`/${borough.borough}`}>
            <h1 className="AllBoroughs">{borough.borough}</h1>
        </Link>
    </div>
)

}


export default Borough