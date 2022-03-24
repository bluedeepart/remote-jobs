import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <header>
      <div className="container">
        <Link to='/' className="site-logo">{title} <span>Jobs</span></Link>
      </div>
    </header>
  );
};

Header.prototype = {
  title: PropTypes.string.isRequired,
};

Header.defaultProps = {
  title: 'Remote',
};

export default Header;
