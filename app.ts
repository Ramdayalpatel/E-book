const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./BookManagements/routes/rotues");
const app = express()

app.use(bodyParser.json())
app.use(routes)

app.get('/', (req:any, resp: any) => {
    resp.send("welcome to ")
});
app.post("/", (req:any, resp:any) => {

});

app.listen(8081, () => {
    console.log("server is running");
})