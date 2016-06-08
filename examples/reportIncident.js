// Change '../' to 'cachet-api' to use this code in your own project
var CachetAPI = require('../');

// Fill in the parameters accordingly
var cachet = new CachetAPI({
    // Base URL of your installed Cachet status page
    url: 'https://demo.cachethq.io',
    // Cachet API key (provided within the admin dashboard)
    apiKey: 'a1b2c3d4e5f6g7h8i9'
});

// Prepare an incident to publish
var incident = {
    // Incident name
    name: 'Database connectivity issues',
    // Incident description (supports markdown)
    message: 'We\'re investigating connectivity issues with the main DB.',
    // Incident status (https://docs.cachethq.io/docs/incident-statuses)
    status: 'Investigating',
    // Whether the incident will be visible to the public or only to logged in users
    visible: true,
    // Whether to send out e-mail notifications to subscribers regarding this incident
    notify: true,
    // Component ID affected by this incident (optional)
    component_id: 1,
    // Component status (required if component_id is specified) (https://docs.cachethq.io/docs/component-statuses)
    component_status: 'Partial Outage'
};

// Publish it so it shows up on the status page
cachet.reportIncident(incident)
    .then(function (response) {
        // Log API response
        console.log('New incident reported at ' + response.data.created_at);
    }).catch(function (err) {
        // Log errors to console
        console.log('Fatal Error', err);
    });