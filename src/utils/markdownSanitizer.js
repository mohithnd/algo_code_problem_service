const marked = require("marked");
const sanitizeHTMLLibrary = require("sanitize-html");
const TurndownService = require("turndown");

function sanitizeMarkdownContent(makrdownContent) {
  const convertedHTML = marked.parse(makrdownContent);
  console.log("Converted HTML:- ", convertedHTML);
  const sanitizedHTML = sanitizeHTMLLibrary(convertedHTML, {
    allowedTags: sanitizeHTMLLibrary.defaults.allowedTags,
  });
  console.log("Sanitized HTML:- ", sanitizedHTML);
  const turndownService = new TurndownService();
  const sanitizedMarkdown = turndownService.turndown(sanitizedHTML);
  console.log("Sanitized Markdown:- ", sanitizedMarkdown);
  return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;
