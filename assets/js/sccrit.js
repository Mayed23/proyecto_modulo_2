//Protege el retorno de página y el cierre de sesión

 // Evitar que el botón "atrás" muestre una versión cacheada del menú

(function(){
    window.addEventListener("pageshow", function (event) {
        if (event.persisted) {
            window.location.reload();
        }
});

    //proteger vista menu
    const usuarioActivo = localStorage.getItem("usuarioActivo");
        if(!usuarioActivo){
            window.location.href="login.html"
        }
    //Cerrar sesion
        const btnLogout = document.getElementById("logout");
    if (btnLogout) {
        btnLogout.addEventListener("click", function () {
            localStorage.removeItem("usuarioActivo");
            window.location.href = "login.html";
        });
    }
})();

 
 