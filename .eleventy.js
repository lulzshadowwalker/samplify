/*********************
 * Eleventy configuration
 *********************/
module.exports = function(eleventyConfig) {
  // Passthrough copy for static assets and root files
  eleventyConfig.addPassthroughCopy({
    "assets": "assets",
    "robots.txt": "robots.txt",
    "sitemap.xml": "sitemap.xml",
    "humans.txt": "humans.txt",
    "security.txt": "security.txt",
    "manifest.json": "manifest.json"
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
