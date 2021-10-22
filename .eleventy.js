module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/style.css");
  eleventyConfig.addWatchTarget("./src/css/style.css");
  eleventyConfig.addPassthroughCopy("./src/_data");
  eleventyConfig.addPassthroughCopy({ "./src/favicon": "/" });

  eleventyConfig.addFilter("onlyText", (body) => {
    const content = body.replace(/(<([^>]+)>)/gi, "");
    return content.replace(/(\r\n|\n|\r)/gm, "");
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
    passthroughFileCopy: true,
  };
};