const particle = new Particle();
let token;

particle.login({ username: 'hectorjesus029@gmail.com', password: 'PAR2002hector' }).then(
    function(data) {
        token = data.body.access_token;
    },
    function(err) {
        console.log("Could not log in.", err);
    }
);

function toggleLed(checkbox) {
    const output = document.getElementById('state1');
    const ledImage = document.getElementById('led-image');
    const isOn = checkbox.checked;
    
    // Actualizar el texto de estado y la imagen del LED
    output.innerHTML = isOn ? 'Encendido' : 'Apagado';
    ledImage.src = isOn ? 'led_on.png' : 'led_off.png';
    
    // Aplicar la clase de animación y color
    if (isOn) {
        output.classList.add('on');
    } else {
        output.classList.remove('on');
    }

    // Enviar comando al dispositivo Particle
    const Salida1 = isOn ? '1' : '0';
    particle.callFunction({ 
        deviceId: '290032000947313037363132', 
        name: 'led', 
        argument: Salida1, 
        auth: token 
    });
}
