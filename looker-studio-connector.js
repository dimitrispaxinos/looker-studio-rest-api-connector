// Initialize the Community Connector using the DataStudioApp service
const communityConnector = DataStudioApp.createCommunityConnector();

// Base API endpoint for fetching university data
const BASE_URL = 'http://universities.hipolabs.com/search';

// Define the schema for the data structure of the connector
const schema = [    
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
    const config = communityConnector.getConfig();

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

// Fetch data from the API based on user input and return it to Data Studio
function getData(request) {
    const dataSchema = request.fields.filter(field => schema.some(element => element.name === field.name));

    const countryParam = request.configParams.country;
    const url = BASE_URL + (countryParam ? `?country=${encodeURIComponent(countryParam)}` : '');
    
    const response = UrlFetchApp.fetch(url);
    const parsedResponse = JSON.parse(response);

    const rows = parsedResponse.map(university => {
        const values = request.fields.map(field => university[field.name] || '');
        return { values };
    });

    return {
        schema: dataSchema,
        rows: rows
    };
}

// Specify the authentication type for the connector
function getAuthType() {
    return { type: 'NONE' };  // No authentication required
}

// Check if the current user has administrative privileges
function isAdminUser() {
    return true;  // All users are treated as admin users in this example
}
