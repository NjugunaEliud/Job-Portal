import { Link, useParams} from 'react-router-dom';
import {useLogin} from '../hook/useLogin'
import {useState} from 'react'
import { useAuthContext } from '../hook/useAuthContext';

import UseFetch from "../components/useFetch";

const Details = () => {
    const[email ,setEmail]= useState('')
    const[password, setPassword]= useState('')
    const{login, error,isLoading}= useLogin()
    const{user}=useAuthContext()
    
    const handleSubmit = async (e)=>{
        e.preventDefault()
       await login(email,password)   
    }
  const { _id:jobA } = useParams();
  const { data: job } = UseFetch(`/api/jobs/${jobA}`);

  if (!job) {
    return <p>Loading...</p>;
  }
  

  return (
    <div className='d'>
        <div className="details">
                
                
                        <h4>{job.title}</h4>
                    
                    <p>{job.location}</p>
                    <p>
                        <strong>Minimum requirements: </strong>{job.requirements}
                    </p>
                    
                    <p>
                        <strong>Salary Ksh: </strong>{job.salary}
                        
                    </p>
                    <p>
                        <strong>Description: </strong>{job.description}
                        
                    </p>
                    <p>
                        <strong>Posted:</strong> {new Date(job.createdAt).toLocaleString()}
                    </p>
                    <div class="text-center">
                    <Link to='/application'>{user && <button class="btn btn-danger gradient-light btn-center m-3">Apply</button>}</Link>
                    </div>
      
      
      </div>
      

     {!user && <form onSubmit={handleSubmit} className="afor">
            
             <h4>Login To apply for  <h4>{job.title}</h4> </h4>
      
      <label>Email address:</label>
      <input 
      className='i'
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
      className='i'
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />
        <div class="text-center">
        <button disabled={isLoading}    class="btn btn-danger gradient-light btn-center m-3">Login</button>
        </div>
        {error && <div className='error'>{error}</div>}


        </form>}
    </div>
   
  );
};

export default Details;
