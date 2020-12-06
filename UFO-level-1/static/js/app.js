// from data.js
var tableData = data;

// YOUR CODE HERE!
var table = d3.select('table table-striped');
var tbody = d3.select('tbody');
data.forEach(function(ufo) {
    var row = tbody.append('tr')
    
    Object.entries(ufo).forEach(function([key, value]){
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    })

})

