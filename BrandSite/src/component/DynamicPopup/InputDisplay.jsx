import React, { useContext, useEffect, useState } from "react";
import { FormGroup, Label } from "reactstrap";
import DisplayError from "./DisplayError";
import { LanguageContext } from "../../context/Language";
function InputDisplay({ props, BaseInput, errorResult }) {
  const { localization } = useContext(LanguageContext);

  const [inputErrorResult, setInputErrorResult] = useState(errorResult);
  const [title, setTitle] = useState(props.title);
  const [style, setStyle] = useState("");
  const [changed, setChanged] = useState(false);
  const handleChange = (e) => {
    if (inputErrorResult !== errorResult) {
      setChanged(true);
    }
    if (props.onChange) {
      props.onChange(e); // Call the onChange prop if it exists
    }
    setStyle(" ");
  };
  useEffect(() => {
    if (!changed && inputErrorResult !== errorResult) {
      setStyle("is-invalid");
    } else {
      setStyle(" ");
    }
  }, [inputErrorResult, errorResult, changed]);
  return (
    <FormGroup>
      <DisplayError
        dataError={errorResult}
        parameterField={props.fieldName}
        setTitle={setTitle}
        setStyle={setStyle}
      />
      <Label for={props.fieldName} className="text-black">
        {props.title}
      </Label>
      <BaseInput
        {...props}
        onChange={handleChange}
        title={props.title}
        placeholder={localization.inputs.base.placeholder + props.title}
        className={style}
      />
      {/* {BaseInput.render()} */}
    </FormGroup>
  );
}

export default InputDisplay;
