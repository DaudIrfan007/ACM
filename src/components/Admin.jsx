import React, { useState, useEffect } from "react";

const AdminPage = ({ setButtons }) => {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");

  // Load the latest button from local storage on component mount
  useEffect(() => {
    const savedButtons = JSON.parse(localStorage.getItem("buttons")) || [];
    // If there are saved buttons, set the state to the last one
    if (savedButtons.length > 0) {
      const lastButton = savedButtons[savedButtons.length - 1]; // Get the last button
      setUrl(lastButton.url);
      setName(lastButton.name);
    }
  }, []);

  const handleAddButton = () => {
    if (url && name) {
      const newButton = { url, name };

      // Save the new button to local storage, replacing any existing buttons
      localStorage.setItem("buttons", JSON.stringify([newButton])); // Store only the new button

      // Update state with the new button
      setButtons([newButton]); // Update the buttons state
      setUrl(""); // Clear input
      setName(""); // Clear input
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Page</h1>
        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full mb-4"
        />
        <input
          type="text"
          placeholder="Enter Button Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full mb-4"
        />
        <button
          onClick={handleAddButton}
          className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition"
        >
          Add Button
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
