import './PagesToggleMenu.scss'
import whitemenu from './../../images/menu/whitemenu.png'
import logosign from './../../images/menu/logosign.png'
import person from './../../images/menu/person.png'
import process from './../../images/menu/process.png'
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const PagesToggleMenu = ({ clicked, toggleMenu, user: { currentUser }, signOut }) => {
  return (
    <div className="pages__toggle__menu" style={{ transform: clicked ? "translateY(0)" : "" }}>
      <div className="pages__toggle__menu__sidebar">
        <div className="pages__toggle__menu__sidebar__content">
          <div className="pages__toggle__menu__logo">
            <img src={whitemenu} alt="whitemenu" onClick={toggleMenu} />
            <img src={logosign} alt="logosign" />
          </div>
          <ul>
            <li>
              <img src={person} alt="person" />
              <Link to="/pages/edituser" onClick={toggleMenu}>{currentUser.firstName} {currentUser.secondName}</Link>
            </li>
            <li>
              <img src={process} alt="process" />
              <Link to="/pages/process" onClick={toggleMenu}>Список процессов</Link>
            </li>
            <li>
              <img src={person} alt="person" />
              <Link to="/" onClick={signOut}>Выход</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

PagesToggleMenu.propTypes = {
  clicked: PropTypes.bool,
  toggleMenu: PropTypes.func,
  currentUser: PropTypes.object,
  signOut: PropTypes.func
}

PagesToggleMenu.defaultProps = {
  clicked: false,
  toggleMenu: () => {},
  currentUser: {},
  signOut: () => {}
}

export default PagesToggleMenu