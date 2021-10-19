import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import GetAPI from "../../services/getAPI";

import "bootstrap/dist/css/bootstrap.min.css";

import "../body/form.css"
const SignUp = () => {
  const [Customer, setCustomer] = useState({
    email: "",
    password: "",
  });

  const [state, setState] = useState("");

  const [showLoading, setShowLoading] = useState(false);

  let history = useHistory();

  const handleSubmit = (event) => {
    setShowLoading(true);
    event.preventDefault();

    const data = {
      email: Customer.email,
      password: Customer.password,
    };

    GetAPI.createCustomer(data).then(function(response){
        setShowLoading(false)
        const result=response
        setState(result)
       
    }).catch(function (error){
            
    })
  };

  const handleChange = (event) => {
    setCustomer({ ...Customer, [event.target.name]: event.target.value });
  };

  let success;
  if (state === "compte creer") {
    success = history.push("/");
  } else if (state === "compte deja creer") {
    success = (
      <h5 className="h5">
        Cette adresse e-mail est déjà utilisée. Veuillez en saisir une nouvelle.
      </h5>
    );
  }


  return (
    <>
      <section className="container py-4 pt-5">
          
        <h1 className="h3 text-center font-weight-bold mt-3 mb-4">
          <div className="row justify-content-center">
            <div className="col-md-4 ">
               
              <form onSubmit={handleSubmit}>
                <div className="">
                  <p className="">Incription</p>
                </div>
                <div>{success}</div>

                <br />
                <div>
                  <input
                  name="email"
                  value={Customer.email}
                  onChange={handleChange}
                    type="email"
                    className="form-control"
                    placeholder="email"
                  />
                  <br />
                  <input
                  name="password"
                  value={Customer.password}
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

export default SignUp;
