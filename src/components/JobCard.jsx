import { FaGlobeAfrica } from "react-icons/fa";
import { HiOutlineClock } from "react-icons/hi";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    id,
    title,
    company_logo,
    company_name,
    job_type,
    candidate_required_location,
    publication_date,
  } = job;

  const publish_date = Math.abs(
    new Date().getDate() - new Date(publication_date).getDate()
  );
  const jobDetailUrl = `${
    title.toLowerCase().split(" ").join("-").split(",")[0].split("/")[0]
  }-${id}`;

  return (
    <article className="job-card" id={id}>
      <div className="company-logo">
        <Link to={jobDetailUrl} title={company_name}>
          <img src={company_logo} alt={company_name} />
        </Link>
      </div>
      <div className="job-des">
        <div className="company-name"> <Link to={jobDetailUrl} title={company_name}>{company_name}</Link></div>
        <div className="profile"> <Link to={jobDetailUrl} title={company_name}>{title}</Link></div>
        <div className="job-card-footer">
          {job_type ? (
            <div className="job-type-card">Full time</div>
          ) : (
            <div></div>
          )}
          <div className="d-center">
            <div className="company-country d-center">
              <FaGlobeAfrica /> {candidate_required_location}
            </div>
            <div className="posted-date d-center">
              <HiOutlineClock />
              {publish_date}
              {publish_date === 1 ? " day ago" : " days ago"}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default JobCard;
