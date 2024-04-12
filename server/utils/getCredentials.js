import { errorHandler } from "./errorHandler.js";

export const getCredentials = (query) => {
  try {
    const requiredFields = ["interactiveNonce", "interactivePublicKey", "urlSlug", "visitorId"];
    const missingFields = requiredFields.filter((variable) => !query[variable]);
    if (missingFields.length > 0) {
      throw `Missing required body parameters: ${missingFields.join(", ")}`;
    }

    if (process.env.INTERACTIVE_KEY !== query.interactivePublicKey) {
      throw "Provided public key does not match";
    }

    return {
      assetId: query.assetId,
      displayName: query.displayName,
      interactiveNonce: query.interactiveNonce,
      interactivePublicKey: query.interactivePublicKey,
      profileId: query.profileId,
      sceneDropId: query.sceneDropId,
      urlSlug: query.urlSlug,
      username: query.username,
      visitorId: Number(query.visitorId),
    };
  } catch (error) {
    return errorHandler({
      error,
      functionName: "getCredentials",
      message: "Error getting credentials from query.",
    });
  }
};
