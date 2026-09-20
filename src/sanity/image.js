import { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "./client";

// Create an image URL builder using our Sanity client.
const builder = createImageUrlBuilder(client);

// Let pages request images with custom sizes and cropping.
export function urlFor(source) {
  return builder.image(source);
}