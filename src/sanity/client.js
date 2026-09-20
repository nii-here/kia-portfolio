// Connect the website directly to Sanity's content API.
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "1s7dnh3o",
  dataset: "production",
  apiVersion: "2025-05-06",
  useCdn: false,
});