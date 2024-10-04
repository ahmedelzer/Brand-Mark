import React, { useState } from "react";

const countryCodes = [
  { code: "+1", country: "USA" },
  { code: "+44", country: "UK" },
  { code: "+91", country: "India" },
  { code: "+61", country: "Australia" },
  { code: "+81", country: "Japan" },
  // Add more country codes as needed
];

function PhoneNumberParameter({ value, fieldName, enable, onKeyPress }) {
  const [selectedCode, setSelectedCode] = useState(countryCodes[0].code);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleSelectCode = (code) => {
    setSelectedCode(code);
    setShowDropdown(false);
  };

  return (
    <div className="flex items-center mt-2">
      <div className="relative">
        <button
          id="dropdown-phone-button"
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center form-control"
          type="button"
          onClick={toggleDropdown}
        >
          {selectedCode}{" "}
          <svg
            className="w-2.5 h-2.5 ms-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {showDropdown && (
          <ul className="absolute z-10 mt-1 w-[100%] bg-black border rounded-lg shadow-lg">
            {countryCodes.map((item) => (
              <li
                key={item.code}
                className="px-4 py-2 text-sm hover:bg-gray-800 cursor-pointer"
                onClick={() => handleSelectCode(item.code)}
              >
                {item.code} {item.country}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="relative w-full">
        <input
          type="tel"
          name={fieldName}
          readOnly={!enable}
          value={value}
          id="phone-input"
          aria-describedby="helper-text-explanation"
          className="block p-2.5 w-full z-20 text-sm form-control"
          placeholder="123-456-7890"
          required
        />
      </div>
    </div>
  );
}

export default PhoneNumberParameter;
