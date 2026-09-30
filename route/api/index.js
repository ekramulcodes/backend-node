const express = require("express");
const router = express.Router();


const authroute = require("./authrouter");
const productRoute = require("./productRoute");
const paymentrouter = require("./paymentrouter")
const imagerouter = require("./imagerouter")


router.use("/auth", authroute);
router.use("/product", productRoute);
router.use("/payment" , paymentrouter)
router.use("/image", imagerouter)

module.exports = router;