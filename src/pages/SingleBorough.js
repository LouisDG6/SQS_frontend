import React from "react"
import {Link, useParams} from "react-router-dom"
import Space from "../components/Space"
import SingleSpace from "./SingleSpace"

const SingleBorough = (props) => {
    // for each space in the array, render each space component
    
    return <> 
    
    {props.spaces.filter((spaces => spaces.borough === borough)

        
        
    )} </>
} 

export default SingleBorough;