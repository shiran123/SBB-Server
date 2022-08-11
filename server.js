const express = require("express");
const app = express();
let port = process.env.PORT || 3001

app.use(express.json());

require("./DBCon").connect();

require('./Routes/User').User(app);

app.get( "/" , (req,res) => {
  res.send("API is online...");  
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});