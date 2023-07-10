const Header = () => {
  return (
    <header className="header">
      <img
        className="header-logo"
        src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
        alt="Docplanner Group"
      />
      <nav>
        <ul className="menu-list">
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Career</a>
          </li>
          <li>
            <a href="#">Departments</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
