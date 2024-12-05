import ProgressBar from 'react-bootstrap/ProgressBar';
import "./progressBarComp.css";
import { FaCircle } from 'react-icons/fa';

function ProgressBarComp() {
  const aprobadas = 37; // Porcentaje de aprobadas
  const regulares = 7;  // Porcentaje de regulares
  const total = aprobadas;

  return (
    <div className="main">
      <div>
        <h4 style={{ paddingTop: '28px' }}>Progreso de la carrera</h4>
        <div className='progressBar-Custom'>
          {/* Barra de progreso con porcentaje */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ProgressBar className='inter-progressBar-Custom' style={{ flex: 1 }}>
              <ProgressBar striped variant="success" now={aprobadas} key={1} />
              <ProgressBar striped variant="warning" now={regulares} key={2} />
            </ProgressBar>
            <div style={{ marginLeft: '10px', fontWeight: 'bold' }}>{total}%</div>
          </div>
          {/* Leyendas debajo de la barra */}
          <div className='categorias' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px' }}>
              <FaCircle style={{ color: 'green' }} />
              Aprobadas
              <div style={{paddingLeft: "15px"}}><FaCircle style={{ color: 'yellow' }} />
              </div>
              Regulares
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBarComp;
