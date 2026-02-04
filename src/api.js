export async function fetchWeather(location) {
    const key = 'FWSRJVGF9QVFUKKEAX5AFXTKA';
    const url = 
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${key}`;
    const http = await fetch(url);
    if (!http.ok) throw new Error(`HTTP status ${http.status}`);
    const data = await http.json();
    console.log(data);
    return data;
}