import React, { useState } from "react";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import loginImage from "../images/login.png";
import logoFull from "../images/logo-full.png";

function LoginPage() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://dev.suvidhaabnk.com/public/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobile, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      // Handle successful login
      const data = await response.json();
      console.log("Login successful:", data);

      // Redirect or perform other actions upon successful login
    } catch (error) {
      setError("Invalid mobile number or password. Please try again."); // Customize error handling as needed
      console.error("Login error:", error);
    }
  };

  return (
    <div className="vh-100">
      <div className="authincation h-100">
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col-lg-6 col-md-12 col-sm-12 mx-auto align-self-center">
              <div className="login-form">
                <div className="text-center">
                  <h3 className="title">Sign In</h3>
                  <p>Sign in to your account to start using Dompact</p>
                </div>
                <form onSubmit={handleLogin}>
                  <div className="mb-4">
                    <label className="mb-1 text-dark">Mobile Number</label>
                    <input
                      type="text"
                      className="form-control"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </div>
                  <div className="mb-4 position-relative">
                    <label className="mb-1 text-dark">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="show-pass eye">
                      <i className="fa fa-eye-slash"></i>
                      <i className="fa fa-eye"></i>
                    </span>
                  </div>
                  <div className="form-row d-flex justify-content-between mt-4 mb-2">
                    <div className="mb-4">
                      <div className="form-check custom-checkbox mb-3">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckBox1"
                          required
                        />
                        <label
                          className="form-check-label mt-1"
                          htmlFor="customCheckBox1"
                        >
                          Remember my preference
                        </label>
                      </div>
                    </div>
                    <div className="mb-4">
                      <a
                        href="page-forgot-password.html"
                        className="btn-link text-primary"
                      >
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <button type="submit" className="btn btn-primary btn-block">
                      Sign In
                    </button>
                  </div>
                  <h6 className="login-title">
                    <span>Or continue with</span>
                  </h6>
                  <div className="mb-3">
                    <ul className="d-flex align-self-center justify-content-center">
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.facebook.com/"
                          className="fab fa-facebook-f btn-facebook"
                        >
                          {/* <FaFacebookF /> */}
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.google.com/"
                          className="fab fa-google-plus-g btn-google-plus mx-2"
                        >
                          {/* <FaGooglePlusG /> */}
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.linkedin.com/"
                          className="fab fa-linkedin-in btn-linkedin me-2"
                        >
                          {/* <FaLinkedinIn /> */}
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://twitter.com/"
                          className="fab fa-twitter btn-twitter"
                        >
                          {/* <FaTwitter /> */}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <p className="text-center">
                    Not registered?
                    <a
                      className="btn-link text-primary"
                      href="page-register.html"
                    >
                      Register
                    </a>
                  </p>
                </form>
                {error && <p className="text-danger">{error}</p>}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="pages-left h-100">
                <div className="login-content">
                  <a href="index.html">
                    <img src={logoFull} className="mb-3" alt="" />
                  </a>
                  <p>
                    Your true value is determined by how much more you give in
                    value than you take in payment...
                  </p>
                </div>
                <div className="login-media text-center">
                  <img src={loginImage} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
