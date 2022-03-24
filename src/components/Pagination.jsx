import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useContext } from "react";
import JobContext from "../context/JobContext";

const Pagination = ({ jobsPerPage, currentPage, filteredJobData }) => {
  const jobCtx = useContext(JobContext);
  const { paginate, prevPaginate, nextPaginate } = jobCtx;

  const pageNum = [];
  let lastPage = Math.ceil(filteredJobData.length / jobsPerPage);

  for (let i = 1; i <= lastPage; i++) {
    pageNum.push(i);
  }

  return (
    <ul className="pagination">
      <li
        className={`pagination-item ${currentPage === 1 ? "disabled" : ""}`}
        onClick={prevPaginate}
      >
        <MdKeyboardArrowLeft />
      </li>
      {pageNum.map((num) => (
        <li
          key={num}
          id={num}
          className={`pagination-item ${currentPage === num ? "active" : ""}`}
          onClick={() => paginate(num)}
        >
          {num}
        </li>
      ))}
      <li
        className={`pagination-item ${
          currentPage === lastPage ? "disabled" : ""
        }`}
        onClick={nextPaginate}
      >
        <MdKeyboardArrowRight />
      </li>
    </ul>
  );
};

export default Pagination;
