import './header.scss';

const Header = () => {
  return (
    <header className="header ">
      <div className="container">
        <nav className="header__nav">
          <ul className="header__links">
            <li className="header__link">Teams</li>
            <li className="header__link">Standings</li>
          </ul>
        </nav>
        <form className="header__form">
          <input
            type="text"
            placeholder="Search..."
            className="header__input-search"
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
