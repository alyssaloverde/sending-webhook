const webhook_url = "https://api.particle.io/v1/devices/0a10aced202194944a04bfd0/blink1/?access_token=ffa70b383d29d83fe9427163b6607f9e9d0dabf9"

document.getElementById('lightButton').addEventListener('click', () => {
    fetch(webhook_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer <your_access_token>'
        },
        body: new URLSearchParams({
            arg: 'on' // Command to send to the device
        })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Failed to call Particle function');
        }
    })
    .then(data => {
        console.log('LED light-up command sent:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});