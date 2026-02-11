export async function fetchWeather(location) {
    const url = 
    `http://localhost:4000/${location}`;
    const http = await fetch(url);
    if (!http.ok) throw new Error(`HTTP status ${http.status}`);
    const data = await http.json();
    return data;
}