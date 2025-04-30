import { useState } from 'react';
import Formulario from './Formulario';
import Cita from './Cita';
import Listado from './Listado';

function App() {
  const [citas, setCitas] = useState([
    {
      id: 1,
      mascota: "Shaina",
      propietario: "Uriel Smucler",
      fecha: "29/05",
      hora: "10:20",
      sintomas: "Control rutinario"
    },
    {
      id: 2,
      mascota: "Pluto",
      propietario: "Mickey Mouse",
      fecha: "26/05",
      hora: "15:40",
      sintomas: "Resfrío"
    },
    {
      id: 3,
      mascota: "Negrita",
      propietario: "Pedro Gómez",
      fecha: "22/05",
      hora: "17:00",
      sintomas: "Baño y corte higienico"
    }
  ]);

  return (
    <>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <Formulario />
        <Listado citas={citas} />
      </div>
    </>
  );
}

export default App;