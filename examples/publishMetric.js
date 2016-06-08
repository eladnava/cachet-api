// Change '../' to 'cachet-api' to use this code in your own project
var CachetAPI = require('../');

// Fill in the parameters accordingly
var cachet = new CachetAPI({
    // Base URL of your installed Cachet status page
    url: 'https://demo.cachethq.io',
    // Cachet API key (provided within the admin dashboard)
    apiKey: 'a1b2c3d4e5f6g7h8i9'
});

// Prepare a metric point to publish (so it shows up on the metric's graph)
var metricPoint = {
    // Metric ID
    id: 1,
    // Metric point value
    value: 3.37,
    // Metric point timestamp (optional, defaults to now)
    timestamp: Math.round(new Date().getTime() / 1000)
};

// Publish it so it shows up on the status page
cachet.publishMetricPoint(metricPoint)
    .then(function (response) {
        // Log API response
        console.log('Metric point published at ' + response.data.created_at);
    }).catch(function (err) {
        // Log errors to console
        console.log('Fatal Error', err);
    });