import { World, errorHandler, getCredentials } from "../../utils/index.js";

export const handleGetDroppedAssetsWithUniqueName = async (req, res) => {
  try {
    const credentials = getCredentials(req.query);
    const { interactivePublicKey, interactiveNonce, uniqueName, urlSlug, visitorId } = credentials;
    const { isPartial = true } = req.query;

    const world = World.create(urlSlug, {
      credentials: {
        interactiveNonce,
        interactivePublicKey,
        visitorId,
      },
    });
    const droppedAssets = await world.fetchDroppedAssetsWithUniqueName({
      isPartial,
      uniqueName,
    });

    return res.json({ droppedAssets, success: true });
  } catch (error) {
    return errorHandler({
      error,
      functionName: "handleGetDroppedAssetsWithUniqueName",
      message: "Error fetching dropped assets with unique name",
      req,
      res,
    });
  }
};
