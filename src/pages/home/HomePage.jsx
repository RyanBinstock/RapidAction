import { LandingPage } from "../../components/LandingPage";
import { StepsSection } from "../../components/StepsSection";
import { Header } from "../../components/Header";
import "./HomePage.css";

export function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <LandingPage />
      <StepsSection />
    </div>
  );
}
