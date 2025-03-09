// Toggle side menu visibility
const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');

menuBtn.addEventListener('click', () => {
    sideMenu.classList.toggle('show');
});

// Create gauge for Temperature
const tempGauge = new Gauge(document.getElementById('temp-gauge')).setOptions({
    angle: 0, // The span of the gauge arc
    lineWidth: 0.4, // The line thickness
    radiusScale: 1, // The radius scale of the gauge
    pointer: {
        length: 0.4, // Pointer length (from the center)
        strokeWidth: 0.035, // Pointer width
        color: '#000000' // Pointer color
    },
    limitMax: false, // Limit the max value
    colorStart: '#6FADCF', // Start color of the gauge
    colorStop: '#8FC7E9', // End color of the gauge
    strokeColor: '#E0E0E0', // Background stroke color
    generateGradient: true
});
tempGauge.set(50); // Set initial value for temperature gauge (e.g., 50°C)

// Create gauge for Humidity
const humidityGauge = new Gauge(document.getElementById('humidity-gauge')).setOptions({
    angle: 0.15,
    lineWidth: 0.3,
    radiusScale: 1,
    pointer: {
        length: 0.9,
        strokeWidth: 0.035,
        color: '#000000'
    },
    limitMax: false,
    colorStart: '#6FCF97',
    colorStop: '#A4F9B2',
    strokeColor: '#E0E0E0',
    generateGradient: true
});
humidityGauge.set(60); // Set initial value for humidity gauge (e.g., 60%)

// Create gauge for Rainfall
const rainfallGauge = new Gauge(document.getElementById('rainfall-gauge')).setOptions({
    angle: 0.15,
    lineWidth: 0.3,
    radiusScale: 1,
    pointer: {
        length: 0.9,
        strokeWidth: 0.035,
        color: '#000000'
    },
    limitMax: false,
    colorStart: '#A4C6F9',
    colorStop: '#6A95FF',
    strokeColor: '#E0E0E0',
    generateGradient: true
});
rainfallGauge.set(20); // Set initial value for rainfall gauge (e.g., 20mm)

// Create gauge for Soil Moisture
const soilGauge = new Gauge(document.getElementById('soil-gauge')).setOptions({
    angle: 0.15,
    lineWidth: 0.3,
    radiusScale: 1,
    pointer: {
        length: 0.9,
        strokeWidth: 0.035,
        color: '#000000'
    },
    limitMax: false,
    colorStart: '#A4F9A4',
    colorStop: '#6FF96F',
    strokeColor: '#E0E0E0',
    generateGradient: true
});
soilGauge.set(30); // Set initial value for soil moisture gauge (e.g., 30%)

// Button to open weather report page (using placeholder for now)
const weatherReportBtn = document.getElementById('weather-report-btn');

weatherReportBtn.addEventListener('click', () => {
    window.location.href = "weather-report.html"; // This would be the weather report page
});
