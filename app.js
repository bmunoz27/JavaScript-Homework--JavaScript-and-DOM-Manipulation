// from data.js
var tableData = data;

// YOUR CODE HERE!
//Get a reference to the table body
var tbody = d3.select("tbody");

function displayData(data) {
// clear any data that exists
tbody.html("");

// `forEach` automatically iterates (loops) through each item and
// calls the supplied function for that item.
//Append a row and cells for each value in that row.
// Append one table row `tr` to the table body

data.forEach((dataRow) => {
    var row = tbody.append("tr");

// Loop through each field in the dataRow and add each value as a table cell 
    Object.values(dataRow).forEach((val) => {
        var cell = row.append("td").text(val);
    }); 
});

}

// Build the table when the page loads
displayData(tableData);
