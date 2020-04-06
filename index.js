"use strict";

const sidenotes = require("./src/remark-sidenotes-transformer")();
const wrapInSection = require("./src/wrap-in-section-transformer")();
const tufteFigureTransformer = require("./src/remark-figure-transformer")();
const tufteFigureParser = require("./src/remark-figure-parser");

module.exports = ({ markdownAST }, pluginOptions = {}) => {
  try {
    sidenotes(markdownAST);
  } catch (error) {
    console.error("Error applying sidenotes: ", error);
  }
  wrapInSection(markdownAST);
  tufteFigureTransformer(markdownAST);

  return markdownAST;
};

module.exports.setParserPlugins = (options) => {
  return [[tufteFigureParser]];
};
