import React from "react";
import RotatedArrow from "../component/RotatedArrow";

const Test = () => {
  return (
    <div style={{ textAlign: "center", margin: "50px" }}>
      <h1>Welcome to Our Website!</h1>
      <p>Follow the arrows to understand how to use the site:</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "50px",
        }}
      >
        <div>
          <RotatedArrow angle={45} />
          <p>Click here to start</p>
        </div>
        <div>
          <RotatedArrow angle={-45} />
          <p>Check out this section</p>
        </div>
        <div>
          <RotatedArrow angle={90} />
          <p>Scroll down for more</p>
        </div>
        <div>
          <RotatedArrow angle={-90} />
          <p>Go to the top</p>
        </div>
      </div>
    </div>
  );
};

export default Test;
