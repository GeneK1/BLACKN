'use strict';

const withImages = require('next-images');

module.exports = withImages({
  reactStrictMode: true,
  images: {
    domains: ['example.com'],
  },
});
