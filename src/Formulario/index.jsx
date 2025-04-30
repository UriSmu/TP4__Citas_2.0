import './Formulario.css';

const Formulario = () => {

  return (
    <div class="one-half column">
      <h2>Crear mi Cita</h2>
      <form onSubmit={() => setCitas(citas+={mascota: formData.get('mascota'),
                                             propietario: formData.get('propietario'),
                                             fecha: formData.get('fecha'),
                                             hora: formData.get('hora'),
                                             sintomas: formData.get('sintomas'),})}>
        <label>Nombre Mascota</label>
        <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota"/>
        <label>Nombre Dueño</label>
        <input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota"/>
        <label>Fecha</label>
        <input type="date" name="fecha" class="u-full-width" min={new Date().toISOString().split("T")[0]}/>
        <label>hora</label>
        <input type="time" name="hora" class="u-full-width" min="09:00" max="18:00" step="1200"/>
        <label>Sintomas</label>
        <textarea name="sintomas" class="u-full-width"></textarea>
        <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
      </form>
    </div>
  );
}

export default Formulario;