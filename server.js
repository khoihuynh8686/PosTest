const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); 
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/health-check', (req, res) => {
  res.json({
    status:"success"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})