export async function fetchWeather(location) {
    const url = 
    `https://weather-app-y2ns.onrender.com/${location}`;
    const http = await fetch(url);
    if (!http.ok) throw new Error(`HTTP status ${http.status}`);
    const data = await http.json();
    return data;
}