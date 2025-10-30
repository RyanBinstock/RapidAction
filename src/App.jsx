import { HomePage } from "./pages/home/HomePage";
import { AboutPage } from "./pages/about/AboutPage";
import { ProcessPage } from "./pages/prcoess/ProcessPage";
import { ContactUsPage } from "./pages/contact/ContactUsPage";
import { Routes, Route } from "react-router";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/process" element={<ProcessPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      {/* 
      Add routes for:
      - process page
      - play page
      - leaderboards page
      - about page
      - contact page
      */}
    </Routes>
  );
}

export default App;
