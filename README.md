# Google Apps Script Custom API Connector for Looker Studio

This repository contains a custom connector script to fetch university data from universities.hipolabs.com and visualize it in Looker Studio using Google Apps Script.

For a detailed walkthrough of this connector, check out our [blog post](https://apptivasoftware.com/blog/bringing-json-data-from-an-api-into-looker-studio/).

Click on the image below to watch the accompanying video tutorial:

[![YouTube Video Link]([URL_OF_YOUR_THUMBNAIL_IMAGE](https://github.com/dimitrispaxinos/looker-studio-rest-api-connector/blob/main/bring-json-api-data-to-looker-studio-cover.png?raw=true))](https://www.youtube.com/watch?v=hTU2Pf670NY)

## Features:
- Fetch dynamic university data based on country input.
- No authentication required.
- Seamlessly integrates with Looker Studio for data visualization.

## Usage:
### Setup in Google Apps Script:
1. Create a new Google Apps Script project.
2. Copy and paste the provided script into the editor.
3. Save and deploy the script as a web app.

### Integration in Looker Studio:
1. Use the deployed script URL as the data source in Looker Studio.
2. Configure the data source by specifying the desired country.
3. Visualize the fetched data using Looker Studio's tools.

## Schema:
The data fetched includes the following fields:
- Alpha Two Code
- Country
- Name

## Contributing:
Feel free to fork this repository, make your changes, and submit pull requests. For major changes, please open an issue first to discuss the proposed change.

## License:
This project is licensed under the MIT License. See the LICENSE file for more details.
