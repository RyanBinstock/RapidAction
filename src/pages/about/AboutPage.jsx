import { Header } from "../../components/Header";
import "./AboutPage.css";

export function AboutPage() {
  return (
    <>
      <Header />
      <div className="about-page">
        <div className="about-page-title">About Us</div>
        <div className="about-page-content">
          <p>
            Rapid Action is aimed towards creating a fun, competitive
            environment for people who want to play sports on their own
            schedule.
          </p>
          <p>
            We want to connect individuals with others in their community who
            share the same passion for staying active, and without being limited
            to when a league tells you to play.
          </p>
          <p>
            By making it easy to find matches, track progress, and play on your
            terms, we're building a more flexible, social, and rewarding way to
            compete.
          </p>
        </div>
      </div>
    </>
  );
}
