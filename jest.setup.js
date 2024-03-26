// require('text-encoding'); // Import the polyfill for TextEncoder
// const { configure } = require('enzyme');
// const Adapter = require('enzyme-adapter-react-16');

// configure({ adapter: new Adapter() });


require('fast-text-encoding'); // Import the polyfill for TextEncoder
const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() });
