import React, {useState, useEffect} from 'react';
import Style from './Navbar.module.scss';

import {Box} from "@mui/material";
import Switch from '@mui/material/Switch';
import {info} from "../info/Info";

const links = [
    {
        name: 'Inicio',
        to: 'inicio',
        active: 'inicio'
    },
    {
        name: 'Portfolio',
        to: 'portifolio',
        active: 'portifolio'
    },
    {
        name: 'Sobre',
        to: 'sobre',
        active: 'sobre'
    },
    {
        name: 'Contato',
        to: 'contato',
        active: 'contato'
    }
]
const label = { inputProps: { 'aria-label': 'Color switch demo' } };
export default function Navbar({darkMode, handleClick}) {
    const [active, setActive] = useState('inicio');

    useEffect(() => {
        const handleScroll = () => {
            const sections = links.map(link => document.getElementById(link.to));
            const scrollPosition = window.scrollY + 200;

            let currentActive = 'inicio';
            sections.forEach(section => {
                if (section && section.offsetTop <= scrollPosition) {
                    currentActive = section.id;
                }
            });
            setActive(currentActive);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        setActive(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box component={'nav'} width={'100%'} position={'sticky'} top={0} zIndex={1000} bgcolor={darkMode ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'} py={2}>
            <Box component={'ul'} marginBottom={1} display={'flex'} justifyContent={'center'} alignItems={'center'}
                 gap={{xs: '1rem', md: '7rem'}}
                 textTransform={'lowercase'} fontSize={'3rem'} style={{margin: 0, padding: 0}}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} className={(link.active === active && !link.type) ? Style.active : ''}
                         sx={{borderImageSource: info.gradient}} style={{listStyle: 'none'}}>
                        <a href={`#${link.to}`} onClick={(e) => { e.preventDefault(); scrollToSection(link.to); }} style={{cursor: 'pointer', textDecoration: 'none'}}>
                            {!link.type && <p style={{paddingBottom: '0.5rem', margin: 0}}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </a>
                    </Box>
                ))}
                <li style={{listStyle: 'none'}}>
                    <Switch {...label} defaultChecked onClick={handleClick} checked={darkMode} color="default"/>
                </li>
            </Box>
        </Box>
    )
}