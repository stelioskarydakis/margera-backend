const express = require("express");
const cors = require("cors");
const subscriberRoutes = require("./routes/subscriberRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Subscriber API!");
});
app.use("/api/subscribers", subscriberRoutes);
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
