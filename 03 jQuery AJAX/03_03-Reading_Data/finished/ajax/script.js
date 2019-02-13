$.getJSON('data.json', function(data) { // getJSON() loads data in json format
// data is js array
	var output = '<ul>';
	$.each(data, function(key, val) { // alt1; val is obj
		output += '<li>' + val.name + '</li>'; 
		// alt1: data[key].name // alt2: this.name
	});
	output +='</ul>';
	$('#update').append(output); // vers: html(), text(), prepend()
//alt: document.getElementById('update').insertAdjacentHTML("beforeend", output);
});

/*alt1:
	$(data).each(function(key, val) {
		output += '<li>' + val.name + '</li>';
	});
*/

/*vers: using $.each() with double looping:
var data = { "programs": [ { "name":"zonealarm", "price":"500" }, { "name":"kaspersky", "price":"200" } ] };

$.each(data.programs, function (i) {
    $.each(data.programs[i], function (key, val) {
        alert(key + val);
        // alt1: alert(key + this);
        // alt2: alert(key + data.programs[i][key]);
    });
});
*/