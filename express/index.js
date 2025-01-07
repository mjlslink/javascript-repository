import express from 'express'

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>I'm right here.</h1>")
});

app.get("/about", (req, res) => {
    res.send("<h1>About me</h1>")
});

//difference to arrow operator?
//app.post("/api/contact", function requestHandler(req, res) => {
app.post("/api/contact", (req, res) => {
    // How to get data out of request?
    
    
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contqct me on mjlslink@yahoo.com</h1>")
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});