import backgroundImg from "../assets/images/backgroundImg.png";
import { MdWorkOutline } from "react-icons/md";
import { useContext, useState } from "react";
import JobContext from "../../context/JobContext";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const jobCtx = useContext(JobContext);
  const { searchJobData } = jobCtx;

  function searchjobDataHandler(e) {
    e.preventDefault();
    if (searchValue) {
      navigate('/');
      searchJobData(searchValue);
      setSearchValue("");
    }
  }

  return (
    <div className="container">
      <section
        className="search-form"
        style={{
          backgroundImage: "url(" + backgroundImg + ")",
          backgroundColor: "#1E86FF",
        }}
      >
        <form onSubmit={searchjobDataHandler}>
          <label htmlFor="search">
            <MdWorkOutline />
          </label>
          <input
            type="text"
            placeholder="Title or companies"
            id="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </section>
    </div>
  );
};

export default SearchForm;
