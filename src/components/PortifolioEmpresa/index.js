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
import treinamento from '../../img/portfolio/agendamentotreinamento.png'
import crm from '../../img/portfolio/crm.png'

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const [chatbool, setChat] = React.useState(false);
  const [plataforma, setPlataforma] = React.useState(false);
  const [agCirurgico, setCirurgico] = React.useState(false);
  const [Enfermagem, setEnfermagem] = React.useState(false);
  const [Treinamentos, setTreinamentos] = React.useState(false);
  const [Crm, setCrm] = React.useState(false);
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
        <div className='row'>
          <div className='card'>
            <div className='imgs'>
              <img variant="outlined" onClick={() => setCirurgico(true)} src={cirurgico} style={{ width: "60vw"}} />
            </div>
            <div className='descricao'>
              <img alt="javascript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
              <img alt="css" src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" />
              <img alt="mysql" src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"></img>
              <img alt="php" src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white"></img>
              <img alt="html" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"></img>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='card'>
            <div className='imgs'>
              <img variant="outlined" onClick={() => setTreinamentos(true)} src={treinamento} style={{ width: "60vw"}} />
            </div>
            <div className='descricao'>
              <img alt="javascript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
              <img alt="css" src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" />
              <img alt="mysql" src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"></img>
              <img alt="php" src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white"></img>
              <img alt="html" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"></img>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='card'>
            <div className='imgs'>
              <img variant="outlined" onClick={() => setCrm(true)} src={crm} style={{ width: "60vw"}} />
            </div>
            <div className='descricao'>
              <img alt="javascript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
              <img alt="css" src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" />
              <img alt="mysql" src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"></img>
              <img alt="php" src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white"></img>
              <img alt="html" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"></img>
            </div>
          </div>
        </div>
      </div>


      <Dialog
        fullScreen={fullScreen}
        open={agCirurgico}
        onClose={() => setCirurgico(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Projeto de agendamento cirúrgico web"}
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
      <Dialog
        fullScreen={fullScreen}
        open={Enfermagem}
        onClose={() => setEnfermagem(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Um aplicativo para enfermagem"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          Um aplicativo para enfermagem, disponível para Android e iOS, foi desenvolvido com Node JS e React Native, permitindo que enfermeiras verificassem informações dos pacientes, checassem os medicamentos dados a eles e localizassem o leito em que estavam internados. O aplicativo foi integrado ao sistema de gestão hospitalar, permitindo o acesso direto às informações dos pacientes. 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button autoFocus onClick={() => window.location.href = "https://snakemult.herokuapp.com/"}>
            Visitar ✅
          </Button> */}
          <Button onClick={() => setEnfermagem(false)} autoFocus>
            Fechar ❌
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        fullScreen={fullScreen}
        open={Treinamentos}
        onClose={() => setTreinamentos(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Um aplicativo para enfermagem"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          É uma ferramenta para realizar agendamentos de treinamentos de outro sistema, foi desenvolvido em PHP, javascript e com banco firebird
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setTreinamentos(false)} autoFocus>
            Fechar ❌
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        fullScreen={fullScreen}
        open={Crm}
        onClose={() => setCrm(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"CRM - Financeira"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          Essa aplicação lida com a gestão de uma financeira, utilizando uma hospedagem VPS com apache para servir o PHP, e para algumas funções em especifico é utilizado javascript para tornar tudo mais dinamico!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button autoFocus onClick={() => window.location.href = "https://snakemult.herokuapp.com/"}>
            Visitar ✅
          </Button> */}
          <Button onClick={() => setCrm(false)} autoFocus>
            Fechar ❌
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
