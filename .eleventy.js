module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/.nojekyll': '.nojekyll' });
  eleventyConfig.addPassthroughCopy({ 'src/admin/config.yml': 'admin/config.yml' });
  eleventyConfig.addFilter('json', (value) => JSON.stringify(value));

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
    },
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
};
