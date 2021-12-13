import React from "react"
import {Link, useParams} from "react-router-dom"
import Space from "../components/Space"

const SingleSpace = ({spaces, props, edit, deleteSqs}) => {
    // get the params from the url
    const params = useParams()
    const id = parseInt(params.id)

    // find the particular post the user wants to see based on the param
    const space = spaces?.find((s) => s.id === id)
    console.log(space)

    ////////////////////
    // Style Object
    /////////////////////
    const div = {
        textAlign: "center",
        border: "3px solid green",
        width: "80%",
        margin: "30px auto"
    }

    if(!spaces) {
        return <h1>loading</h1>
    } else {
        return <div>
        <Space space={space}/>
        <button onClick={() =>edit(space)}>Edit</button>
        <button onClick={() =>deleteSqs(space)}>Delete</button>
        </div>
    }
   
}

export default SingleSpace;