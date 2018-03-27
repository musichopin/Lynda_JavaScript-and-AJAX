var request = new XMLHttpRequest();
request.open('GET', 'data.txt', true);
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
		console.log(request);
		document.body.innerHTML = request.responseText;
	}
}
request.send();
