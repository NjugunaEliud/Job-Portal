import { useState, useEffect } from 'react';
// import { useAuthContext } from '../hook/useAuthContext';

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  // const { user } = useAuthContext();

  useEffect(() => {
    const fetchJobs = async () => {
      const jobresponse = await fetch(url);
      const json = await jobresponse.json();

      if (jobresponse.ok) {
        setData(json);
        // console.log(json)
      }
    };
    fetchJobs();

    // if (user) {
    //   console.log('The user is currently logged in')
    // }
  }, [url ]);

  return { data };
};

export default UseFetch;
