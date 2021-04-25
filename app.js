import express from "express";
import cors from "cors";

import { db } from "./models/index.js";
import { gradeRouter } from "./routes/gradeRouter.js";

(async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    process.exit();
  }
})();

const app = express();

//define o dominio de origem para consumo do servico
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const whiteList = ["https://igti-filipe-fsn-grades-app.herokuapp.com", "http://localhost:3000", "http://localhost:5000"];
app.use(
  cors({
    origin: (origin, callback) => {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  })
);

app.get("/", (req, res) => {
  res.send("API em execucao");
});

app.use(gradeRouter);

app.listen(process.env.PORT || 8081, () => {});
