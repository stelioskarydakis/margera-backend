const campaignMonitorService = require("../services/campaignMonitorService");

const getSubscribers = async (req, res) => {
  const {
    page = 1,
    pagesize = 10,
    orderField = "email",
    orderDirection = "asc",
  } = req.query;

  try {
    const data = await campaignMonitorService.getSubscribers(
      page,
      pagesize,
      orderField,
      orderDirection
    );
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addSubscriber = async (req, res) => {
  const { email, name } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: "Email and Name are required" });
  }

  try {
    await campaignMonitorService.addSubscriber(email, name);
    res.json({ message: "Subscriber added!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removeSubscriber = async (req, res) => {
  const { email } = req.params;

  try {
    await campaignMonitorService.removeSubscriber(email);
    res.json({ message: "Subscriber removed!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getSubscribers,
  addSubscriber,
  removeSubscriber,
};
