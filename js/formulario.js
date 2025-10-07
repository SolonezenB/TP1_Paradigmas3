document.getElementById("loginForm").addEventListener("submit", function(event) {
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();
            const errorMsg = document.getElementById("errorMsg");

            errorMsg.textContent = ""; // Limpia mensaje previo

            // Validar email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                errorMsg.textContent = "Ingrese un correo electrónico válido.";
                event.preventDefault();
                return;
            }

            // Validar contraseña
            if (password.length < 6) {
                errorMsg.textContent = "La contraseña debe tener al menos 6 caracteres.";
                event.preventDefault();
                return;
            }

            // Si todo está correcto
            // Aquí podrías enviar el formulario normalmente
        });