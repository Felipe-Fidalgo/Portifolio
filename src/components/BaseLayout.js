import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "./Home";
import Portifolio from "./Portifolio";
import Sobre from "./Sobre";
import Contato from "./Contato";
import {Box, Grid} from "@mui/material";

import { HeadphonesSharp } from '@mui/icons-material';

export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(true);

   function handleClick() {
        setDarkMode(!darkMode);
   }

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display={'block'} flexDirection={'row'} minHeight={'250vh'}
               justifyContent={'space-between'}>
            <Grid item>
                <Navbar darkMode={darkMode} handleClick={handleClick}/>
            </Grid>
            <Grid marginBottom={50} item flexGrow={2}>
               <Routes>
                  <Route exact path={'/'} element={<Home darkMode={darkMode}/>}/>
                  <Route exact path={'/portifolio'} element={<Portifolio/>}/>
                  <Route exact path={'/sobre'} element={<Sobre/>}/>
                  <Route exact path={'/contato'} element={<Contato darkMode={darkMode}/>}/>
               </Routes>
            </Grid>
            {/*<Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                    py={'0.1rem'} sx={{opacity: 0.9}} width={'100%'}>
                  <p>Felipe Fidalgo &copy; 2022</p>
               </Box>
            </Grid> */}
         </Grid>
      </Box>
   )
}