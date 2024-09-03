import express from "express";
const app = express();
import allInformation from "./controller"

app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.use ('/data', allInformation)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});