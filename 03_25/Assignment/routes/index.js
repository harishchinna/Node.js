const express = require('express')
const app = express()
const path = require('path')
const port = 3000

/*
* Default route for the web app
*/
app.get('/', (req, res) => res.send('Welcome To Code Handbook!'))

/*
* Route to render HTML Page
*/
app.get('/renderHTML', (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, '../views')
    })
})

app.get('/details', (req,res) =>{
    res.sendFile('details.html',
{
    root:path.join(__dirname,'../views')
    })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))