import express from "express";

import * as homeController from "./controllers/home-controller";

const app = express();

app.set("port", 3000);
app.get("/", homeController.sayHello);

export default app;
