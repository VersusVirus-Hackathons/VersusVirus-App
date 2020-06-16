import crypto from "crypto";

export const newToken = () => crypto.randomBytes(32).toString("hex");
export const getHash = (token: string) => {
  const hash = crypto.createHash("sha256");
  hash.update(token);

  return hash.digest("base64");
};
