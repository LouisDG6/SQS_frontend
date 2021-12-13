import React from "react"
import {Link, useParams} from "react-router-dom"
import Space from "../components/Space"
import SingleSpace from "./SingleSpace"


const SingleBorough = ({spaces, props}) => {
    // for each space in the array, render each space component
    const params = useParams()
    const id = params.borough

    const borough = spaces?.filter((s) => s.borough === id)
    if(!spaces){
        return <h1>loading</h1>
    } else {
        return <> 
    
    {borough?.map((space => <Space space={space}/>))}
    
   </>
} 
}

export default SingleBorough;