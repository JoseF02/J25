document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío tradicional del formulario
    
    // Validación básica
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    
    if (nombre === '') {
        alert('Por favor ingresa tu nombre');
        return;
    }
    
    if (email === '') {
        alert('Por favor ingresa tu correo electrónico');
        return;
    }
    
    // Recolectar todos los datos del formulario
    const formData = {
        nombre: nombre,
        email: email,
        telefono: document.getElementById('telefono').value.trim(),
        edad: document.getElementById('edad').value,
        genero: document.getElementById('genero').value,
        intereses: [],
        mensaje: document.getElementById('mensaje').value.trim()
    };
    
    // Obtener intereses seleccionados
    document.querySelectorAll('input[name="intereses"]:checked').forEach(function(checkbox) {
        formData.intereses.push(checkbox.value);
    });
    
    // Aquí normalmente enviarías los datos a un servidor
    // Para este ejemplo, solo los mostraremos en la consola
    console.log('Datos del formulario:', formData);
    
    // Mostrar mensaje de éxito
    document.getElementById('mensajeExito').style.display = 'block';
    
    // Opcional: Limpiar el formulario después de 3 segundos
    setTimeout(function() {
        document.getElementById('contactForm').reset();
        document.getElementById('mensajeExito').style.display = 'none';
    }, 3000);
});