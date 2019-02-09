const express = require("express");
const contactController = require("../services/contact/ctrl");

const router = express.Router();

router.get("/", function(req, res) {
  res.json({
    message: "success",
    status: 200
  });
});

// Contact routes
router
  .route("/contacts")
  .get(contactController.getAll)
  .post(contactController.create);

router
  .route("/contacts/:id")
  .get(contactController.getById)
  .patch(contactController.update)
  .put(contactController.update)
  .delete(contactController.delete);

module.exports = router;
