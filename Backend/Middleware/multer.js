import multer from "multer";

const storage = multer.diskStorage({
  destination: "Uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});
const upload = multer({ storage });
export default upload;
