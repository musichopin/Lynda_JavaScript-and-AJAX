(function() {
	var imgResizer = function() {
		
		var myUl = document.querySelector("#update ul");

		if (myUl) {
			myUl.addEventListener("mouseover", function(e) {
				if(e.target.tagName === "LI" ) {
					e.target.querySelector("img").style.width = 25 + "%";
// since width attr of img was overridden by css we shud use style prop					
				}
			})
		}
	}

	$('#search').keyup(function() {

		var searchField = $('#search').val();
		var myExp = "this var is used in case of blanking all input";

		if (searchField) myExp = new RegExp(searchField, "i");
	//not alt: since searchField is variable: var myExp = /searchField/i;

		$.getJSON('data.json', function(data) {

			var output = '<ul class="searchresults">';

			$.each(data, function(key, val) {//alt:val yerine data[key], this, $(this)[0]
				if ((val.name.search(myExp) != -1) || (val.bio.search(myExp) != -1)) {
					output += '<li>';
					output += '<h2>'+ val.name +'</h2>';
					output += '<img src="images/'+ val.shortname +'_tn.jpg" alt="'+ val.name +'" />';
					output += '<p>'+ val.bio +'</p>';
					output += '</li>';
				}
			});

			output += '</ul>';
			$('#update').html(output);

			imgResizer();
		}); //get JSON
	}); // keyup event
})() // self-executing func

