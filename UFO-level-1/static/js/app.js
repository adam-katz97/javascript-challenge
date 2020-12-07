// from data.js
var tableData = data;

// YOUR CODE HERE!
var table = d3.select('table table-striped');
var tbody = d3.select('tbody');
data.forEach(function(ufo) {
    var row = tbody.append('tr');
    
    Object.entries(ufo).forEach(function([key, value]){
        
        var cell = row.append('td');
        cell.text(value);
    });

});
var button = d3.select('#filter-btn');
var form = d3.select('#form');
button.on("click", runEnter);
form.on("submit", runEnter);
function runEnter() {
    
    d3.event.preventDefault();
    var inputElement = d3.select('#datetime');
    var inputValue = inputElement.property('value');
    var filterDate = tableData.filter((sighting) => sighting.datetime === inputValue);
    tbody.html("")
    filterDate.forEach(function(ufo) {
        var row = tbody.append('tr');
        
        Object.entries(ufo).forEach(function([key, value]){
            
            var cell = row.append('td');
            cell.text(value);
        });
    
    });
    
    
}  
