export function initLoginForm() {
  document.addEventListener("DOMContentLoaded", function () {
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);

    const adminUser = {
      correo: "admin@admin.com",
      password: "admin1234",
    };

    const form = document.getElementById("loginForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const correo = document.getElementById("correo").value.trim();
      const passwd = document.getElementById("passwd").value.trim();

      if (correo === adminUser.correo && passwd === adminUser.password) {
        M.toast({ html: "Bienvenido Administrador", classes: "green" });
        window.location.href = "/admin_panel.html"; // Si quieres React Router, puedes pasar navigate como argumento
      } else {
        M.toast({ html: "Credenciales incorrectas", classes: "red darken-2" });
      }
    });
  });
}
