import MailchimpSubscribe from "react-mailchimp-subscribe";

const url =
  "https://gmail.us14.list-manage.com/subscribe/post?u=e743e3e5af4f2b0726dbb7806&amp;id=1f1f5b5218&amp;f_id=00fe95e0f0";

const SimpleForm = () => <MailchimpSubscribe url={url} />;

const Waiting = () => (
  <div id="waitlist">
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <div>
          <div className="contact-page-wrapper">
            <h1 className="primary-heading">Subscribe to Our Waiting List</h1>
          </div>
          <div className="contact-form-container" style={{ margin: "auto" }}>
            <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
          </div>

          {status === "sending" && (
            <div className="statusMsg" style={{ color: "blue" }}>
              sending...
            </div>
          )}
          {status === "error" && (
            <div
              className="statusMsg"
              style={{ color: "red" }}
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
          {status === "success" && (
            <div
              className="statusMsg"
              style={{ color: "green", marginTop: "120px" }}
            >
              Subscribed !
            </div>
          )}
        </div>
      )}
    />
  </div>
);

export default Waiting;
