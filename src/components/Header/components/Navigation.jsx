export default function Navigation() {
  const navItems = ["Home", "TV Shows", "Movies", "Series"];

  return (
    <nav className="header__nav">
      <ul className="header__nav_list">
        {navItems.map((item) => (
          <li className="header__nav_item" key={item}>
            <a className="header__nav_link" href="#">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}