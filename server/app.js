const express = require("express");
const config = require("config");
const cookieParser = require("cookie-parser");
const path = require("path");

const routes = require("./routes")

const app = express();

app.use(cookieParser());

app.use("/api/v1", routes);

const PORT = config.get("port") || 4000;
app.listen(PORT, () => console.log(`App has been started on port: ${PORT}`));
