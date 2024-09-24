import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const admin_base_url = "http://127.0.0.1:8000/api/";

const UserLoginPage = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const AdminloginUser = async (event) => {
    event.preventDefault();
    setMessage("");

    const auth_user = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    try {
      const response = await axios.post(
        admin_base_url + "Productlogin/",
        auth_user,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (response) {
        localStorage.clear();
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("refresh_token", response.data.refresh_token);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("usertype", response.data.usertype);

        setMessage("Login successful");

        try {
          await axios.post(
            admin_base_url + "generate-otp/",
            { username: response.data.username },
            {
              headers: { "Content-Type": "application/json" },
              withCredentials: true,
            }
          );
          navigate("/verify");
        } catch (otpError) {
          setMessage("Failed to generate OTP Check network connection!");
        }
      }
    } catch (error) {
      setMessage("Login details are invalid");
    }
  };

  const goToadminRegistration = () => {
    navigate("/");
  };
  const goTouserRegistration = () => {
    navigate("/");
  };
  return (
    <div className="container">
      <h2 align="center"> Login</h2>
      <br />
      <form onSubmit={AdminloginUser}>
        <table align="center">
          <tbody>
            <tr>
              <td>
                <label>Email:</label>
              </td>
              <td>
                <input type="email" id="email" name="email" required />
              </td>
            </tr>
            <tr>
              <td>
                <label>Password:</label>
              </td>
              <td>
                <input type="password" id="password" name="password" required />
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <p align="center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </p>
      </form>
      {message && <p>{message}</p>}

      <hr />
      <br />
      <p align="right" className="container">
        Go to
        <button className="btn btn-primary" onClick={goTouserRegistration}>
          User Registration page
        </button>
      </p>
      <p align="right" className="container">
        Go to
        <button className="btn btn-primary" onClick={goToadminRegistration}>
          Admin Registration page
        </button>
      </p>
    </div>
  );
};

export default UserLoginPage;
