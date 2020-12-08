import "./ErrorMessage.scss"
import PropTypes from "prop-types"
import mistake from './../../images/mistake.png'
import { memo } from "react"

const ErrorMessage = ({ className, children }) => {
  return (
    <div className={className}>
      <img src={mistake} alt="mistake" />
      <span>{children}</span>
    </div>
  );
};

ErrorMessage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
}

ErrorMessage.defaultProps = {
  className: '',
  children: ''
}

export default memo(ErrorMessage)