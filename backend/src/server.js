import http from 'http';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 4000;
const baseURL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';

const server = http.createServer(async (req, res) => {
    const url = baseURL + req.url + `?key=${process.env.KEY}`;
    const apiRes = await fetch(url);
    if (!apiRes.ok) {
        const errorText = await apiRes.text();
        res.writeHead(apiRes.status, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify({ error: errorText}));
        return ;
    } 
    const data = await apiRes.json();
    console.log(data);
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    });
    res.end(JSON.stringify(data));
});

server.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});