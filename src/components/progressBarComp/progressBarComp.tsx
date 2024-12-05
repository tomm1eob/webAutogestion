import ProgressBar from 'react-bootstrap/ProgressBar';
import "./progressBarComp.css";
import {FaCircle } from 'react-icons/fa';

function ProgressBarComp() {
  return (
    <div className="main">
      <div>
      <h4 style={{ paddingTop: '28px' }}>Progreso de la carrera</h4>
        <div className='progressBar-Custom'>

          <ProgressBar>
            <ProgressBar striped variant="success" now={37} key={1} />
            <ProgressBar striped variant="warning" now={7} key={2} />
          </ProgressBar>

          <div className='categorias' style={{ paddingTop: '10px' }}>

            <h1 style={{ display: 'flex', alignItems: 'center', gap: '8px' , fontSize: "18px"}}>
            <FaCircle style={{ color: 'green' }} />
              Aprobadas
            </h1>
            <h1 style={{ display: 'flex', alignItems: 'center', gap: '8px' , fontSize: "18px"}}>
            <FaCircle style={{ color: 'yellow' }} />
              Regulares

          </h1>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBarComp;
