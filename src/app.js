require("dotenv").config();
const loginUserRoutes = require("./routes/loginUserRoutes");

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/data/users", loginUserRoutes);

const PORT = 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
project_id;
