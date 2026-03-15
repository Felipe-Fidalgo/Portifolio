import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import './style.scss'
import { useTheme } from '@mui/material/styles';
import snake from '../../img/portfolio/snake.png'
import chat from '../../img/portfolio/chat.png'
import Plataforma from '../../img/portfolio/Plataforma.png'
import cirurgico from '../../img/portfolio/agendamentocirurgico.png'

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const [chatbool, setChat] = React.useState(false);
  const [plataforma, setPlataforma] = React.useState(false);
  const [agCirurgico, setCirurgico] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='ResponsiveDialog'>
      <div className='column'>
        <div className='column' style={{ width: '100%' }}>
          <div className='card'>
            <div className='imgs'>
              <img variant="outlined" onClick={handleClickOpen} src={snake} style={{ width: "60vw"}} />
            </div>
            <div className='descricao'>
              <img alt="javascript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
              <img alt="css" src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" />
              <img alt="node" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"></img>
              <img alt="html" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"></img>
            </div>
          </div>
          <div className='card'>
            <div className='imgs'>
              <img variant="outlined" onClick={() => setChat(true)} src={chat} style={{ width: "60vw"}} />
            </div>
            <div className='descricao'>
              <img alt="javascript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
              <img alt="css" src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" />
              <img alt="node" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"></img>
              <img alt="html" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"></img>
            </div>
          </div>
        </div>
        <div className='column'>
          <div className='card' >
            <div className='imgs'>
              <img variant="outlined" onClick={() => setPlataforma(true)} src={Plataforma} style={{ width: "60vw"}} />
            </div>
            <div className='descricao'>
              <img alt="javascript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
              <img alt="css" src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" />
              <img alt="node" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"></img>
              <img alt="mysql" src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"></img>
              <img alt="html" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"></img>
            </div>
          </div>
          </div>
      </div>



      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Jogo da cobrinha online"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Um pequeno jogo desenvolvimento no começo dos estudos de tecnologia, para aprender um pouco mais sobre node js, npm e websockets,
            o projeto é simples, podendo ter dois jogadores local ou remotamente, apenas acessando o site e controlando com diferentes teclas do teclado
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => window.location.href = "https://snakemult.herokuapp.com/"}>
            Visitar ✅
          </Button>
          <Button onClick={handleClose} autoFocus>
            Fechar ❌
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        fullScreen={fullScreen}
        open={chatbool}
        onClose={() => setChat(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Chat Online"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Um Chat desenvolvido para lidar com mensagens em tempo real, utilizando websockets com funcionalidades para enviar arquivos para todos dentro do site
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button autoFocus onClick={() => window.location.href = "https://snakemult.herokuapp.com/"}>
            Visitar ✅
          </Button> */}
          <Button onClick={() => setChat(false)} autoFocus>
            Fechar ❌
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        fullScreen={fullScreen}
        open={plataforma}
        onClose={() => setPlataforma(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Plataforma de Comunicação entre Cliente e Empresa"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            A proposta do projeto é aplicar conceitos de desenvolvimento web utilizando as tecnologias Firebase e React JS para criar uma plataforma de gestão de tickets, leads e clientes sem nicho. A combinação dessas tecnologias permitirá criar uma aplicação escalável, de alto desempenho e com recursos modernos de desenvolvimento web. Além disso, o uso do SQL Server como sistema de gerenciamento de banco de dados relacional irá garantir a integridade e segurança dos dados armazenados na plataforma. O projeto também utilizará o Node JS para a construção do back-end, possibilitando a criação de APIs REST para integração com outras aplicações.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button autoFocus onClick={() => window.location.href = "https://snakemult.herokuapp.com/"}>
            Visitar ✅
          </Button> */}
          <Button onClick={() => setPlataforma(false)} autoFocus>
            Fechar ❌
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        fullScreen={fullScreen}
        open={agCirurgico}
        onClose={() => setCirurgico(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Plataforma de Comunicação entre Cliente e Empresa"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          Um projeto de agendamento cirúrgico web, desenvolvido em PHP com banco de dados Firebird, tem como objetivo principal permitir o agendamento de cirurgias em um hospital. O sistema é desenvolvido em PHP e todas as informações inseridas no sistema são armazenadas diretamente no banco de dados Firebird. As informações armazenadas no banco de dados podem ser consumidas por outras aplicações do hospital
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button autoFocus onClick={() => window.location.href = "https://snakemult.herokuapp.com/"}>
            Visitar ✅
          </Button> */}
          <Button onClick={() => setCirurgico(false)} autoFocus>
            Fechar ❌
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
