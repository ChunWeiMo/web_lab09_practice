const express = require('express');
const axios = require('axios');
const app = express();

const api_key = undefined;
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Vancouver&appid=${api_key}`
// app.get('/', (req, res) => {
//     // 使用 res.write 向響應主體寫入資料
//     res.write('Hello, \n');
//     res.write('World!');
//     res.end(); // 結束響應
// });

// 當用戶訪問根路徑時，重定向到 /new-path
// app.get('/', (req, res) => {
//     res.redirect('/new-path');
// });

// // 當用戶訪問 /new-path 時，返回一個簡單的訊息
// app.get('/new-path', (req, res) => {
//     res.send('Welcome to the new path!');
// });

app.get('/getData', async (req, res) => {
    // 使用 axios 發送 GET 請求
    const response = await axios.get(apiURL);

    // 獲取返回的 JSON 資料
    const jsonData = response.data;

    // 在 Express 響應中發送 JSON 資料
    res.json(jsonData.name);
    pageTitle = jsonData.name;
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
