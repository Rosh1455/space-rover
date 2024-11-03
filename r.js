/// Initialize joystick
var joystick = nipplejs.create({
    zone: document.getElementById('joystick'),
    mode: 'static',
    position: { left: '75px', top: '75px' }, // Center position within the div
    color: 'blue'
});

// Listen for movement events
joystick.on('move', function (evt, data) {
    if (data) {
        console.log('Direction:', data.direction ? data.direction.angle : 'None');
        console.log('Distance:', data.distance);
    }
});

joystick.on('end', function () {
    console.log('Joystick released');
});