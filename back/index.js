const express = require("express");
const cors = require("cors");
const app = express();
const infoRoute = require("./routes/info");

app.use(cors());
app.use(express.json());

// Роуты
const documentsRoute = require("./routes/documents");
app.use("/api/documents", documentsRoute);
app.use("/api/info", infoRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
