import express from "express";
import connectDB from "./config/db.js";
import router from "./routes/routes.js";
import scheduleCryptoJob from "./services/cryptoJob.js";
import dotenv from "dotenv";

const PORT = process.env.PORT || 5000;
dotenv.config();

connectDB();

const app = express();

// scheduleCryptoJob();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// app.use("/api", router);

export default app;
