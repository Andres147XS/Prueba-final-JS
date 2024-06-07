export function register() {
  const root = document.getElementById('root');
  root.innerHTML = `
  <form>
    <h1>Bienvenido al registro</h1>
    <label>Nombre</label>
    <input type="text" placeholder = "Ingrese su nombre"><br><br>
    <label>Email</label>
    <input type="email" placeholder = "Ingrese el correo electronico"></input><br><br>
    <label>Fecha de nacimiento</label>
    <input type="text" placeholder = "Ingrese fecha de nacimiento"><br><br>
    <label>Contraseña</label>
    <input type="password" placeholder = "Ingrese su contraseña"></input><br><br>
    <input type="button" value="Registrarme">
  </form>
  `;
}
