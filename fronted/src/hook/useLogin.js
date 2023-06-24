import { useState } from "react";
import{useAuthContext} from './useAuthContext'

export const useLogin = ()=>{
    const[error, setError]= useState(null)
    const[isLoading, setIsloading]= useState(null)
    const {dispatch} = useAuthContext()

    const login = async (email , password)=>{
        setError(null)
        setIsloading(true)

        const response = await fetch ('/api/user/login',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email, password})
        })
        const json=await response.json()

        if(!response.ok){
            setError(true)
            setIsloading(false)

        }
        if(response.ok){
            localStorage.setItem('user',JSON.stringify(json))

            //update auth context
            dispatch({type : 'LOGIN', payload:json})

            setIsloading(false)
            
        }
    }
    return{login , error , isLoading}

}


