const express = require("express");
const bookRouter = require("./api/routes");
const connectDb = require("./database");
const morgen = require("morgan");
const app = express();
//mid
app.use(morgen("dev"));
app.use(express.json());
//rout
app.use("/api/books/", bookRouter);
//notf
app.use((res, req, next) => {
  return res.status(404).json({ messge: "path not found" });
});
//err
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json(err.messge || "server error");
});

const PORT = 8000;
connectDb();
app.listen(PORT, () => {
  console.log(`conected${PORT} `);
});
