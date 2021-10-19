import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import GetAPI from "../../services/getAPI";

const FormContact = () => {
  const [Form, setForm] = useState({
    firstname: "",
    lastname: "",
    adress: "",
    phone: "",
    email: "",
    type: "",
    years: "",
    offre: "",
  });

  const [state, setState]=useState("")

  useEffect(() => {
   
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      firstname: Form.firstname,
      lastname: Form.lastname,
      adress: Form.adress,
      phone: Form.phone,
      email: Form.email,
      type: Form.type,
      years: Form.years,
      offre: Form.offre,
    };

    GetAPI.createDiagnostic(data).then(function (response){
      
        setState(true)
    }).catch(function (error){
        
        setState(false)
    })
  };

  const handleChange=(event)=>{
      setForm({...Form, [event.target.name]:event.target.value})
  }

  let success;
  if(state===true){
      success=<h5 className="h5">Le formulaire à bien été envoyé.Vous recevrez d'ici peu un mail.</h5>;
  }else if(state===false){
    success=<h5 className="h5">Saisissez tous les champs du formulaire.</h5>;
  }

  return (
    <>
      <section className="container py-4 pt-5">
        <h1 className="h3 text-center font-weight-bold mt-3 mb-4">
          <div className="row justify-content-center">
            <div className="col-md-4 ">
              <form onSubmit={handleSubmit}>
                <div className="">
                  <p className="">Déposer un diagnostic gratuitement.</p>
                </div>
                <div>{success}</div>
                <br />
                <div className="">
                  <select value={Form.type} onChange={handleChange} className="form-control " name="type" id="">
                    <option >Séléctionner votre type de bien...</option>
                    <option value="299"> Type A : 299</option>
                    <option value="199">Type A : 199</option>
                    <option value="99">Type A : 99</option>

                    <option value="249"> Type B : 249</option>
                    <option value="149">Type B : 149</option>
                    <option value="49">Type B : 49</option>
                  </select>
                  <br />
                  <select value={Form.years} onChange={handleChange} className="form-control " name="years" id="">
                    <option>
                      Séléctionner votre année de construction...
                    </option>
                    <option value="Avant 1949"> Avant 1949</option>
                    <option value="1949-1997">1949 - 1997</option>
                    <option value="Après 1997">Après 1997</option>
                  </select>
                  <br />
                  <input
                  name="offre"
                  value={Form.offre}
                  onChange={handleChange}
                    type="text"
                    className="form-control"
                    placeholder="Offre"
                  />
                  <br />
                  <input
                  name="lastname"
                  value={Form.lastname}
                  onChange={handleChange}
                    type="text"
                    className="form-control"
                    placeholder="Nom"
                  />
                  <br />
                  <input
                  name="firstname"
                  value={Form.firstname}
                  onChange={handleChange}
                    type="text"
                    className="form-control"
                    placeholder="Prénom"
                  />
                  <br />
                  <input
                  name="adress"
                  value={Form.adress}
                  onChange={handleChange}
                    type="text"
                    className="form-control"
                    placeholder="Adresse"
                  />
                  <br />
                  <input
                  name="email"
                  value={Form.email}
                  onChange={handleChange}
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                  <br />
                  <input
                  name="phone"
                  value={Form.phone}
                  onChange={handleChange}
                    type="text"
                    className="form-control"
                    placeholder="Numéro de téléphone"
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

export default FormContact;
