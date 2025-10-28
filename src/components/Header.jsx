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
        <div className="header-link">Home</div>
        <div className="header-link">Process</div>
        <div className="header-link">Play</div>
        <div className="header-link">Leaderboards</div>
        <div className="header-link">About</div>
        <div className="header-link">Contact</div>
      </div>
    </div>
  );
}
