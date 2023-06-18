import React, { Component } from "react";
import "./Contacto.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

class Contacto extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <div className="contact-content">
          <section className="form-contact">
            <header>
              <span>
                <i className="fa fa-paper-plane" aria-hidden="true"></i>
              </span>
            </header>
            <form action="" className="contact" method="POST">
              <label htmlFor="nombres">Nombres</label>
              <input type="text" name="nombres" id="nombres" />

              <label htmlFor="correo">Correo</label>
              <input type="text" name="correo" id="correo" />

              <label htmlFor="celular">Celular</label>
              <input type="text" name="celular" id="celular" />

              <label htmlFor="mensaje">Mensaje</label>
              <textarea name="mensaje" id="mensaje"></textarea>
              <input type="submit" value="Enviar" />
            </form>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contacto;
