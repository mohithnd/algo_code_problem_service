const express = require("express");
const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");
const errorHandler = require("./utils/errorHandler");
const connectToDB = require("./config/db.config");

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.get("/ping", (req, res) => {
  return res.status(200).json({ message: "Problem Service Is Alive" });
});

app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Server Is Listening On: ${PORT}`);
  await connectToDB();
  console.log("Successfully Connected To DB");
});
