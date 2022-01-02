const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [
      'www.google.com',
      'images.unsplash.com',
      'www.simplyrecipes.com',
      'www.vegrecipesofindia.com',
      'cdn.vox-cdn.com',
      'lh3.googleusercontent.com',
    ],
  },
}
