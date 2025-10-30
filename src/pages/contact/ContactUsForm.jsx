import "./ContactUsForm.css";

export function ContactUsForm() {
  return (
    <>
      <div className="contact-us-form-top">
        <h3>Have questions or just want more info? Reach out here!</h3>
        <button type="submit" className="contact-us-submit-button">
          Send!
        </button>
      </div>
      <form className="contact-us-form">
        <div className="contact-us-name-row">
          <input className="contact-us-input" placeHolder="Name" name="Name" />
        </div>
        <div className="contact-us-info-row">
          <input
            className="contact-us-input"
            placeHolder="Email"
            name="Email"
          />
          <input
            className="contact-us-input"
            placeHolder="Phone Numer"
            name="PhoneNumber"
          />
        </div>
        <div className="contact-us-subject-row">
          <input
            className="contact-us-input"
            name="Subject"
            placeHolder="Subject"
          />
        </div>
        <div className="contact-us-message-row">
          <textarea
            className="contact-us-input message"
            name="Message"
            placeHolder="Message"
          />
        </div>
      </form>
    </>
  );
}
