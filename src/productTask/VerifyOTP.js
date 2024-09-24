import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const admin_base_url = "http://127.0.0.1:8000/api/";

function VerifyOTP() {
  const [otp, setotp] = useState("");
  const navgate = useNavigate();
  const [response, setresponse] = useState(null);

  const handlesubmit = async (e) => {
    e.preventDefault();
    const username = localStorage.getItem("username");
    const usertype = localStorage.getItem("usertype");

    try {
      const response = await axios.post(
        admin_base_url + "verify-otp/",
        {
          username: username,
          otp: otp,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setresponse(response.data);

      if (response.data.success) {
        if (usertype === "user") {
          navgate("/user_dashboard");
        } else {
          navgate("/admin_dashboard");
        }
      } else {
        alert("Invalid OTP");
        navgate("/");
      }
    } catch (error) {
      if (error.response) {
        alert("Invalid OTP");
      } 

      
    }
  };

  return (
    <>
      <form onSubmit={handlesubmit}>
        <h1 align="center">Verify OTP</h1>
        <br />
        <p align="center">
          <input
            type="text"
            value={otp}
            onChange={(e) => setotp(e.target.value)}
            required
          />
        </p>
        <p align="center">
          <button type="submit" className="btn btn-primary">
            Verify
          </button>
        </p>
      </form>
    </>
  );
}

export default VerifyOTP;
