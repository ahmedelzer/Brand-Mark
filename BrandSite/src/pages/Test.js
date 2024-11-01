import React, { useEffect, useState } from "react";
import { Input, InputGroup, Button, InputGroupText } from "reactstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import RotatedArrow from "../component/RotatedArrow";
import TypeFile from "../component/TypeFile";
import OTPForm from "../component/Form/OTPForm";
import LocationMap from "../component/Form/LocationMap";

const Test = () => {
  // const [passwordVisible, setPasswordVisible] = useState(false);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  // Set user's current location on initial load
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setLocation({ latitude, longitude });
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
    console.log("Updated Location:", newLocation); // You can use this location data
  };

  return (
    // <InputGroup dir="rtl">
    //   <Input
    //     type={passwordVisible ? "text" : "password"}
    //     placeholder="Enter your password"
    //     style={{ textAlign: "right" }} // Align text to the right
    //   />
    //   {/* <InputGroupAddon addonType="prepend"> */}
    //   <Button onClick={togglePasswordVisibility}>
    //     {passwordVisible ? <FaEyeSlash /> : <FaEye />}
    //   </Button>
    //   {/* </InputGroupAddon> */}
    // </InputGroup>
    <div>
      <h1>Select a Location</h1>
      {error && <p>Error: {error}</p>}
      <LocationMap
        location={location}
        onLocationChange={handleLocationChange}
      />
      <div>
        <h2>Selected Location</h2>
        {location ? (
          <>
            <p>Latitude: {location.latitude}</p>
            <p>Longitude: {location.longitude}</p>
          </>
        ) : (
          <p>No location selected yet</p>
        )}
      </div>
    </div>
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
