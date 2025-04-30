import './Formulario.css';
import { useState } from 'react';

//ESTA FUNCIÓN, LO QUE VA A HACER, ES TOMAR EL VALOR DEL FORMULARIO ACTUALIZADO EN TIEMPO REAL
const Formulario = ({ agregarCita }) => {
  const [formData, setFormData] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: '',
  });

  //ESTAS DOS FUNCIONES REALIZAN LOS CAMBIOS EN TIEMPO REAL, Y LOS TOMAN CON EL ENVÍO DEL FORM
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.mascota || !formData.propietario || !formData.fecha || !formData.hora || !formData.sintomas) {
      alert('Todos los campos son obligatorios');
      return;
    }

    const nuevaCita = {
      id: Date.now(),   //LE PREGUNTÉ A LA IA COMO TENER UN ID EN ESTE CASO, Y ME DIO LA IDEA DE USAR EL TIMESTAMP
      ...formData
    };

    if(confirm("Seguro que desea agregar la cita?")) //EL CONFIRM LO HABÍA PUESTO EN LA FUNCIÓN "agregarCita" en App; pero si no la quería agregar perdía lo que ingresé en los inputs. Ahora, no
    {
      agregarCita(nuevaCita);

      //ACÁ LIMPIAMOS EL FORM
      setFormData({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
      });
    }

  };

  return (
    <div className="one-half column">
      <h2>Crear mi Cita</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre Mascota</label>
        <input type="text" name="mascota" className="u-full-width" value={formData.mascota} onChange={handleChange} />

        <label>Nombre Dueño</label>
        <input type="text" name="propietario" className="u-full-width" value={formData.propietario} onChange={handleChange} />

        <label>Fecha</label>
        <input type="date" name="fecha" className="u-full-width" min={new Date().toISOString().split("T")[0]} value={formData.fecha} onChange={handleChange} />

        <label>Hora</label>
        <input type="time" name="hora" className="u-full-width" min="09:00" max="18:00" step="1200" value={formData.hora} onChange={handleChange} />

        <label>Síntomas</label>
        <textarea name="sintomas" className="u-full-width" value={formData.sintomas} onChange={handleChange}></textarea>

        <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
      </form>
    </div>
  );
};

export default Formulario;