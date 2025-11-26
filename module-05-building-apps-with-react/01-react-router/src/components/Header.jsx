import { Link, NavLink } from "react-router";

export default function Header() {
  return (
    <header className="header">
      <a href="#">
        <h1>Webb Gallery</h1>
        <p>
          Fancy stars
          <span role="img" aria-label="Star">
            💫
          </span>
        </p>
      </a>
      <nav>
        <ul>
          <li>
            <NavLink className="navlink" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/alpha-centauri">
              Alpha Centauri
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
