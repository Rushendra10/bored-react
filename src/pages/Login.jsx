import { React, useState } from "react";
import classes from "./Login.module.css";
import login from "../assets/login.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";

function Login({ loggedUser, changeLoggedUser, userList }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate=useNavigate();

  const tryLogin = (e) => {
    e.preventDefault();
    let u = userList.filter((us) => {
      return us.email === email;
    });
    if (u.length === 0) {
      alert("User does not exist. Please register yourself.");
    }
    if (u[0].password === password) {
      changeLoggedUser(u[0]);
      navigate("/");
    } else {
      alert("Incorrect password please try again");
    }
  };

  return (
    <div className={`${classes.body}`}>
        <div className={`${classes.container}`}>
          <div className={`${classes.row} row no-gutters`}>
            <div className={`${classes.collog6} col-lg-6`}>
              <a href="/">
                <img src={login} alt="" className="img-fluid" />
              </a>
            </div>

            <div
              className={`${classes.collog6} col-lg-6 left-pane my-auto mx-auto`}
            >
              <h4 className={`${classes.hea}`}> Sign into your account</h4>
              <form action="/" onSubmit={tryLogin}>
                <div className="form-row">
                  <div className={`${classes.collog6} col-lg-6`}>
                    <div className="form-floating mb-3">
                      <input
                        name="email"
                        type="email"
                        className="form-control p email"
                        id="floatingInput"
                        placeholder="name@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className={`${classes.collog6} col-lg-6`}>
                    <div className="form-floating mb-3">
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        id="floatingInput"
                        placeholder="**********"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label htmlFor="floatingInput">Password</label>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className={`${classes.collog6} col-lg-6`}>
                    <button
                      type="submit"
                      className={`${classes.container} container ${classes.btn} btn-primary btn-lg`}
                      onClick={tryLogin}
                    >
                      Login
                    </button>
                  </div>
                </div>

                <Link to="#"> Forgot Password?</Link>

                <p>
                  Don't have an account? <a href="/register">Register here</a>
                </p>
              </form>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Login;
