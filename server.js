const express = require("express");
const cors = require("cors");
const subscriberRoutes = require("./routes/subscriberRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.use("/api/subscribers", subscriberRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
