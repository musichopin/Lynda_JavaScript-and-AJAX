for (var i = 0; i < 100; i++) { // making 100 request to the server
	var request = new XMLHttpRequest();//api handling communication btw server&browser
	request.open('GET', 'data.txt', false);
	request.send();
//since this is sync request below code shud be executed after 100 request is done	
	if (request.status===200) {
		console.log(request);
		document.writeln(request.responseText);
	}	
}
