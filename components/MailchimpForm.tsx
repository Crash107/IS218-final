import React, { useState } from "react";
import axios from "axios";

interface FormData {
  email: string;
}

const MailchimpForm: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async () => {
    try {
      const headers = {
        Authorization: `apikey b30aea83ed35c7ca95e1c9e827e44498-us14`,
        "Content-Type": "application/json",
      };
      const listId = "004793a27b";
      const requestData = {
        email_address: email,
        status: "subscribed",
      };

      console.log("Request Data:", requestData);

      const response = await axios.post(
        `https://us14.api.mailchimp.com/3.0/lists/${listId}/members`,
        requestData,
        {
          headers,
        }
      );

      console.log("Response:", response);

      // Check for a successful response status
      if (response.status === 200 || response.status === 201) {
        console.log("Successfully subscribed:", response.data);
        closeModal();
      } else {
        // Handle unexpected response status
        console.error("Unexpected response status:", response.status);
        setErrorMessage("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error("Mailchimp API error:", error);
      setErrorMessage("Failed to subscribe. Please try again.");
    }
  };

  return (
    <div>
      {isModalOpen && (
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            <label>
              Email:
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            {errorMessage && <span>{errorMessage}</span>}

            <button type="submit">Subscribe</button>
          </form>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default MailchimpForm;
