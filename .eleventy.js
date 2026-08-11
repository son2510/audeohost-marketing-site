module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/.nojekyll': '.nojekyll' });
  eleventyConfig.addPassthroughCopy({ 'src/admin/config.yml': 'admin/config.yml' });
  eleventyConfig.addPassthroughCopy({ 'src/favicon.ico': 'favicon.ico' });
  eleventyConfig.addPassthroughCopy({ 'src/robots.txt': 'robots.txt' });
  eleventyConfig.addPassthroughCopy('src/assets');
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
