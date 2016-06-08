// Incident status codes to names
var incidentStatuses = {
    'Scheduled': 0,
    'Investigating': 1,
    'Identified': 2,
    'Watching': 3,
    'Fixed': 4
};

// Component status codes to names
var componentStatuses = {
    'Operational': 1,
    'Performance Issues': 2,
    'Partial Outage': 3,
    'Major Outage': 4
};

exports.getIncidentStatusCode = function (name) {
    // Attempt to find incident status code by name
    var code = incidentStatuses[name];

    // Bad name?
    if (!code) {
        throw new Error('Invalid incident status provided: ' + name);
    }

    // We're good
    return code;
};

exports.getComponentStatusCode = function (name) {
    // Attempt to find component status code by name
    var code = componentStatuses[name];

    // Bad name?
    if (!code) {
        throw new Error('Invalid component status provided: ' + name);
    }

    // We're good
    return code;
};