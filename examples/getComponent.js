// Change '../' to 'cachet-api' to use this code in your own project
var CachetAPI = require('../');

// Fill in the parameters accordingly
var cachet = new CachetAPI({
    // Base URL of your installed Cachet status page
    url: 'https://demo.cachethq.io',
    // Cachet API key (provided within the admin dashboard)
    apiKey: 'a1b2c3d4e5f6g7h8i9'
});

// Prepare a component ID to fetch
var componentId = 1;

// Get component info by ID
cachet.getComponentById(componentId)
    .then(function (component) {
        // Log component info
        console.log('Component', component);
    }).catch(function (err) {
        // Log errors to console
        console.log('Fatal Error', err);
    });