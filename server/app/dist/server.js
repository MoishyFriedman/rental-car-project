import express from "express";
const port = 4003;
const app = express();
app.get("/", (req, res) => {
    res.send("wow !!! king?!");
});
app.listen(port, () => {
    console.log("on");
    console.log("hii");
    console.log("bye");
    console.log("bye");
    console.log("bye");
});
//# sourceMappingURL=server.js.map