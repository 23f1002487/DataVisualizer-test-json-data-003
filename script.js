// This script loads the sales_data.json, decodes it, and computes the required metrics
(function() {
  // The Base64 encoded JSON data (placeholder, replace with actual encoded data as needed)
const base64Data = "${sales_data_base64_placeholder}"; // Replace this string with the actual base64 string

// Function to decode base64 and parse JSON
function decodeAndParse(base64Str) {
  const decodedStr = atob(base64Str);
  return JSON.parse(decodedStr);
}

// Function to format number to 2 decimal places
function formatNumber(num) {
  return Math.round(num * 100) / 100;
}

// Load and process data
try {
  const salesData = decodeAndParse(base64Data);
  // Expecting salesData to be an array of sales records
  if (!Array.isArray(salesData)) {
    throw new Error("Invalid data format: expected an array")
  }

  let totalRevenue = 0;
  let totalItems = 0;
  let totalOrders = salesData.length;

  salesData.forEach(sale => {
    // Assuming sale has 'revenue' (number), 'items' (array or count)
    totalRevenue += sale.revenue;
    // Count items; assuming sale.items is array
    if (Array.isArray(sale.items)) {
      totalItems += sale.items.length;
    } else if (typeof sale.items === "number") {
      totalItems += sale.items;
    } else {
      // fallback: if items is missing or invalid, ignore
    }
  });

  const avgOrderValue = totalOrders ? totalRevenue / totalOrders : 0;

  // Update DOM elements
  document.getElementById('total-revenue').textContent = formatNumber(totalRevenue).toFixed(2);
  document.getElementById('avg-order').textContent = formatNumber(avgOrderValue).toFixed(2);
  document.getElementById('item-count').textContent = formatNumber(totalItems).toFixed(2);
} catch (error) {
  console.error('Error loading or processing data:', error);
  document.getElementById('total-revenue').textContent = 'Error';
  document.getElementById('avg-order').textContent = 'Error';
  document.getElementById('item-count').textContent = 'Error';
}
})();