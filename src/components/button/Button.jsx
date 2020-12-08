import "./Button.scss"
import PropTypes from "prop-types"
import { memo } from "react"

const Button = ({ className,children, onClick, type, disabled }) => {
  return (
    <button 
      className={className} 
      type={type} 
      onClick={onClick} 
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool
}

Button.defaultProps = {
  className: '',
  children: '',
  onClick: () => {},
  type: '',
  disabled: false
}

export default memo(Button)