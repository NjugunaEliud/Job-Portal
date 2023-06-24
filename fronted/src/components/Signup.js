import {useState} from 'react'
import { useSignup } from '../hook/useSignUp'
const Signup = () => {
    const[email ,setEmail]= useState('')
    const[password ,setPassword]= useState('')
    const{signUp, isLoading ,error}= useSignup()
    const handleSubmit = async (e)=>{
        e.preventDefault()
       await signUp(email ,password)
    }
    return (
        <form onSubmit={handleSubmit} className="for">
             <h3>Sign Up</h3>
      
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
  <button disabled={isLoading} class="btn btn-danger gradient-light btn-center m-3">Sign up</button>
</div>

{error && <div className='error'>{error}</div>}

        </form>
      );
}
 
export default Signup;