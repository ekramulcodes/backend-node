const express = require("express");
const multer = require("multer");
const router = express.Router();
const { uploadImage } = require("../../controller/imagecontroller");

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed"));
    }
  },
});

router.post("/upload", upload.single("image"), uploadImage);

module.exports = router;
