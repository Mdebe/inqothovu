/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enable static export
  images: {
    unoptimized: true // necessary for local images in static export
  }
};

module.exports = nextConfig;
