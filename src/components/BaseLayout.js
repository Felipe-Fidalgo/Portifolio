import React, {useState} from 'react';
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
            <Grid paddingBottom={10} item flexGrow={2}>
               <Box id="inicio" mb={{ xs: 15, md: 25 }}>
                  <Home darkMode={darkMode}/>
               </Box>
               <Box id="portifolio" mb={{ xs: 15, md: 25 }}>
                  <Portifolio/>
               </Box>
               <Box id="sobre" mb={{ xs: 15, md: 25 }}>
                  <Sobre/>
               </Box>
               <Box id="contato" mb={{ xs: 15, md: 25 }}>
                  <Contato darkMode={darkMode}/>
               </Box>
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