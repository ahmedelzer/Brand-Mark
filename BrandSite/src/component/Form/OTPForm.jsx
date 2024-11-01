import React, { useState, useRef, useEffect, useContext } from "react";
import { otpStyles as styles } from "./styles"; // Importing the styles
import { LanguageContext } from "../../context/Language";

const OTPForm = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const { localization } = useContext(LanguageContext);
  const handleKeyDown = (e, index) => {
    if (
      !/^[0-9]{1}$/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "Tab" &&
      !e.metaKey
    ) {
      e.preventDefault();
    }

    if (e.key === "Delete" || e.key === "Backspace") {
      if (index > 0) {
        setOtp((prev) => {
          const newOtp = [...prev];
          newOtp[index - 1] = "";
          return newOtp;
        });
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleInput = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      setOtp((prev) => {
        const newOtp = [...prev];
        newOtp[index] = value;
        return newOtp;
      });

      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text").slice(0, 6);
    if (/^[0-9]{6}$/.test(text)) {
      setOtp(text.split(""));
      inputRefs.current[3].focus(); // Move focus to the last input
    }
  };

  useEffect(() => {
    if (inputRefs.current) {
      inputRefs.current.forEach((input) => {
        input.addEventListener("paste", handlePaste);
      });
    }
    return inputRefs.current.forEach((input) => {
      input.removeEventListener("paste", handlePaste);
    });
  }, [inputRefs.current]);

  return (
    <div className={styles.otpContainer}>
      <div className={styles.otpInputContainer}>
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            className={styles.otpInput}
            maxLength="1"
            value={digit}
            onChange={(e) => handleInput(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onFocus={handleFocus}
          />
        ))}
        <input type="y" name={"CodeNumber"} value={otp.join("")} />
      </div>
      <div className={styles.resendText}>
        {localization.formSteps.otp.notReceive}{" "}
        <a className={styles.resendLink} href="">
          {localization.formSteps.otp.resend}
        </a>
      </div>
    </div>
  );
};

export default OTPForm;
