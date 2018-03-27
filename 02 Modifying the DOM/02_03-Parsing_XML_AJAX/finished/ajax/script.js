var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'data.xml');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
// request.responseXML is object
		console.log(request.responseXML.getElementsByTagName('name')[1].childNodes[0].nodeValue);
		
		var items = request.responseXML.getElementsByTagName('name');
		var output = '<ul>';
		for (var i = 0; i < items.length; i++) {
			output += '<li>' + items[i].firstChild.nodeValue + '</li>';
		}
		output += '</ul>';
// vers1:
// for (var key in this.types) {
//   if(this.types.hasOwnProperty(key)) {
//     output += '<li><a href="' + this.types[key] + '">' +
//       '<img src="images/' + key + '.png" alt="icon for '+key+'">' +
//     '</a></li>'; // img names in harmony with keys
//   }
// }
// output+= '</ul>';
		
		var update = document.getElementsByClassName('update');
		for (var i = 0; i < update.length; i++) {
			update[i].innerHTML = output;
		}
	}
}
request.send();
