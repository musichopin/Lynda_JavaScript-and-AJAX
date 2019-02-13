var mybutton = document.getElementById('loadbutton');
mybutton.onclick = loadAJAX;

function loadAJAX() {
	var request;
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest();
	} else {
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	request.open('GET', 'data.json');
	request.onreadystatechange = function() {
		if ((request.readyState===4) && (request.status===200)) {
			var items = JSON.parse(request.responseText);
			var output = '<ul>';
			for (var key in items) { // items[key] is obj
// alt: for (var i = 0; i < items.length; i++) {
				output += '<li>' + items[key].name + '</li>';//alt:items[key]["name"]
			}
			output += '</ul>';
			document.getElementById('update').innerHTML = output;
		}
	}
	request.send();
} // loadAJAX
