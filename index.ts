import express from "express";
const app = express();
import { allInformation, allInformation2 } from "./controller";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/data", allInformation);
app.use("/api/data2", allInformation2);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
