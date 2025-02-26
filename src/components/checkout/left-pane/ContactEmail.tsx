import { useCheckoutStore } from "@/store/useCheckoutStore";
import React, { useState } from "react";

const ContactEmail = () => {
  const {
    checkoutData,
    setBilling,
    setShipping,
    setEmailSaved,
    setIsAnyBlockEditing,
  } = useCheckoutStore();
  const email = checkoutData.billing.email || "";
  const [error, setError] = useState("");

  // Initially set isEditing to true if no email is present, otherwise false.
  const [isEditing, setIsEditing] = useState(!email);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    // Update billing email
    setBilling({ ...checkoutData.billing, email: newEmail });
    // Also update shipping email so both remain in sync
    setShipping({ ...checkoutData.shipping, email: newEmail });
  };

  const handleSaveEmail = () => {
    if (
      !checkoutData.billing.email.trim() ||
      !checkoutData.billing.email.includes("@")
    ) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    // Close edit mode only when the user clicks "Continue"
    setIsEditing(false);
    // Mark email as saved in the store
    setEmailSaved(true);
    // Setting Any Block Editing status
    setIsAnyBlockEditing(false);
  };

  return (
    <div className="mt-4">
      <label
        htmlFor="email-address"
        className="block text-sm font-medium text-gray-700"
      >
        Email address
      </label>

      {isEditing ? (
        <div className="mt-2">
          <input
            id="email-address"
            name="email-address"
            type="email"
            autoComplete="email"
            value={checkoutData.billing.email}
            onChange={handleEmailChange}
            className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          <button
            onClick={handleSaveEmail}
            className="mt-2 bg-indigo-600 text-white py-1 px-3 rounded-md"
          >
            Save & Continue
          </button>
        </div>
      ) : (
        <div className="flex justify-between items-center mt-2">
          <p className="text-gray-900">{checkoutData.billing.email}</p>
          <button
            onClick={() => {
              setIsEditing(true);
              setEmailSaved(false);
              setIsAnyBlockEditing(true);
            }}
            className="text-indigo-600 border-2 border-black px-10"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactEmail;
