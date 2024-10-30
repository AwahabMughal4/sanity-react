import { createClient } from "@sanity/client";

const client = createClient({
  projectId: '6ztgol2f',
  dataset: 'production', // replace with your actual dataset name
  apiVersion: "2023-10-23", // Use a valid UTC date string
  useCdn: true, // Set to false if you want fresh data
  token: 'skIPMVw6uFakjK4LKfkxFWTMmNpWt4NDdxeo9O8mjo6mFHwpbYT1Y2VWP1lmBwlDOQNFX2kTWrd03RlSuDxbTQn767mFHNA8ADhHRdvvfQHzpnw3UeVZWOnXc6UXFHwa8kuaE66J1v4dp6NDaXG1qrdfV4wTjHmfpOfSSRlonqJoBtYwt4QF', // Uncomment and add if using a private dataset
});

export default client;


