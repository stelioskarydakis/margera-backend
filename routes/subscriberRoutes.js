const express = require("express");
const router = express.Router();
const subscriberController = require("../controllers/subscriberController");

router.get("/", subscriberController.getSubscribers);
router.post("/", subscriberController.addSubscriber);
router.delete("/:email", subscriberController.removeSubscriber);

module.exports = router;
