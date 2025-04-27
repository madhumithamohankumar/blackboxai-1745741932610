// map.js - Leaflet map and Firebase real-time bus location tracking

// This file will be used in dashboard and map pages to show bus location

// map.js - Leaflet map and Firebase real-time bus location tracking

// Load Leaflet CSS dynamically
const leafletCssLink = document.createElement('link');
leafletCssLink.rel = 'stylesheet';
leafletCssLink.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
document.head.appendChild(leafletCssLink);

// Load Leaflet JS dynamically
const leafletScript = document.createElement('script');
leafletScript.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
leafletScript.onload = () => {
  initMap();
};
document.head.appendChild(leafletScript);

function initMap() {
  // Initialize the map centered at a default location
  const map = L.map('map').setView([20.5937, 78.9629], 5); // Centered on India

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Custom bus icon
  const busIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/61/61231.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
  });

  // Marker for bus location
  const busMarker = L.marker([20.5937, 78.9629], { icon: busIcon }).addTo(map);

  // Initialize Firebase database reference
  const db = firebase.database();
  const busLocationRef = db.ref('bus/location');

  // Listen for location updates
  busLocationRef.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data && data.latitude && data.longitude) {
      const latLng = [data.latitude, data.longitude];
      busMarker.setLatLng(latLng);
      map.setView(latLng, 15);
    }
  });
}
