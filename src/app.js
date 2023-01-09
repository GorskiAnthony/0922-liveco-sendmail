const express = require("express");
const app = express();
const mailRouter = require("./routers/mailRouter.js");

app.use(express.json());
app.use(mailRouter);
/**
 app.get("/", (req, res) => {
     res.send("Hello world!");
    });
    
    1/ on a créé un router dédié à l'envoi de mail
    router/mailRouter.js
    
    2/ on a créé un controller dédié à l'envoi de mail
    controller/mailController.js
    
    3/ on utilise un middleware pour gérer les routes
        app.use(mailRouter);
*/

module.exports = app;
