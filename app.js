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
app.use(
  cors({
    origin: "https://igti-filipe-fsn-grades-app.herokuapp.com",
  })
);

app.get("/", (req, res) => {
  res.send("API em execucao");
});

app.use(gradeRouter);

app.listen(process.env.PORT || 8081, () => {});
