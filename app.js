const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req,res) => {
    res.send("welcome to shop easy all");
})

app.listen(PORT, () =>{
    console.log(`your server is running on port ${PORT}`);
})
