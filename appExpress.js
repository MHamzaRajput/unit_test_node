const express = require('express');
const axios = require('axios').default;
const app = express();
const port = 3000;


app.get('/hello', async (req, res) => {
	res.json("hello world");
});

app.get('/random', async (req, res) => {
	const { data } = await axios.get('http://api.icndb.com/jokes/random');
	res.json(data);
});

module.exports = app;