import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "1s7dnh3o",
  dataset: "production",
  apiVersion: "2025-05-06",
  useCdn: false,
});