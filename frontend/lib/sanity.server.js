import { createClient } from "next-sanity";
import { config } from "./config.js";

export const sanityClient = createClient(config);

export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: "sk6TAmDBhALff6FUBNN5N0NUaAwfEnQNB8A5WltFdO78qEQ4jWhIMmyXvDzIqq4ROttQ3dZnqjGsuNFDrmtkDL9PgAK86z1dSb5Ayeftc5ObkrWg7FkUmc8yuchZ5CJ5eQtoLnKIIji50tRouEyOEqacrgvFZOTewkuvKtdgkc15Dq01Woti",
});

export const getClient = (usePreview) =>
  usePreview ? previewClient : sanityClient;
