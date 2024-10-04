import React from "react";
import BaseInput from "./BaseInput";
import { LanguageContext } from "../../../context/Language";

class BooleanParameter extends BaseInput {
  handleChange = (e) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(e.value);
    }
  };

  render() {
    const { localization } = this.context;
    const { value, fieldName, Enable, onKeyPress } = this.props;

    return (
      <div className="flex flex-wrap p-2">
        <div className="flex items-center me-4">
          <input
            id={fieldName}
            type="radio"
            value={1}
            Enable={Enable}
            name={fieldName}
            className="w-4 h-4  bg-gray-100  dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for={fieldName}
            className="ms-2 text-sm font-medium mx-2 text-gray-900 dark:text-gray-300"
          >
            Male
          </label>
          <input
            id="red-radio"
            type="radio"
            value={0}
            name={fieldName}
            className="w-4 h-4  bg-gray-100  dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="red-radio"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Female
          </label>
        </div>
      </div>
    );
  }
}
BooleanParameter.contextType = LanguageContext;

export default BooleanParameter;

// import { RadioGroup } from "devextreme-react";

// const BooleanParameter = ({ value, onChange, Enable, onKeyPress }) => (
//   <RadioGroup
//     items={[
//       { text: "Yes", value: true },
//       { text: "No", value: false },
//     ]}
//     value={value}
//     onValueChanged={onChange}
//     onKeyPress={onKeyPress}
//     readOnly={!Enable}
//   />
// );
// export default BooleanParameter;
