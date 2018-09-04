// Imports desktop scss files
const cssContext = require.context('../css/desktop', true, /\.(css|scss)$/);
cssContext.keys().forEach(cssContext);

// Imports desktop js files
const jsContext = require.context('../js/desktop', true, /\.(js)$/);
jsContext.keys().forEach(jsContext);