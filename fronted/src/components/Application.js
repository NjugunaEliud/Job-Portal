
import { useState} from 'react'
const Application = ({jobA}) => {
    const[name ,setName]= useState('')
    const[email ,setEmail]= useState('')
    const[phone ,setPhone]= useState('')
    const[cover ,setCover]= useState('')
    const[resume ,setResume]= useState(null)
    const[error, setError]= useState('');
    

    
    



    const application = async (e) => {
      e.preventDefault();
    
      // Validate form data
      if (!name || !resume || !cover || !phone || !email) {
        setError('Please fill in all the required fields');
        return;
      }
    
      const applicant = { name, resume, cover, phone, email ,jobA};
    
    
        const response = await fetch('/api/application', {
          method: 'POST',
          body: JSON.stringify(applicant),
          headers: { 'Content-Type': 'application/json' }
          
        });

        const json = await response.json();
    
        if (!response.ok) {
          setError(json.error);
          console.log('Could not apply for the job');
          return;
        }
       

        if(response.ok){
        // Clear form data
        setName('');
        setEmail('');
        setResume('');
        setCover('');
        setPhone('');
    
        console.log('New application submitted');

        }
      
    
    };
    
        

    
        

  
   
    return ( 
        
     <form className="afor"  onSubmit={application} encType="multipart/form-data">
            
      <h4 style={{textAlign:'center'}}>Application Details</h4>
     
     <label>Full Name: </label>
     <input 
     className='i'
       type="text" 
       onChange={(e) => setName(e.target.value)} 
       value={name} 
     />
     <label>Email address:</label>
     <input 
     className='i'
       type="email" 
       onChange={(e) => setEmail(e.target.value)} 
       value={email} 
     />
     <label>Phone Number:</label>
     <input 
     className='i'
       type="Integer" 
       onChange={(e) => setPhone(e.target.value)} 
       value={phone} 
     />
    <label>Resume:</label>
    <input type="file" name="resume" onChange={(e) => setResume(e.target.files[0])} />


     <label>Cover Letter</label>
     <textarea cols="43" rows='4'
     onChange={(e) => setCover(e.target.value)} 
     value={cover} 
     
     ></textarea>
       <div class="text-center">
      <button type='submit' class="btn btn-danger gradient-light btn-center m-3">Apply</button>
      {error && <div className='error'>{error}</div>}
       </div>
       </form>
 
        
     );
}
 
export default Application;