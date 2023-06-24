
import{useState} from 'react'
import{ useAuthContext }from '../hook/useAuthContext'
const Create = () => {
    const[title, setTitle]= useState('');
    const[company, setCompany]= useState('');
    const[location, setLocation]= useState('');
    const[salary, setSalary]= useState('');
    const[requirements, setRequirements]= useState('');
    const[description, setDescription]= useState('');
    const[error, setError]= useState('');
    const{user}=useAuthContext()


    const handleSubmit=async (e)=>{
        e.preventDefault()

        if(!user){
          setError('You must be loged in')
          return
        }
        const job ={title,requirements,location,description,salary,company}

        const response = await fetch('/api/jobs',{
            method:"POST",
            body:JSON.stringify(job),
            headers:{'Content-Type':"application/json",
            'Authorization': `Bearer ${user.token}`
          
          }
            
        })

        const json= await response.json()

        if(!response.ok){
            setError(json.error)
            console.log("Could not add the new job")

        }

        if(response.ok){
            setError(null)
            setCompany('')
            setDescription('')
            setLocation('')
            setRequirements('')
            setSalary('')
            setTitle('')
            console.log('new Workout Added')
        }

        




    }



    return ( 
            
    <div className="job">
       <form className="for"  onSubmit={handleSubmit}> 
    <h4>Upload new Job Vacancy</h4>

        <label>job Title:</label>
        <input 
        className='i'
        type="text" 
        value={title}
        onChange={(e)=>setTitle(e.target.value)}

       />

       <label>Company:</label>
       <input 
       className='i'
        type="text" 
        value={company}
        onChange={(e)=>setCompany(e.target.value)}

      />
       <label>Location:</label>
       <input 
        className='i'
        type="text" 
        value={location}
        onChange={(e)=>setLocation(e.target.value)}

      />
       <label>Requirements:</label>
       <input 
        className='i'
        type="text"
        value={requirements}
        onChange={(e)=>setRequirements(e.target.value)} 

      />
       <label>Salary:</label>
       <input 
       className='i'
         type="number" 
         value={salary}
        onChange={(e)=>setSalary(e.target.value)}

      />
       <label>Job Description:</label>
       <input 
       className='i'
        type="text" 
        value={description}
        onChange={(e)=>setDescription(e.target.value)}

      />
      
      <div class="text-center">
  <button href="/" class="btn btn-danger gradient-light btn-center m-3">Upload</button>
</div>
<p>{error}</p>
 </form>
     </div>
     );   
}
 
export default Create;