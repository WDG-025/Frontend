/** biome-ignore-all lint/a11y/noLabelWithoutControl: <explanation> */
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback, Instructions } from "../components/index.js";
import { sendContactForm } from "../api/index.js";
import FormButton from "../components/FormButton.jsx";

async function actionContact(formData) {
  const [firstName, lastName, email, message] = ["firstName", "lastName", "email", "message"].map(
    (name) => formData.get(name)
  );
  const result = await sendContactForm({ firstName, lastName, email, message });
}

const Contact = () => {
  return (
    <div className="flex flex-col items-center">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <form action={actionContact}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4">
            <legend className="fieldset-legend">Contact Us</legend>
            <label className="label">First Name</label>
            <input className="input w-full" name="firstName" placeholder="First Name" />
            <label className="label">Last Name</label>
            <input className="input w-full" name="lastName" placeholder="Last Name" />
            <label className="label">Email</label>
            <input className="input w-full" name="email" placeholder="Email" />
            <label className="label">Message</label>
            <textarea
              className="textarea w-full"
              name="message"
              placeholder="Your message"
              rows={4}
            />
          </fieldset>
          <FormButton>Send</FormButton>
        </form>
      </ErrorBoundary>
      <Instructions path="/contact.md" />
    </div>
  );
};

export default Contact;
