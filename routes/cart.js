const express = require("express");
const router = express.Router();

//Cart Controller
const {
  getCart,
  getCount,
  postCart,
  patchCart,
  deleteCart,
  clearCart,
} = require("../controllers/cartController");

//Middleware Import
const { isAuthenticated } = require("../middlewares/AuthMiddleware");

//Cart Get Route
router.get("/", isAuthenticated, getCart);

//Count Get Route
router.get("/count", isAuthenticated, getCount);

router.post("/:id", isAuthenticated, postCart);

router.patch("/:id", isAuthenticated, patchCart);


router.delete("/:id", isAuthenticated, deleteCart);


router.delete("/clear/all", isAuthenticated, clearCart);


module.exports = router;

