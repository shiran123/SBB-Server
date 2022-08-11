const express = require("express");
const app = express();

app.use(express.json());

require("./DBCon").connect();

require('./Routes/User').User(app);

app.get( "/" , (req,res) => {
  res.send("API is online...");  
})

app.listen(3001, () => {
  console.log("Server started on port 3001");
});