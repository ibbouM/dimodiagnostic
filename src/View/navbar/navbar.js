import React, { useEffect, useState } from "react";
import loginService from "../../services/loginService";

import { slide as Menu } from "react-burger-menu";

import "bootstrap/dist/css/bootstrap.min.css";

import Routes from "../../routes";

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: "-1px",
  },
  bmMenu: {
    background: "#ed5545",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.8)",
  },
};

var styles2 = {
  color: "white",
};

const Navbars = () => {
  const [connect, setConnect] = useState("");
  const [register, setRegister] = useState("");
  const [contact, setContact] = useState("");

  const user = localStorage.getItem("user");

  let subscription;
  useEffect(() => {
    setConnect(user);
    setRegister(user);
    setContact(user);

    subscription = loginService.getLogin().subscribe((login) => {
      if (login) {
        setConnect(login);
        setRegister(login);
        setContact(login);
      } else {
        setConnect(false);
        setRegister(false);
        setContact(false);
      }
    });
  });

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  return (
    <>
      <Menu styles={styles}>
        <a href="/" className="text-decoration-none" style={styles2}>
          Accueil
        </a>
        <br />

        {contact ? (
          <a
            href="/contact"
            className="text-decoration-none"
            style={styles2}
          >
            Déposer un formulaire
          </a>
        ) : (
          ""
        )}

        {connect ? (
          <a
            onClick={clearLocalStorage}
            href="/"
            className="text-decoration-none"
            style={styles2}
          >
            Se déconnecter
          </a>
        ) : (
          <a href="/login" className="text-decoration-none" style={styles2}>
            Se connecter
          </a>
        )}
        <br />

        {register ? (
          ""
        ) : (
          <a
            href="/inscription"
            className="text-decoration-none"
            style={styles2}
          >
            S'inscrire
          </a>
        )}
      </Menu>

      <Routes></Routes>
    </>
  );
};

export default Navbars;
