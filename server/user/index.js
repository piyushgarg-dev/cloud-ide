const express = require('express')

const app = express()

app.get('/', (req, res) => res.json({ msg: 'hey from my own server' }));


app.listen(8000, () => console.log(`Serer Strted on port ${6000}`))
