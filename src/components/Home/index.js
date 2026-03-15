import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "./home.mudule.scss";

import perfil from "../../img/perfil3-removebg-preview.png";
import js from "../../img/logos/js.png";
import css from "../../img/logos/css3.webp";
import html from "../../img/logos/html.webp";
import php from "../../img/logos/php.png";
import py from "../../img/logos/py.png";
import react_logo from "../../img/logos/react_logo.png";
import vscode from "../../img/logos/vscode.png";
import figma from "../../img/logos/figma.png";
import node from "../../img/logos/nodejs.png";
import { motion } from "framer-motion";
const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const MotionCirculo = ({ element }) => {
  const [valor,setValor] = useState(1)
  return (<motion.div
    onMouseEnter={() => setValor(1.4)}
    onMouseLeave={() => setValor(1)}
    className=""
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: valor }}
    transition={{
      duration: 0.8,
      delay: 0.2,
      ease: [0, 0.71, 0.2, 1.01],
    }}>
    {element}
  </motion.div>)
}

export default function Home({ darkMode }) {
  const [valor, setVal] = useState(1);


  return (
    <Container className="cont" fixed>
      {perfil &&
        <>
          <div className="content">
            <motion.div
              className="box"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: valor }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              style={darkMode ? { backgroundColor: "rgb(92, 92, 92)" } : { backgroundColor: "rgb(168, 168, 168)" }}>
              <img src={perfil} onMouseEnter={() => setVal(1.1)} onMouseLeave={() => setVal(1)} />
              <motion.div
                className="text-box"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <h1>Saudações!✌</h1>
                <h2>
                  Meu nome é <strong>Felipe Fidalgo</strong>
                </h2>
                <p>Sou desenvolvedor full-stack e desenvolvido para servir a tecnologia</p>
                <a href="#sobre">
                  <button>Conheça-me Melhor 💭</button>
                </a>
                <a href="#contato">
                  <button>Fale Comingo🤓</button>
                </a>
              </motion.div>
            </motion.div>
            <div className="social-box">
              <ul>

                <a href="https://www.linkedin.com/in/felipe-fidalgo-04b622128/"><li>Linkedin</li></a>
                <a href="https://www.instagram.com/fidalgo.fe/"><li>Instagram</li></a>
                <a href="https://github.com/FelipeFidalgo19"><li>GitHub</li></a>
              </ul>
            </div>
          </div>
          <h2>Tecnologias</h2>
          <hr />
          <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{
            duration: 0.8,
            delay: 1.3,
            ease: [0, 0.71, 0.2, 1.01],
          }} className="content-buttom">

            <MotionCirculo element={<img src={js}   className="circulo" />} />
            <MotionCirculo element={<img src={react_logo}   className="circulo" />} />
            <MotionCirculo element={<img src={css}   className="circulo" />} />
            <MotionCirculo element={<img src={html}   className="circulo" />} />
            <MotionCirculo element={<img src={node} style={{ backgroundColor: '#fff' }}   className="circulo" />} />
            <MotionCirculo element={<img src={figma}   className="circulo" />} />
            <MotionCirculo element={<img src={py}   className="circulo" />} />
            <MotionCirculo element={<img src={php} style={{ backgroundColor: '#fff' }}   className="circulo" />} />
            <MotionCirculo element={<img src={vscode} style={{ backgroundColor: '#fff' }}   className="circulo" />} />
          </motion.div>
        </>
      }
    </Container>
  );
}