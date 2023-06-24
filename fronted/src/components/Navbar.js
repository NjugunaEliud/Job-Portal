import{Link} from 'react-router-dom';
import {useLogout }from '../hook/useLogout';
import { useAuthContext } from '../hook/useAuthContext';
const Navbar = () => {
  const{logout}=useLogout()
  const{user}=useAuthContext()

  const handleSubmit=(e)=>{
    e.preventDefault();
    logout()
  }
    return ( 
      <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><Link to='/'><span class="display-7 text-warning f-italic fw-bold">BrighterFuture</span ><span class="text-lead muted text-secondary fw-bold">FindJob</span></Link></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"><Link to="/" className="all"> Home</Link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#footer">About</a>
            </li>
           
            
            <form class="d-flex">
            <input class="form-control me-2" className='ka' type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-danger" type="submit">Search</button>
          </form>
          </ul>
          
            
           
      
     {!user && (  <section>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"><Link to="/login" className="all"> Login</Link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><Link to="/signup" className="all">Sign Up</Link></a>
            </li>
            
            {/* <button onCLick={handleSubmit}  class="btn btn-danger ms-3" >Log Out</button> */}
            </ul>
        </section> )} 
           
        {user && (<section>
        
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <span>{user.email}</span>

          <button class="btn btn-danger ms-3" type="submit"><Link to="/Create" class="text-light">Post A Job</Link></button>
          
            <button className="btn btn-danger ms-3" type="submit" onClick={handleSubmit}>
              Log Out
            </button>
          </ul>
        </section>)}
          
        </div>
      </div>
      
    </nav>
     );
}
 
export default Navbar;

        