window.onload = function() {
	
	
	/* =============== Friend Search Part ===========================*/		
	
	$('#mySearch').click(function(){
		
		$('#messageHeader h3').remove();
		$('#searchTable tr').remove();
		$('#messageHeader').append('<h3>Friend Search Result</h3>');
		$('#searchTable').append('<tr><th>Profile</th><th>Name</th><th>Education</th><th>City</th></tr>');

		for (var i = 1; i <= searchList.count; i++) {
			var  name= 'name' + '' +i ;
			var  pic= 'pic' + '' +i ;
			var  city= 'city' + '' +i ;
			var  education= 'education' + '' +i ;

           var myRow = '<tr><td align="center"><img  width="60"  src="friends/' + searchList[pic] + '"></td><td>' + searchList[name] + '</td><td>' + searchList[education] + '</td><td>' + searchList[city] + '</td></tr>';
            $('#searchTable tr:last').after(myRow);						
		}		
	});	
	
	$.getScript("scripts/topLeftNavBar.js", function(){
	});				

	$.getScript("scripts/ad.js", function(){
	});	
	
}