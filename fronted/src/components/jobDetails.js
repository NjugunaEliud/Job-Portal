import { Link } from "react-router-dom";
import UseFetch from "../components/useFetch";

const JobDetails = () => {
  const { data: jobs } = UseFetch('/api/jobs');

  return (
    <>
      {jobs &&
        jobs.map((job) => (
          <div className="jobdetails" key={job._id}>
            <Link to={`/api/jobs/${job._id}`}>
              <h4>{job.title}</h4>
            </Link>
            <p>{job.location}</p>
            <p>
              <strong>Minimum requirements:</strong>
            </p>
            <p>{job.requirements}</p>
            <p>
              <strong>Salary Ksh:</strong>
              {job.salary}
            </p>
            <p>
              <strong>Posted:</strong>
              {new Date(job.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
    </>
  );
};

export default JobDetails;
