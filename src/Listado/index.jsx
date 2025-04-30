import './Listado.css';
import Cita from '../Cita';

const Listado = ({ citas }) => {
  return (
    <div className="one-half column">
      <h2>Administra tus citas</h2>
      {citas.map((cita) => (
        <Cita
          key={cita.id}
          mascota={cita.mascota}
          propietario={cita.propietario}
          fecha={cita.fecha}
          hora={cita.hora}
          sintomas={cita.sintomas}
        />
      ))}
    </div>
  );
};

export default Listado;