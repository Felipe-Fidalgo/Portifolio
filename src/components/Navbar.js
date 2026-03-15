import React, {useState} from 'react';
import Style from './Navbar.module.scss';
import {Link, useLocation} from "react-router-dom";
import {Box} from "@mui/material";
import Switch from '@mui/material/Switch';
import {info} from "../info/Info";

const links = [
    {
        name: 'Inicio',
        to: '/',
        active: 'Inicio'
    },
    {
        name: 'Sobre',
        to: '/sobre',
        active: 'Sobre'
    },
    {
        name: 'Portfolio',
        to: '/portifolio',
        active: 'Portfolio'
    },
    {
        name: 'Contato',
        to: '/contato',
        active: 'Contato'
    }
]
const label = { inputProps: { 'aria-label': 'Color switch demo' } };
export default function Navbar({darkMode, handleClick}) {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

    return (
        <Box component={'nav'} width={'100%'}>
            <Box component={'ul'} marginBottom={5} display={'flex'} justifyContent={'center'} alignItems={'center'}
                 gap={{xs: '1rem', md: '7rem'}}
                 textTransform={'lowercase'} fontSize={'3rem'}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} className={(link.active === active && !link.type) && Style.active}
                         sx={{borderImageSource: info.gradient}}>
                        <Link to={link.to} onClick={() => setActive(link.active)}>
                            {!link.type && <p style={{paddingBottom: '0.5rem'}}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Link>
                    </Box>
                ))}
                <li>
                    <Switch {...label} defaultChecked onClick={handleClick} darkMode={darkMode} color="default"/>
                </li>
            </Box>
        </Box>
    )
}