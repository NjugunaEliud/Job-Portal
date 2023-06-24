import {useState} from 'react'
// import { Navigate } from 'react';
import {useLogin} from '../hook/useLogin'

const Login = () => {
    const[email ,setEmail]= useState('')
    const[password, setPassword]= useState('')
    const{login, error,isLoading}= useLogin()
    
    const handleSubmit = async (e)=>{
        e.preventDefault()
       await login(email,password)


      

       
    }
    return (
        <form onSubmit={handleSubmit} className="for">
             <h3>Login</h3>
      
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


        </form>

        

      );
}
 
export default Login;