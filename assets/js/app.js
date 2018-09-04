// bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// font awesome
import '@fortawesome/fontawesome-free/css/all.css';

// Imports images
const imgContext = require.context('../images', true, /\.(png|jpg|jpeg|gif|ico|svg|webp)$/);
imgContext.keys().forEach(imgContext);

// Imports common scss files
const cssContext = require.context('../css/common', true, /\.(css|scss)$/);
cssContext.keys().forEach(cssContext);

// Imports common js files
const jsContext = require.context('../js/common', true, /\.(js)$/);
jsContext.keys().forEach(jsContext);