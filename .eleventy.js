module.exports = function (eleventyConfig) {
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strict_filters: true,
  });

  return {
    dir: {
      input: "build",
      output: "dist",
    },
    templateFormats: [
      "md",
      "css",
      "map",
      "hbs",
      "njk",
      "gif",
      "jpg",
      "jpeg",
      "png",
      "mp3",
      "mp4",
      "pdf",
    ],
  };
};
