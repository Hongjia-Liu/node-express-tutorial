const path = require("path");

// The platform-specific file separator. '\' or '/'.
console.log(path.sep);

/**
 * Join all arguments together and normalize the resulting path.
 * Arguments must be strings.
 */
const filePath = path.join("content", "subfolder", "test.txt");
console.log(filePath);

/**
 * Return the last portion of a path.
 * Often used to extract the file name from a fully qualified path.
 */
const base = path.basename(filePath);
console.log(base);

/**
 * The right-most parameter is considered {to}.
 * Other parameters are considered an array of {from}.
 *
 * Starting from leftmost {from} parameter, resolves {to} to an absolute path.
 */
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
