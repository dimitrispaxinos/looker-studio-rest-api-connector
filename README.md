# Google Apps Script Custom Connector for Looker Studio

This repository contains a custom connector script to fetch university data from `universities.hipolabs.com` and visualize it in Looker Studio using Google Apps Script.

## Features:

- Fetch dynamic university data based on country input.
- No authentication required.
- Seamlessly integrates with Looker Studio for data visualization.

## Usage:

1. **Setup in Google Apps Script:**
   - Create a new Google Apps Script project.
   - Copy and paste the provided script into the editor.
   - Save and deploy the script as a web app.

2. **Integration in Looker Studio:**
   - Use the deployed script URL as the data source in Looker Studio.
   - Configure the data source by specifying the desired country.
   - Visualize the fetched data using Looker Studio's tools.

## Schema:

The data fetched includes the following fields:
- Alpha Two Code
- Country
- Name

## Contributing:

Feel free to fork this repository, make your changes, and submit pull requests. For major changes, please open an issue first to discuss the proposed change.

## License:

This project is licensed under the MIT License. See the `LICENSE` file for more details.
# looker-studio-rest-api-connector
