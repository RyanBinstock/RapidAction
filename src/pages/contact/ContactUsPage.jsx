import { Header } from "../../components/Header";
import { ContactUsForm } from "./ContactUsForm";
import "./ContactUsPage.css";

export function ContactUsPage() {
  return (
    <>
      <Header />
      <div className="contact-page">
        <div className="content">
          <div className="contact-page-title">Contact Us</div>

          <ContactUsForm />
        </div>
      </div>
    </>
  );
}
