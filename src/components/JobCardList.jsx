import JobCard from "./JobCard";
import Loading from "./Loading";
import { useContext } from "react";
import JobContext from "../context/JobContext";
import Pagination from "./Pagination";

const JobCardList = () => {
  const jobCtx = useContext(JobContext);
  const { jobs, currentPosts, loading, currentPage, jobsPerPage, filteredJobData } = jobCtx;

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="job-card-wrapper">
      <div className="job-card-list">
        {currentPosts.length > 0 &&
          currentPosts.map((job) => <JobCard job={job} key={job.id} />)}
      </div>

      <Pagination
        currentPosts={currentPosts}
        jobsPerPage={jobsPerPage}
        currentPage={currentPage}
        jobs={jobs}
        filteredJobData={filteredJobData}
      />
    </section>
  );
};

export default JobCardList;
