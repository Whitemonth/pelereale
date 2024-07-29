import React, { useState } from "react";
import InputMask from "react-input-mask";
import "./PhoneInput.css";

const PhoneInput = () => {
  const [phone, setPhone] = useState("");

  const handleChange = (e) => {
    setPhone(e.target.value);

    let phoneArr = document.getElementById("phone").value.split("");
    let truePhone = phoneArr.filter((item) => item >= 0 && item <= 9);
    if (truePhone.length == 12) {
      document.getElementById("phonecheckalert").style.visibility = "hidden";
    }
  };

  return (
    <div className="phone_wrapper">
      <InputMask
        className="phone_input"
        mask="+7(999) 999-99-99"
        value={phone}
        onChange={handleChange}
        placeholder="+7(___) ___-__-__"
        id="phone"
      >
        {(inputProps) => <input {...inputProps} type="tel" />}
      </InputMask>
    </div>
  );
};

export default PhoneInput;
