const cloudinary = require("../config/cloudinaryconfig");

const uploadImage = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No image file provided" });
  }

  const stream = cloudinary.uploader.upload_stream(
    { folder: "u_node", resource_type: "image" },
    (error, result) => {
      if (error) {
        return res.status(500).json({ message: "Upload failed", error: error.message });
      }

      res.status(201).json({
        url: result.secure_url,
        public_id: result.public_id,
        width: result.width,
        height: result.height,
        format: result.format,
        bytes: result.bytes,
      });
    }
  );

  stream.end(req.file.buffer);
};

module.exports = { uploadImage };
