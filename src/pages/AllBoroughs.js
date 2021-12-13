import React from "react"
import Borough from "../components/Borough"
import Carousel from "../components/Carousel"
import CarouselData from "../components/CarouselData"



const AllSpaces = (props) => {
    // for each space in the array, render a space component

    
    
    return <>
    <Carousel carouselImgs={CarouselData}/>
    { props.borough.map((borough) => {
        return <div> 
        <Borough key={borough.id} borough={borough} />
        </div>
         
    
    })} </>
}

export default AllSpaces;