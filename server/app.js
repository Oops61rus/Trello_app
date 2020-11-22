const express = require("express");
const config = require("config");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");

const routes = require("./routes");

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1", routes);

const PORT = config.get("port") || 4000;
app.listen(PORT, () => console.log(`App has been started on port: ${PORT}`));
