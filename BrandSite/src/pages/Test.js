import React, { useState } from "react";
import { Input, InputGroup, Button, InputGroupText } from "reactstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import RotatedArrow from "../component/RotatedArrow";
import TypeFile from "../component/TypeFile";

const Test = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <InputGroup dir="rtl">
      <Input
        type={passwordVisible ? "text" : "password"}
        placeholder="Enter your password"
        style={{ textAlign: "right" }} // Align text to the right
      />
      {/* <InputGroupAddon addonType="prepend"> */}
      <Button onClick={togglePasswordVisibility}>
        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
      </Button>
      {/* </InputGroupAddon> */}
    </InputGroup>
  );

  // return (
  //   // <div style={{ textAlign: "center", margin: "50px" }}>
  //   //   <h1>Welcome to Our Website!</h1>
  //   //   <p>Follow the arrows to understand how to use the site:</p>
  //   //   <div
  //   //     style={{
  //   //       display: "flex",
  //   //       justifyContent: "space-around",
  //   //       marginTop: "50px",
  //   //     }}
  //   //   >
  //   //     <div>
  //   //       <RotatedArrow angle={45} />
  //   //       <p>Click here to start</p>
  //   //     </div>
  //   //     <div>
  //   //       <RotatedArrow angle={-45} />
  //   //       <p>Check out this section</p>
  //   //     </div>
  //   //     <div>
  //   //       <RotatedArrow angle={90} />
  //   //       <p>Scroll down for more</p>
  //   //     </div>
  //   //     <div>
  //   //       <RotatedArrow angle={-90} />
  //   //       <p>Go to the top</p>
  //   //     </div>
  //   //   </div>
  //   // </div>
  //   <TypeFile
  //     file={
  //       "http://maingatewayapi.ihs-solutions.com:8000/BrandingMart/ArchivingFiles/Hassan_Allam_Eden.mp4"
  //     }
  //     title={""}
  //     type={"video"}
  //   />
  // );
};

export default Test;
