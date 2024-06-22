// Initialize the Community Connector using the DataStudioApp service
let communityConnector = DataStudioApp.createCommunityConnector();

// Define the schema for the data structure of the connector
let schema = [    
    {name: 'alpha_two_code', label: 'Alpha Two Code', dataType: 'STRING', semantics: {conceptType: 'DIMENSION'}},
    {name: 'country', label: 'Country', dataType: 'STRING', semantics: {conceptType: 'DIMENSION'}},    
    {name: 'name', label: 'Name', dataType: 'STRING', semantics: {conceptType: 'DIMENSION'}},    
];

// Return the defined schema to Data Studio
function getSchema(request) {
    return { schema: schema };
};

// Define the configuration settings for the connector, including user input fields
function getConfig(request) {
    let config = communityConnector.getConfig();

    config.newInfo()
        .setId('instructions')
        .setText('Enter Country Name to fetch university data.');

    config.newTextInput()
        .setId('country')
        .setName('Country')
        .setHelpText('Enter the country for which you want to fetch university data.')
        .setPlaceholder('USA')
        .setAllowOverride(true);

    return config.build();
}

function getData(request) {

    // Get the fields requested by Looker Studio
    let dataSchema = [];
    request.fields.forEach(function (field) {
        for (const element of schema) {
            if (element.name == field.name) {
                dataSchema.push(element);
                break;
            }
        }
    });

    // Base API endpoint for fetching university data
    let BASE_URL = 'http://universities.hipolabs.com/search';

    // Construct the API URL based on user input
    let countryParam = request.configParams.country;
    let url = BASE_URL + ((countryParam != null && countryParam != '') ? '?country=' + encodeURIComponent(countryParam) : '');
    
    // Fetch and parse the API response
    let response = UrlFetchApp.fetch(url);
    let parsedResponse = JSON.parse(response);
    let rows = [];

    // Map the API response to the schema for Data Studio
    parsedResponse.forEach(function(university) {
        let row = [];
        request.fields.forEach(function(field) {
            switch (field.name) {
                case 'name':
                    row.push(university.name);
                    break;
                case 'country':
                    row.push(university.country);
                    break;
                case 'alpha_two_code':
                    row.push(university.alpha_two_code);
                    break;
                default:
                    row.push('');
            }
        });
        rows.push({ values: row });
    });

    return {
        schema: dataSchema,
        rows: rows
    };
}

// Specify the authentication type for the connector
function getAuthType() {
    // This connector does not require authentication
    return { type: 'NONE' };
}

// Check if the current user has administrative privileges
function isAdminUser() {
    // For this example, all users are treated as admin users
    return true;
}
