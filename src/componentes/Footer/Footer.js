import React, { Component } from "react";
import K from "../../IMG/logo.jpg";
import "./Footer.css";

class Footer extends Component {
    state = {};
    render() {
        return ( <
            div className = "Footer" >
            <
            footer >
            <
            div className = "container_footer" >
            <
            div className = "box_footer" >
            <
            div className = "logo" >
            <
            img src = { K }
            alt = "" / >
            <
            /div> <
            div className = "terminos" >
            <
            p > ©2023 Todos los derechos reservados.CinematicaZone es una empresa dedicada al mundo del cine y entretenimiento.Nos apasiona brindar experiencias cinematográficas inolvidables y ofrecer contenido de calidad a nuestros espectadores.Explora nuestra amplia selección de películas, eventos especiales y servicios relacionados.Síguenos en nuestras redes sociales para estar al tanto de las últimas novedades y descubrir más sobre nuestro apasionante universo cinematográfico.¡Gracias por visitarnos y ser parte de nuestra comunidad cinéfila!
            <
            /p> < /
            div > <
            /div>

            <
            div className = "box_footer" >
            <
            h2 > Quienes Somos < /h2> <
            a href = "#" > Vision < /a> <
            a href = "#" > Mision < /a> <
            a href = "#" > Lo que Hacemos < /a> <

            a href = "#" > Trabaja con Nosotros < /a> < /
            div >

            <
            div className = "box_footer" >
            <
            h2 > Medios de Pago < /h2> <
            a href = "#" >
            <
            i class = "fa-solid fa-dollar-sign" > < /i> Efectivo < /
            a > <
            a href = "https://www.visa.com.co/" >
            <
            i class = "fa-brands fa-cc-visa" > < /i> Visa < /
            a > <
            a href = "https://www.paypal.com/co/home" >
            <
            i class = "fa-brands fa-paypal" > < /i> Paypal < /
            a > <
            a href = "https://encolombia.com/economia/empresas/logistica/pago-contra-entrega/" >
            <
            i class = "fa-solid fa-paper-plane" > < /i> Pago Contra Entrega < /
            a > <
            /div>

            <
            div className = "box_footer" >
            <
            h2 > Contactenos < /h2> <
            a href = "https://api.whatsapp.com/send/?phone=573105367582&text&type=phone_number&app_absent=0" >
            <
            i class = "fa-brands fa-whatsapp" > < /i> 3105367582 < /
            a > <
            a href = "#" >
            <
            i class = "fa-sharp fa-solid fa-phone" > < /i> 3105367582 < /
            a > <
            a href = "https://accounts.google.com/" >
            <
            i class = "fa-solid fa-envelope" > < /i> mariemiliana2023@gmail.com < /
            a > <
            a href = "https://goo.gl/maps/fBydmutqQSyKMpS89" >
            <
            i class = "fa-solid fa-map-location-dot" > < /i> Diagonal 42B # 40 - 22 < /
            a > <
            /div>

            <
            /div> <
            div className = "box_copyright" >
            <
            hr / >
            <
            p >
            Todos los derechos reservados® 2023 <
            b > CinematicaZone < /b> < /
            p > <
            /div> < /
            footer > <
            /div>
        );
    }
}

export default Footer;