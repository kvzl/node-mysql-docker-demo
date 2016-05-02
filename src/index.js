const mysql = require('mysql')
const express = require('express')

const host = process.env.DB_HOST || 'localhost'
const user = process.env.DB_USER || 'root'
const password = process.env.DB_PASSWD || 'root'

const config = {
  host, user, password
}

const app = express()

app.get('/*', (req, res) => {
  const connection = mysql.createConnection(config)

  connection.connect(err => {
    if (err) {
      res.send(err)
    }
    res.send('connection id: ' + connection.threadId)
  })

})

const port = process.env.PORT || '3000'

app.listen(port, () => {
  console.log('listening on ' + port)
})
