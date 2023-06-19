import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Login.css";
class Login extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <div className="login-content">
          <div className="formulario">
            <br />
            <h2>Inicio sesion</h2>
            <form method="post">
              <div className="username">
                <input type="text" required />
                <label>Nombre de Usuario</label>
              </div>
              <div className="contrasena">
                <input type="password" required />
                <label>Contraseña</label>
              </div>
              <div className="recordar">¿Olvido su Contraseña?</div>
              <input type="submit" value="Iniciar" />
              <div className="registrarse">
                 <a href="#">Quiero Registrarme</a>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;
