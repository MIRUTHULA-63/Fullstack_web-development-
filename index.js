import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import crudroutes from "./routes/crudroutes/index.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT;
app.use(bodyparser.json());
app.use("/customer", crudroutes);
app.use("/restaurant", crudroutes);
app.use("/reservationfeilds",crudroutes);

mongoose
  .connect(
    "mongodb+srv://miruthuladhanasekar:1234@cluster0.syzzf.mongodb.net/restaur"
  )
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log("server started in this system." + PORT);
    });
  });
