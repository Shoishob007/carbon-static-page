"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_KEY);

export const sendComingSoonEnquiry = async (formData) => {
  const enquiry = formData.get("enquiry");

  // server-side validation
  if (!validateString(enquiry, 2000)) {
    return {
      error: "Please enter a valid enquiry (max 2000 characters)",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Carbon App Enquiry <onboarding@resend.dev>",
      to: "shoishob554@gmail.com",
      subject: "Enquiry for the Carbon App",
      react: (
        <div>
          <h1>New Carbon App Enquiry</h1>
          <p><strong>Enquiry:</strong></p>
          <p>{enquiry}</p>
        </div>
      ),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};