import React from "react";
import { ValidationError, useForm } from "@statickit/react";

export const ContactForm = () => {
  const [state, submit] = useForm({
    id: "fae68646a1e2"
  });

  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }

  return (
    <form onSubmit={submit}>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" required />
      <label htmlFor="message">Message</label>
      <input type="message" name="message" required />
      <ValidationError field="email" prefix="Email" errors={state.errors} />
      <button type="submit">Sign up</button>
    </form>
  );
};
