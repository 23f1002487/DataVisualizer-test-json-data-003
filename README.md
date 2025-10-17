# Sales Dashboard 2025

This web application displays a sales dashboard that loads sales data from an encoded JSON data source, calculates key metrics, and displays them in a user-friendly manner.

## Features
- Loads sales data from a Base64-encoded JSON string.
- Calculates total revenue, average order value, and total items sold.
- Displays the metrics rounded to two decimal places.
- Responsive design for various screen sizes.

## How it works
1. The HTML structure sets up three sections for total revenue, average order value, and item count.
2. The CSS styles these sections for clarity and responsiveness.
3. The JavaScript decodes the Base64 JSON data, processes the array of sales records, and updates the respective HTML elements with calculated metrics.

## Usage
- Replace the placeholder string in **script.js** at **const base64Data = "${sales_data_base64_placeholder}";** with the actual Base64 encoded string of your **sales_data.json**.
- Open the **index.html** in a browser.
- The dashboard will automatically load and display the metrics.

## Notes
- Ensure the base64 string is correctly formatted and encodes a valid JSON array.
- The script expects each sale record to have at least a 'revenue' field (number) and an 'items' field (array or number).
- The application is designed to be simple and efficient for the specified purpose.
