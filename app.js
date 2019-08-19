const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send("andres");
});

app.listen(3000);