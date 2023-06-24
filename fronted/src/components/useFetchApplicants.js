import{useEffect}  from "react"
import { useState } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    useEffect(()=>{
    const fetchApplicants= async ()=>{
     const applicants = await fetch(url)

     const json = await applicants.json()

     if(applicants.ok){
        setData(json);
        
     }   
    }
    fetchApplicants()
    },[url])

    return{data}

}
 
export default useFetch;
