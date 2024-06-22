import React from "react";

import jobs from '../jobs.json'
import JobListing from "./JobListing";

const JobListings = () => {
  const recentJobs = jobs.slice(0,3)
  return (
    <section class="bg-blue-50 px-4 py-10">
      <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentJobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}

          
          
        </div>
      </div>
    </section>
  );
};

export default JobListings;
