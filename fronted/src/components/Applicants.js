import useFetch from './useFetchApplicants';

const Applicants = () => {
  const { data: appli } = useFetch('/api/application');

  return (
    <div className="applicants">
        <h4 style={{textAlign:'center',color:'brown'}}>Applications</h4>  
      {appli &&
        appli.map((applicant,index) => {
          return (
            
       <div key={applicant._id}>
          {index}.
          <p><strong>Job Title:</strong>  {applicant.jobInfo.title}</p>
          <p><strong>Company:</strong> {applicant.jobInfo.company}</p>
          <p><strong>Name:</strong>{applicant.name}</p>
          <p><strong>Email: </strong>{applicant.email}</p>
          <p><strong>Phone: </strong>{applicant.phone}</p>
          <strong>Cover letter :</strong>
          <p>{applicant.cover}</p>
       
       </div>
          );
        })}
    </div>
  );
};



export default Applicants;
