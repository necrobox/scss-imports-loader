module.exports = function (source) {
  const { paths = [] } = this.getOptions();
  return paths.map(x => `@import '${x}';`).join('\n') + source;
};
