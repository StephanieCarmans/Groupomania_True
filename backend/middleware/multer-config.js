const multer = require("multer");

//extensions autorisées
const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};
//parametrage du fichier de destination pour les images
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  //creation du nom de fichier pour les images
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_").split("")[0];
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + "." + extension);
    req.filename = name;
  },
});

module.exports = multer({ storage }).fields([
    { name: 'message', maxCount: 1 },
    { name: 'image', maxCount: 1 },
  ])
