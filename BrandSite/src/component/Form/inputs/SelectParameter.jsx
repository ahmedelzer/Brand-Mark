import React from "react";
import { Input } from "reactstrap";

function SelectParameter() {
  return (
    <Input id="exampleSelect" name="select" type="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Input>
  );
}

export default SelectParameter;