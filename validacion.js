document.getElementById('contactForm').addEventListener('submit', function(event) {
    const nombreApellido = document.getElementById('nombreapellido').value.trim();
    const correoElectronico = document.getElementById('correoelectronico').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    
    if (nombreApellido === '') {
        alert('Por favor, ingrese su nombre y apellido.');
        event.preventDefault(); 
        return;
    }
    
    if (correoElectronico === '') {
        alert('Por favor, ingrese su correo electrónico.');
        event.preventDefault();
        return;
    }
    
    if (!isValidEmail(correoElectronico)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        event.preventDefault();
        return;
    }
    
    if (telefono === '') {
        alert('Por favor, ingrese su número de teléfono.');
        event.preventDefault();
        return;
    }
    
    if (!isValidPhone(telefono)) {
        alert('Por favor, ingrese un número de teléfono válido en el formato (XXX) XXXX XXXX.');
        event.preventDefault();
        return;
    }
    
    if (mensaje === '') {
        alert('Por favor, ingrese su mensaje.');
        event.preventDefault();
        return;
    }
       
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
       const phoneRegex = /^\(\d{3}\) \d{4} \d{4}$/;
    return phoneRegex.test(phone);
}