function updateTime() {
    const dateElement = document.getElementById("date");
    const timeElement = document.getElementById("time");
    const locationElement = document.getElementById("location");

    const now = new Date();

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    dateElement.textContent = now.toLocaleDateString('es-ES', options);
    timeElement.textContent = now.toLocaleTimeString('es-ES');
    locationElement.textContent = "Ubicación: Tu ubicación aquí"; // Puedes reemplazar con la ubicación real si lo deseas
}

setInterval(updateTime, 1000);
updateTime();
