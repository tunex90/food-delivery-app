function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    document.getElementById('location').textContent = `📍 ${lat.toFixed(2)}, ${lon.toFixed(2)}`;
}

function showError(error) {
    document.getElementById('location').textContent = "📍 Location unavailable";
}

getLocation();
