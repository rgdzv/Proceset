import './PagesMenu.scss'
import menu from './../../images/menu.png'
import PropTypes from "prop-types"

const PagesMenu = ({ toggleMenu }) => {
  return (
    <div className="pages__menu">
      <img src={menu} alt="pages-menu" onClick={toggleMenu}/>
      <p>Меню</p>
  </div>
  )
}

PagesMenu.propTypes = {
  toggleMenu: PropTypes.func
}

PagesMenu.defaultProps = {
  toggleMenu: () => {}
}

export default PagesMenu
