import ProgressBar from 'react-bootstrap/ProgressBar';
import "./progressBarComp.css";
import {FaCircle } from 'react-icons/fa';

function ProgressBarComp() {
  return (
    <div className="main">
      <div>
      <h4>Progreso de la carrera</h4>
        <div className='progressBar-Custom' style={{ paddingBottom: '10px' }}>
          <ProgressBar>
            <ProgressBar striped variant="success" now={35} key={1} />
            <ProgressBar striped variant="warning" now={20} key={2} />
          </ProgressBar>
        </div>
        <div className='categorias'>
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
  );
}

export default ProgressBarComp;
