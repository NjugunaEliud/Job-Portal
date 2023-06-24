
import JobDetails from "../components/jobDetails";



const Home = () => {
    return ( 
        
        <div className="jobs">
            
             <JobDetails  />

            
             
             <footer class="page-footer font-small blue-grey lighten-5" id="footer">
             
          
               <div class="container text-center text-md-left mt-5">
             
                 
                 <div class="row mt-3 dark-grey-text">
             
                  
                   <div class="col-md-3 col-lg-6 col-xl-3 mb-4">
             
                    
                     <h6 class="text-uppercase font-weight-bold">BrighterFutureJobs</h6>
                     <hr class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                     <p>Brighter Monday is a well-known online job portal and career platform that operates in several countries in Africa, including Kenya, Uganda, Tanzania, and Rwanda. It provides a platform for job seekers to search and apply for various job opportunities across different industries and sectors.</p>
             
                   </div>
             
                   
                   
                   <div class="col-md-4 col-lg-6 col-xl-3 mx-auto mb-md-0 mb-4">
             
                     
                     <h6 class="text-uppercase font-weight-bold">Contact</h6>
                     <hr class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
                     <p>
                       <i class="fas fa-home mr-3"></i>Kenya Nairobi Park Suites ParkLands</p>
                     <p>
                       <i class="fas fa-envelope mr-3"></i> brighterfuturejobs@brighter.co.ke</p>
                     <p>
                       <i class="fas fa-phone mr-3"></i> + 254 719 1965 91</p>
                     <p>
                       <i class="fas fa-print mr-3"></i> + 254 719 1965 91</p>
             
                   </div>
                   
             
                 </div>
                 
             
               </div>
               
               <div class="footer-copyright text-center text-black-50 py-3">© 2023 Copyright:
                 <a class="dark-grey-text" href="kamaa.com"> BrighterFutureJobs</a>
               </div>
               
             
             </footer>
            
             
            

        </div>
        
     );
     
}
 
export default Home;