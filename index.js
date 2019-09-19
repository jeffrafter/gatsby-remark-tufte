"use strict";

const sidenotes = require("@tufte-markdown/remark-sidenotes")();
const wrapInSection = require("@tufte-markdown/remark-wrap-in-section")();
const tufteFigureTransformer = require("@tufte-markdown/remark-figure-transformer")();
const tufteFigureParser = require("@tufte-markdown/remark-figure-parser");

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

module.exports.setParserPlugins = options => {
  return [[tufteFigureParser]];
};
