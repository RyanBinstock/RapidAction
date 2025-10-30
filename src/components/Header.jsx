import { NavLink } from "react-router";
import "./Header.css";

export function Header() {
  return (
    <div className="header-container">
      <div className="left-section">
        <img
          src="../src/assets/images/RA-header-logo.png"
          alt="Rapid Action Logo"
          className="header-logo"
        />
      </div>
      <div className="right-section">
        <div className="header-navigate-button">
          <NavLink to="/" className="header-link">
            Home
          </NavLink>
        </div>
        <div className="header-navigate-button">
          <NavLink to="/process" className="header-link">
            Process
          </NavLink>
        </div>
        <div className="header-navigate-button">Play</div>
        <div className="header-navigate-button">Leaderboards</div>
        <div className="header-navigate-button">
          <NavLink to="/about" className="header-link">
            About
          </NavLink>
        </div>
        <div className="header-navigate-button">Contact</div>
      </div>
    </div>
  );
}
