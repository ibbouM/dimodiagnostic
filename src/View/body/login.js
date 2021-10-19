import React, { useState, useEffect } from "react";
import loginService from "../../services/loginService";
import GetAPI from "../../services/getAPI";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const [loginCustomer, setLoginCustomer] = useState({
    email: "",
    password: "",
  });

  const [state, setState] = useState("");

  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: loginCustomer.email,
      password: loginCustomer.password,
    };

    GetAPI.Login(data)
      .then(function (response) {
        const res = response.data;
        
        if (res.user === true) {
          localStorage.setItem("accessToken", response.data.token);
          localStorage.setItem("id", response.data.id);
          const user = localStorage.setItem("user", response.data.user);
          setState(true);
          loginService.setLogin(user);
        }

      })
      .catch(function (error) {
        setState(false);
      });
  };

  const handleChange = (event) => {
    setLoginCustomer({
      ...loginCustomer,
      [event.target.name]: event.target.value,
    });
  };

  let success;
  if (state === true) {
    success = history.push("/");
  } else if (state === false) {
    success = <h5 className="h5">Email ou mot de passe incorrecte</h5>;
  }

  return (
    <>
      <section className="container py-4 pt-5">
        <h1 className="h3 text-center font-weight-bold mt-3 mb-4">
          <div className="row justify-content-center">
            <div className="col-md-4 ">
              <form onSubmit={handleSubmit}>
                <div className="">
                  <p className="">Connexion</p>
                </div>
                <div>{success}</div>

                <br />
                <div>
                  <input
                  name="email"
                  value={loginCustomer.email}
                  onChange={handleChange}
                    type="text"
                    className="form-control"
                    placeholder="email"
                  />
                  <br />
                  <input
                    name="password"
                    value={loginCustomer.password}
                    onChange={handleChange}
                    type="password"
                    className="form-control"
                    placeholder="mot de passe"
                  />
                </div>
                <br />
                <button type="submit">Envoyer</button>
              </form>
            </div>
          </div>
        </h1>
      </section>
    </>
  );
};

export default Login;
