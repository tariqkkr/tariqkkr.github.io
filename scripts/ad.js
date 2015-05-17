	$(document).ready(function(){ 
	
		var adName = Math.floor(Math.random()*(12)+1) + ".jpg";
		$("#rightMenu").append('<img width="320" height="700" src="ad/' + adName + '">');	
	}); 	