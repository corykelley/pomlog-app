const express = require('express');
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.get('/', (req, res) => res.send('hi there, this is working!'));
