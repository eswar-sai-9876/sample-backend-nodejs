const express = require('express');
const app = express();
const port = 4000;
app.use(express.json());
// app.get('/home',(req, res)=> {
//     res.send({
//         a: 10,
//         b: 'something'
//     })
// })
app.listen(port,()=>console.log('app listening on port:'+port));

const personRouter = require ("./routes/personStore.js");
app.use("/api", personRouter);

const studentRouter = require("./routes/studentStore.js");
app.use("/api", studentRouter);