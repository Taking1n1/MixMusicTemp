// Imports mobile scss files
const cssContext = require.context('../css/mobile', true, /\.(css|scss)$/);
cssContext.keys().forEach(cssContext);

// Imports desktop js files
const jsContext = require.context('../js/mobile', true, /\.(js)$/);
jsContext.keys().forEach(jsContext);