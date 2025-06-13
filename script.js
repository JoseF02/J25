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
    
    fetch('/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(function() {
        document.getElementById('mensajeExito').style.display = 'block';

        setTimeout(function() {
            document.getElementById('contactForm').reset();
            document.getElementById('mensajeExito').style.display = 'none';
        }, 3000);
    })
    .catch(function(error) {
        alert('Error al enviar el formulario');
        console.error(error);
    });
});