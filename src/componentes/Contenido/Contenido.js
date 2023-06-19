import React, { Component } from "react";
import ComediasRomanticas from "../../IMG/comedias_romanticas.jpg";
import CienciaFiccion from "../../IMG/ciencia_ficcion.jpg";
import Drama from "../../IMG/drama.jpg";
import Accion from "../../IMG/accion.jpg";
import Clases from "../../IMG/Clases.svg";
import Tienda from "../../IMG/Tienda.svg";
import Mantenimiento from "../../IMG/Mantenimiento.svg";
import blog1 from "../../IMG/blog1.jpg";
import blog2 from "../../IMG/blog2.jpg";
import blog3 from "../../IMG/blog3.jpg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Contenido.css";

class Contenido extends Component {
  state = {};
  render() {
    return (
      <div className="Contenido">
        <Navbar />
        <div className="contenedor-body container">
          <h2>"Encuentra tus películas favoritas"</h2>
          <p>
            ¡Bienvenido a CinematicaZone! Explora el fascinante mundo del cine
            en nuestra página de películas. Sumérgete en una amplia selección de
            títulos, desde clásicos atemporales hasta los éxitos más recientes
            de la gran pantalla. Descubre historias cautivadoras, personajes
            memorables y momentos emocionantes que te transportarán a nuevas
            realidades. En CinematicaZone, encontrarás información detallada
            sobre cada película, como sinopsis, reparto, calificaciones y mucho
            más. Además, podrás disfrutar de imágenes y trailers que te darán un
            vistazo a lo que te espera en cada obra cinematográfica. No importa
            si eres un cinéfilo experimentado o simplemente buscas una película
            para pasar el rato, nuestra página está diseñada para satisfacer tus
            necesidades. Explora géneros, busca por título o déjate sorprender
            con nuestras recomendaciones destacadas. ¡Prepara las palomitas,
            acomódate y disfruta de una experiencia cinematográfica única en
            CinematicaZone!
          </p>
          <a className="btn-1">información</a>
        </div>
        <section className="instrumentos">

          <div className="contenedor-instrumentos container">
            <h2>Tipos de Peliculas</h2>
            <p className='txt-p"'>
              ¡Descubre un universo de emociones y géneros cinematográficos en
              nuestra sección de tipos de películas! Sumérgete en una amplia
              variedad de opciones que abarcan desde comedias románticas que te
              harán reír y soñar con el amor, hasta películas de acción que te
              mantendrán al borde de tu asiento con emocionantes escenas de
              persecuciones y batallas épicas!
            </p>

            <div className="grupo-instrumentos">
              <div className="instrumentos-1">
                <div className="imagen0">
                  <img src={ComediasRomanticas} alt="" />
                </div>
                <h3>Comedia Romántica:</h3>
                <p>
                  Las comedias románticas son películas que combinan humor y
                  romance. Suelen contar historias divertidas y ligeras sobre
                  relaciones amorosas, enredos y situaciones cómicas. Estas
                  películas son perfectas para aquellos que buscan una dosis de
                  risas y un final feliz.
                </p>
              </div>

              <div className="instrumentos-1">
                <div className="imagen2">
                  <img src={Accion} alt="" />
                </div>
                <h3>Acción:</h3>
                <p>
                  Las películas de acción son conocidas por su ritmo rápido,
                  emocionantes escenas de lucha y espectaculares efectos
                  especiales. Siguen a héroes valientes que se enfrentan a
                  desafíos extremos, ya sea en misiones de rescate,
                  persecuciones de alta velocidad o batallas épicas. Son ideales
                  para los amantes de la adrenalina y las emociones fuertes.
                </p>
              </div>

              <div className="instrumentos-1">
                <div className="imagen3">
                  <img src={Drama} alt="" />
                </div>
                <h3>Drama:</h3>
                <p>
                  Las películas dramáticas se centran en la exploración de las
                  emociones humanas y las relaciones complejas. Abordan temas
                  profundos y a menudo presentan historias con conflictos
                  intensos, personajes profundos y actuaciones convincentes.
                  Estas películas invitan a la reflexión y pueden conmover y
                  emocionar al espectador.
                </p>
              </div>

              <div className="instrumentos-1">
                <div className="imagen4">
                  <img src={CienciaFiccion} alt="" />
                </div>
                <h3>Ciencia ficción:</h3>
                <p>
                  Las películas de ciencia ficción transportan a los
                  espectadores a mundos imaginarios y futuristas. Presentan
                  conceptos científicos o tecnológicos avanzados, explorando
                  temas como viajes en el tiempo, inteligencia artificial,
                  extraterrestres y distopías. Estas películas ofrecen una
                  mezcla de imaginación, exploración de nuevos horizontes y
                  preguntas sobre el futuro de la humanidad.
                </p>
              </div>
            </div>
            <a href="#" className="btn-1">
              informacion
            </a>
          </div>
        </section>

        <main class="servicios">
          <div className="contenedor-servicios container">
            <h2>Servicios CinematicaZone</h2>
            <div className="grupo-servicios">
              <div className="servicio-1">
                <div className="imagen5">
                  <img src={Clases} alt="" />
                </div>
                <h3>Alquiler de películas</h3>
              </div>
              <div className="servicio-1">
                <div className="imagen6">
                  <img src={Tienda} alt="" />
                </div>
                <h3>Venta de películas</h3>
              </div>
              <div className="servicio-1">
                <div className="imagen7">
                  <img src={Mantenimiento} alt="" />
                </div>
                <h3>Suscripción de streaming</h3>
              </div>
            </div>
            <p>
              Explora, elige y disfruta. Alquila, compra o accede a un catálogo
              ilimitado. Tú decides cómo disfrutar de tus películas favoritas
              con nuestros servicios de alquiler, venta y suscripción de
              streaming.
            </p>
            <a href="#" className="btn-1">
              informacion
            </a>
          </div>
        </main>

        <section className="general">
          <div className="general-1">
            <h2>algunos datos importantes sobre las películas:</h2>
            <p>
              * Las películas tienen el poder de transportarnos a diferentes
              mundos, hacernos reír, llorar, reflexionar y experimentar una
              amplia gama de emociones. Son una ventana a diferentes culturas,
              historias y perspectivas, permitiéndonos explorar y comprender
              mejor el mundo que nos rodea.
              <br />
              <br />
              * Además, las películas tienen la capacidad de influir en la
              sociedad y la cultura popular, convirtiéndose en iconos que
              perduran en la memoria colectiva. Han dado lugar a franquicias
              exitosas, personajes icónicos y citas memorables que se han
              convertido en parte de la cultura popular.
              <br />
              <br />
              * En resumen, las películas son una forma poderosa de expresión
              artística y una fuente inagotable de entretenimiento que continúa
              impactando nuestras vidas de múltiples maneras.
              <br />
              <br />
            </p>
            <a href="#" className="btn-1">
              informacion
            </a>
          </div>
          <div className="general-2"></div>
        </section>

        <section className="general">
          <div className="general-3"></div>
          <div className="general-1">
            <h2>
              algunos datos importantes sobre el cine y la industria del cine:
            </h2>
            <p>
              * Origen: El cine se considera una de las formas más jóvenes de
              arte y entretenimiento. La primera proyección pública de una
              película ocurrió el 28 de diciembre de 1895, realizada por los
              hermanos Lumière en París, Francia. Desde entonces, el cine ha
              evolucionado y se ha convertido en una industria global.
              <br />
              <br />
              * Influencia cultural: El cine ha tenido un impacto significativo
              en la cultura y la sociedad. Ha contribuido a la formación de
              identidades culturales, ha promovido el diálogo social y ha sido
              una herramienta poderosa para abordar temas importantes y generar
              conciencia sobre diferentes problemas.
              <br />
              <br />
              * Diversidad de géneros: El cine abarca una amplia variedad de
              géneros, desde comedia y drama, hasta acción, ciencia ficción,
              romance, animación y más. Cada género tiene sus características
              distintivas y atrae a diferentes públicos, lo que permite a las
              personas encontrar películas que se ajusten a sus preferencias y
              gustos individuales.
              <br />
              <br />* Festivales de cine: Los festivales de cine, como el
              Festival de Cannes, el Festival de Cine de Venecia y el Festival
              de Cine de Sundance, son eventos destacados en la industria
              cinematográfica. Estos festivales ofrecen una plataforma para
              exhibir y reconocer películas de diferentes países y promueven la
              diversidad cultural y la creatividad en el cine.
            </p>
            <a href="#" className="btn-1">
              informacion
            </a>
          </div>
        </section>

        <section className="blog container">
          <h2>BLOG</h2>
          <p>
            ¡Bienvenido al apasionante mundo del cine! En este blog, te
            invitamos a sumergirte en un universo lleno de emociones, historias
            cautivadoras y personajes inolvidables. Aquí encontrarás análisis,
            reseñas, recomendaciones y todo lo relacionado con el séptimo arte.
            Exploraremos juntos diferentes géneros cinematográficos, desde
            dramas conmovedores hasta emocionantes películas de acción, pasando
            por románticas comedias y deslumbrantes aventuras de ciencia
            ficción. Nos sumergiremos en los éxitos más recientes, descubriremos
            clásicos atemporales y exploraremos gemas ocultas que merecen ser
            conocidas. Así que prepárate para embarcarte en un viaje cinemático
            inolvidable. ¡Sintonízate con nuestro blog de películas y descubre
            la magia que solo el cine puede ofrecer!
          </p>

          <div className="contenido-blog">
            <div className="blog-1">
              <div className="imagen8">
                <img src={blog1} alt="" />
              </div>

              <h3>Blog 1</h3>
              <p>
                "Las películas son una forma de escape que nos permite
                sumergirnos en mundos imaginarios y experimentar emociones
                intensas. Es fascinante cómo una historia bien contada puede
                despertar en nosotros una amplia gama de sentimientos, desde la
                alegría y la risa hasta la tristeza y la emoción. Además, el
                cine nos brinda la oportunidad de explorar diferentes
                perspectivas y culturas, expandiendo nuestra comprensión del
                mundo y fomentando la empatía. A través de la magia del cine,
                podemos conectarnos con personajes y situaciones que, de otra
                manera, no tendríamos la oportunidad de experimentar en nuestra
                vida cotidiana. Es como si las películas nos invitaran a
                embarcarnos en un viaje emocional y nos dejaran con recuerdos
                duraderos y reflexiones que nos acompañarán mucho después de que
                las luces del cine se enciendan." - Usuario apasionado por la
                inmersión emocional que brindan las películas.
              </p>
            </div>
            <div className="blog-1">
              <div className="imagen9">
                <img src={blog2} alt="" />
              </div>

              <h3>Blog 2</h3>
              <p>
                "Una de las cosas más emocionantes del cine es su capacidad para
                desafiar nuestras expectativas y ampliar los límites de lo
                posible. A través de la creatividad y la innovación, los
                cineastas nos presentan nuevas formas de contar historias,
                utilizando técnicas visuales y narrativas sorprendentes. Desde
                secuencias de acción vertiginosas hasta efectos visuales
                asombrosos, el cine nos muestra lo que es posible cuando la
                imaginación se une a la tecnología. Además, el cine ha sido una
                fuerza impulsora en la evolución de la cultura popular,
                generando íconos, frases memorables y tendencias que se
                convierten en parte de nuestra sociedad. Es un medio poderoso
                que nos conecta y nos hace partícipes de una experiencia
                colectiva, ya sea en una sala de cine llena de gente riendo y
                llorando juntos o en las conversaciones posteriores que surgen a
                partir de una película impactante. En resumen, el cine nos
                desafía a soñar, a pensar en grande y a explorar nuevas
                posibilidades en el mundo del entretenimiento y la narrativa." -
                Usuario entusiasta de la innovación y el impacto cultural del
                cine.
              </p>
            </div>
            <div className="blog-1">
              <div className="imagen10">
                <img src={blog3} alt="" />
              </div>

              <h3>Blog 3</h3>
              <p>
                "El cine es un arte que trasciende las barreras del lenguaje y
                la cultura. Es una forma de expresión universal que nos permite
                contar historias y transmitir emociones de una manera única. Las
                películas tienen la capacidad de unir a las personas, generando
                conversaciones y debates que nos invitan a reflexionar sobre la
                condición humana y el mundo que nos rodea. Además, el cine nos
                proporciona una ventana a diferentes épocas y lugares,
                permitiéndonos explorar y comprender distintas culturas,
                costumbres y perspectivas. A través de las actuaciones, la
                dirección de arte, la cinematografía y otros elementos técnicos,
                el cine nos transporta a otro mundo y nos hace experimentar
                situaciones que, de otro modo, no tendríamos la oportunidad de
                vivir. Es una forma de arte que nos inspira, nos entretiene y
                nos desafía a ver el mundo desde una nueva perspectiva. En
                resumen, el cine es una poderosa herramienta de comunicación y
                una fuente inagotable de inspiración y entre
              </p>
            </div>
          </div>

          <a href="#" className="btn-1">
            informacion
          </a>
        </section>

        <Footer />
      </div>
    );
  }
}

export default Contenido;
