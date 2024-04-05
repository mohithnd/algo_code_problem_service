const marked = require("marked");
const sanitizeHTMLLibrary = require("sanitize-html");
const TurndownService = require("turndown");

function sanitizeMarkdownContent(makrdownContent) {
  const convertedHTML = marked.parse(makrdownContent);
  const sanitizedHTML = sanitizeHTMLLibrary(convertedHTML, {
    allowedTags: sanitizeHTMLLibrary.defaults.allowedTags.concat(["img"]),
  });
  const turndownService = new TurndownService();
  const sanitizedMarkdown = turndownService.turndown(sanitizedHTML);
  return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;
