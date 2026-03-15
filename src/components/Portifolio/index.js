import React, { useState } from 'react';
import { motion } from "framer-motion";
import Container from "@mui/material/Container";
import './Portifolio.module.scss';
import DialogSide from '../Dialog';
import PortifolioEmpresa from '../PortifolioEmpresa';
import TextField from '@mui/material/TextField';


export default function Portifolio() {
  const inputStyle = { input: { color: '#2cb649', width: 660 } }
  const [permite, setPermite] = useState("");

 function hundle(text){
  setPermite(text);
  window.scroll(300,1000);
 }

  return (
    <Container className='area' fixed>
      <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }} className="content">
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <h1>Portifolio</h1>
        </div>
        <hr />
        <DialogSide />
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: 25, marginBottom:50 }}>
          <TextField type="password" style={{ width:'60vw'}} color="success" focused sx={inputStyle} onChange={(e) => hundle(e.target.value) } label="Digite o Codigo para ver mais" id="custom-css-outlined-input" />
        </div>
          {permite == "trabalho" &&
            <div>
              <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: 25 }}>
                <h1>Projetos Empresa</h1>
              </div>
              <hr />
              <PortifolioEmpresa />
            </div>
          }
          <br />
      </motion.div>
    </Container>
  )
}