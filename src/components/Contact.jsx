import React, { useState } from "react";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the mailto link
    const mailtoLink = `mailto:acm@ucp.edu.pk?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;

    // Open the default email client
    window.location.href = mailtoLink;

    // Optionally reset the form
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section className="bg-inherit lg:border border-black lg:mt-[20vh]">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 lg:text-6xl  text-4xl font-code tracking-tight text-center text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-300 font-code  text-sm lg:text-md">
          Got a technical issue? Want to send feedback about our Society? Need
          details about our Event? Let us know.
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="name@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-white"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 shadow-sm"
              placeholder="Let us know how we can help you"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg shadow-sm border border-gray-300"
              placeholder="Leave a comment..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white bg-blue-600 rounded-lg sm:w-fit hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
