const express = require('express');
const app = express();

const api_key = `ue55e5f5c3169175f86e872b335f33dab`;
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Vancouver&appid=${api_key}`


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// app.use(express.urlencoded({ extended: true }));

app.get('/getCityweather', async (req, res) => {
    resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.cname}&appid=e55e5f5c3169175f86e872b335f33dab`);
    jsonResp = await resp.json();
    res.send(jsonResp);
})


app.get('/', (req, res) => {
    res.sendFile(__dirname + `/index.html`);
})
