import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import './Box1.css'
import Spinner from "./Spinner";
const API_KEY =process.env.REACT_APP_GIPHY_API_KEY;

const Box1 =(()=>{
    const [tag,setTag]=useState('messi');
    const [gif,setgif]=useState('');
   const [loading,setloading]=useState('false');
    async function fetchdata (){
        setloading(true)
        const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const response=await axios.get(url);
       
        const imageSource = response.data.data.images.downsized_large.url;
        //console.log(imageSource);
        setgif(imageSource);
        setloading(false);

    }
    useEffect( ()=>{
            fetchdata();
        } ,[] )
    function clickhandler(){
        fetchdata();
       
    }
    
    return (
    <div>
        <h1>GIF Generator</h1>
        {
            loading?(<Spinner/>):( <img   src={gif}  className="sss"   />)
        }
       <div className="new">
        <input  className="alok" type="search" placeholder="saerch a new GIF"  onChange={(event)=>setTag(event.target.value)} value={tag}></input>
        
        <button className="alok1" onClick={clickhandler}>
            search
        </button>
        </div>
       
        </div>)
})
export default Box1
