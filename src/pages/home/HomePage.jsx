import { LandingPage } from "../../components/LandingPage";
import { StepsSection } from "../../components/StepsSection";
import { Header } from "../../components/Header";
import { useRef } from "react";
import "./HomePage.css";

export function HomePage() {
  const stepSectionRef = useRef(null);
  console.log(stepSectionRef);
  return (
    <div className="home-page">
      <Header />
      <LandingPage stepSectionRef={stepSectionRef} />
      <StepsSection stepSectionRef={stepSectionRef} />
    </div>
  );
}
