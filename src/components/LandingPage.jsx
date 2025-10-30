import "./LandingPage.css";

export function LandingPage({ stepSectionRef }) {
  const handleClick = () => {
    if (stepSectionRef.current) {
      stepSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="landing-page" ref={stepSectionRef}>
      <div className="content-title">
        <h1>The New Way</h1>
        <h1>to Play.</h1>
      </div>
      <p className="content-subtitle">
        A platform to book competitive sport matches, track every result, and
        climb the ranks in real time
      </p>
      <button className="get-started-button" onClick={handleClick}>
        {" "}
        How Does It Work? <span className="dot"></span>
      </button>
    </div>
  );
}
