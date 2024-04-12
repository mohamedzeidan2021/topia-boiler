import express from "express";
import {
  handleDropAsset,
  handleGetDroppedAssetsWithUniqueName,
  handleGetWorldDetails,
  handleGetDroppedAsset,
  handleGetVisitor,
  handleUpdateWorldDataObject,
  handleRemoveDroppedAssets,
  moveVisitor,
} from "./controllers/index.js";
import { getVersion } from "./utils/getVersion.js";

const router = express.Router();

router.get("/system/health", (req, res) => {
  return res.json({
    appVersion: getVersion(),
    status: "OK",
    envs: {
      NODE_ENV: process.env.NODE_ENV,
      INSTANCE_DOMAIN: process.env.INSTANCE_DOMAIN,
      INTERACTIVE_KEY: process.env.INTERACTIVE_KEY,
      S3_BUCKET: process.env.S3_BUCKET,
    },
  });
});

// Dropped Assets
router.get("/dropped-asset-with-unique-name", handleGetDroppedAssetsWithUniqueName);
router.post("/dropped-asset", handleDropAsset);
router.get("/dropped-asset", handleGetDroppedAsset);
router.delete("/dropped-asset", handleRemoveDroppedAssets);

// Visitor
router.get("/visitor", handleGetVisitor);
router.put("/visitor/move", moveVisitor);

// World
router.get("/world", handleGetWorldDetails);
router.put("/world/data-object", handleUpdateWorldDataObject);

export default router;
