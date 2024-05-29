import React, { useEffect, useState } from "react";
import FormField from "./FormField";
import SectionHeading from "./SectionHeading";

const YourInfo = ({ yourInfo, onChangeYourInfo, isEmpty }) => {
  const [info, setInfo] = useState({});

  const [formFields, setFormFields] = useState([
    {
      id: 1,
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "e.g John Doe",
    },
    {
      id: 2,
      name: "email",
      type: "text",
      label: "Email Address",
      placeholder: "e.g john@gmail.com",
    },
    {
      id: 3,
      name: "phone",
      label: "Phone Number",
      type: "text",
      placeholder: "e.g +1 234 567 890",
    },
    {
      id: 4,
      name: "BirthDay",
      label: "Birth Day",
      type: "date",
    },
    {
      id: 5,
      name: "gender",
      label: "Gender",
      // label: {value: ["Male", "Female"] },
      type: "switch",
    },
  ]);

  // useEffect(() => {
  //   console.log(isEmpty);
  // }, [isEmpty]);

  return (
    <div>
      <SectionHeading
        title="Personal Info"
        desc="Please provide your name, email address, and phone number."
      />
      <form>
        <div className="flex flex-col space-y-6 text-[14px]">
          {formFields.map((formField) => (
            <FormField
              onChangeYourInfo={onChangeYourInfo}
              key={formField.id}
              info={info}
              setInfo={setInfo}
              name={formField.name}
              label={formField.label}
              type={formField.type}
              placeholder={formField.placeholder}
              value={yourInfo[formField.name]}
              isEmpty={isEmpty}
            />
          ))}
        </div>
      </form>
    </div>
  );
};

export default YourInfo;
