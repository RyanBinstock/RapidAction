import "./StepsSection.css";

export function StepsSection() {
  const steps = [
    {
      number: "1",
      title: "Book Your Match",
      text: "Get matched with players or challenge opponents.\nWe'll book the court for you.",
      color: "#3a68ff",
    },
    {
      number: "2",
      title: "Show Up & Play",
      text: "Play your game and track your score.",
      color: "#2fa44f",
    },
    {
      number: "3",
      title: "Submit Your Score",
      text: "Submit results and rise up the rankings!",
      color: "#3a68ff",
    },
  ];

  return (
    <div className="steps-section">
      {steps.map((step) => (
        <div
          key={step.number}
          className="step-card"
          style={{ backgroundColor: step.color }}
        >
          <div className="step-header">
            <div className="arrow">
              <div className="circle">{step.number}</div>
            </div>
          </div>
          <div className="step-content">
            <h2>{step.title}</h2>
            <p>{step.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
