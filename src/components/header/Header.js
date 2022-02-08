import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <header className="header ">
      <div className="container">
        <nav className="header__nav">
          <ul className="header__links">
            <li className="header__link">
              <NavLink to="/">Teams</NavLink>
            </li>
            <li className="header__link">
              <NavLink to="/standings">Standings</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
