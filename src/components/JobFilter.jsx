import { useContext, useState } from "react";
import { FaGlobeAfrica } from "react-icons/fa";
import JobContext from "../context/JobContext";
import { MdError } from "react-icons/md";

const JobFilter = () => {
  const [error, setError] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [checkedState, setCheckedState] = useState(false);
  const jobCtx = useContext(JobContext);
  const { locations, locationFilterData, filterFullTimeJob } = jobCtx;

  /* full time filter */
  function fullTimeJobHanlder() {
    setIsChecked(!isChecked);
    filterFullTimeJob(!isChecked);
  }

  /* search filter */
  function searchLocationFilter(e) {
    e.preventDefault();

    if (searchInput) {
      if (
        locations.join(",").toLowerCase().indexOf(searchInput.toLowerCase()) >
        -1
      ) {
        setError(false);
        locations.forEach((location) => {
          if (location.toLowerCase().indexOf(searchInput.toLowerCase()) > -1) {
            locationFilterData(location);
            return location;
          }
        });
      } else {
        setError(true);
      }
    }

    setIsChecked(false);
    setSearchInput("");
  }

  /* radio filter */
  function radioLocationFilter(location, index) {
    setCheckedState(index);
    locationFilterData(location);
    setIsChecked(false);
  }

  return (
    <aside className="job-filter">
      <form className="ft-check-form">
        <input
          type="checkbox"
          name="ft-check"
          id="ft-check"
          checked={isChecked}
          onChange={() => fullTimeJobHanlder()}
        />
        <label htmlFor="ft-check">Full time</label>
      </form>

      <form className="location-form" onSubmit={searchLocationFilter}>
        <h3>Location</h3>

        <div className={`search-location-group ${error && 'error-input'}`}>
          <label htmlFor="sl-group">
            <FaGlobeAfrica />
          </label>
          <input
            type="text"
            // placeholder="City, state, zip code or country"
            placeholder="Enter Location"
            value={searchInput}
            list="location-list"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <datalist id="location-list">
            {locations.map((location, index) => (
              <option key={index} value={location} />
            ))}
          </datalist>
          {error && <MdError className="error" />}
        </div>

        <ul className="location-list">
        <li className="location-list-item">
            <input
              type="radio"
              value="All"
              name="location"
              id="all"
              defaultChecked
              onChange={() => radioLocationFilter("All", 0)}
            />
            <label htmlFor="all">All</label>
          </li>
          {locations.length > 0 &&
            locations.map((location, index) => (
              <li
                className="location-list-item"
                key={location.toLowerCase().split(" ").join("-")}
              >
                <input
                  type="radio"
                  value={location}
                  name="location"
                  id={location.toLowerCase().split(" ").join("-")}
                  checked={checkedState[index]}
                  onChange={() => radioLocationFilter(location, index)}
                />
                <label htmlFor={location.toLowerCase().split(" ").join("-")}>
                  {location}
                </label>
              </li>
            ))}
        </ul>
      </form>
    </aside>
  );
};

export default JobFilter;
