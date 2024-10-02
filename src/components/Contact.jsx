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
    <section className="bg-inherit dark:bg-gray-900 border border-black">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-n-1 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-n-2 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a Society? Need
          details about our Event? Let us know.
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-n-1 dark:text-gray-300"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-n-1 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-n-1 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center border-gray-200 border-[1px] text-n-1 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
