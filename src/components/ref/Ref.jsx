import "./Ref.scss"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { memo } from "react"

const Ref = ({ className, children, to, onClick, sign }) => {
  return (
    <div className={className}>
      <p>{children}</p>
      <Link to={to} onClick={onClick}>
        {sign}
      </Link>
    </div>
  );
};

Ref.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
  sign: PropTypes.string
};

Ref.defaultProps = {
  className: '',
  children: '',
  to: '',
  onClick: () => {},
  sign: ''
};

export default memo(Ref)