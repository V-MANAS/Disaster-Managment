
import { useState } from "react";
import axios from "axios";
import "./LoginPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import NavBar from './Navbar';

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); 
  const [flashMessage, setFlashMessage] = useState("");
  const navigate = useNavigate();



  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   const loginEndpoint = role === "admin" ? "http://localhost:3001/admin/login" : "http://localhost:3001/login";
  
  //   axios
  //     .post(loginEndpoint, { email, password })
  //     .then((result) => {
  //       console.log(result);
  //       if (result.data === "Success") {
  //         setFlashMessage(
  //           `Login Successful! Redirecting to ${
  //             role === "admin" ? "Admin Dashboard" : "User Dashboard"
  //           }...`
  //         );
  //         setTimeout(() => {
  //           setFlashMessage("");
  //           navigate(role === "admin" ? "/admindashboard" : "/userdashboard"); // Redirect based on role
  //         }, 1000);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setFlashMessage("Login Failed. Please check your credentials.");
  //     });
  // };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const loginEndpoint = role === "admin" ? "http://localhost:3001/admin/login" : "http://localhost:3001/login";
  
    axios
      .post(loginEndpoint, { email, password })
      .then((result) => {
        console.log(result);
  
        if (result.data === "Success") {
          // Save login status and role in localStorage
          localStorage.setItem("loggedIn", true);
          localStorage.setItem("role", role); // Store role to identify admin or user
  
          setFlashMessage(
            `Login Successful! Redirecting to ${
              role === "admin" ? "Admin Dashboard" : "User Dashboard"
            }...`
          );
  
          setTimeout(() => {
            setFlashMessage("");
            navigate(role === "admin" ? "/admindashboard" : "/userdashboard"); // Redirect based on role
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err);
        setFlashMessage("Login Failed. Please check your credentials.");
      });
  };
  
 
  

  return (
    <div>
      <NavBar />
      
      <div className="form-container">
        {/* Flash Message */}
        {flashMessage && (
          <div className="flash-message">
            <p>{flashMessage}</p>
          </div>
        )}

        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <h2 className="title">LOGIN</h2>
           
            <div className="role-selection">
              <label>
                <input
                  type="radio"
                  name="role"
                  value="user"
                  checked={role === "user"}
                  onChange={() => setRole("user")}
                />
                User
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  checked={role === "admin"}
                  onChange={() => setRole("admin")}
                />
                Admin
              </label>
            </div>
            <span className="input-span">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </span>
            <br />
            <span className="input-span">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </span>
            <span className="span">
              <a href="/forgot">Forgot password?</a>
            </span>
            <input className="submit" type="submit" value="LOGIN" />
            <span className="span">
              Dont have an account? <Link to="/register" style={{textDecoration:"none"}}>Sign up</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;




