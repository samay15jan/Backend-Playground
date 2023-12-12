require('dotenv').config()

const express = require('express')

const app = express()

const port = process.env.PORT || 3000

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: "001",
            title: "Joke 1",
            content: "This is joke 1"
        },
        {
            id: "002",
            title: "Joke 2",
            content: "This is joke 2"
        },
        {
            id: "003",
            title: "Joke 3",
            content: "This is joke 3"
        },
        {
            id: "004",
            title: "Joke 4",
            content: "This is joke 4"
        }
    ];
    res.send(jokes);
})

app.listen(port, () => {
    console.log(`Listening at https://localhost:${port}`)
})