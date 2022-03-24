import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import JobContext from "../context/JobContext";
import { CgArrowLongLeft } from "react-icons/cg";
import { HiOutlineClock } from "react-icons/hi";
import { FaGlobeAfrica } from "react-icons/fa";
import parse from "html-react-parser";

const JobDescription = () => {
  const [jobDeatils, setJobDetails] = useState({});
  const jobCtx = useContext(JobContext);
  const { jobs } = jobCtx;
  const { jobDetailUrl } = useParams();

  useEffect(() => {
    setTimeout(() => {
      if (jobs) {
        let id = jobDetailUrl.split("-")[jobDetailUrl.split("-").length - 1];
        const jobDeatilsArray = jobs.filter((job) => {
          if (job.company_logo.indexOf(id) > -1) {
            return job.company_logo;
          } else {
            return false;
          }
        });
        // console.log(jobDeatilsArray);
        setJobDetails(jobDeatilsArray);
      }
    }, 100);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {jobDeatils.length > 0 &&
        jobDeatils.map((job, index) => (
          <div className="container" key={index}>
            <aside className="sidebar">
              <Link to="/" className="back-to-search">
                <CgArrowLongLeft /> Back to search
              </Link>
              {/* <h3>HOw to Apply</h3> */}
              {/* <p className="contact-info">
                Please email a copy of your resume and online portfolio to
                <a href="mailto:wes@kasisto.com"> wes@kasisto.com</a> & CC{" "}
                <a href="mailto:eric@kasisto.com">eric@kasisto.com</a>
              </p> */}
              <h3>Tags</h3>
              <div className="tags">
                {job.tags.map((tag, index) => (
                  <span className="tag" key={index}>{tag}</span>
                ))}
              </div>
            </aside>
            <section className="job-details">
              <div className="heading">
                <h2 className="job-title">{job.title}</h2>
                {job.job_type && <div className="job-type-card">Full time</div>}
              </div>
              <div className="posted-date d-center">
                <HiOutlineClock />
                {Math.abs(
                  new Date().getDate() -
                    new Date(job.publication_date).getDate()
                )}
                {Math.abs(
                  new Date().getDate() -
                    new Date(job.publication_date).getDate()
                ) === 1
                  ? " day ago"
                  : " days ago"}
              </div>
              <div className="company-info">
                <div className="company-logo">
                  <img src={job.company_logo} alt={job.company_name} />
                </div>
                <div>
                  <div className="company-name">{job.company_name}</div>
                  <div className="company-country d-center">
                    <FaGlobeAfrica /> {job.candidate_required_location}
                  </div>
                </div>
              </div>
              <div className="company-description">
                {parse(job.description)}
              </div>
            </section>
          </div>
        ))}
    </>
  );
};

export default JobDescription;
