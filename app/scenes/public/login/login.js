export function login() {
  const root = document.getElementById('root');
  root.innerHTML = `
  <form>
    <h1>Bienvenido al Login</h1>
    <input type="text" placeholder = "Ingrese su usuario"><br><br>
    <input type="password" name="" id="" placeholder = "Ingrese su contraseña"><br><br>
    <input type="button" value="Ingresar"><br>
  </form>
  `;
}