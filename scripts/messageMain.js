
window.onload = function() {

$.getScript("scripts/topLeftNavBar.js", function(){
   alert("topLeftNavBar.js executed....! Randome : " );
});				
		
	/* =============== MailBox Inbox Part ===========================*/	
	$('#myInbox').click(function(){
		
		$('#messageHeader h3').remove();
		$('#messageTable tr').remove();
		$('#messageHeader').append('<h3>Inbox</h3>');
		$('#messageTable').append('<tr><th>From</th><th>Subject</th><th>Date</th></tr>');
		
		for (var i = 1; i <= messageList.count; i++) {
			var  from= 'from' + '' +i ;
			var  subject= 'subject' + '' +i ;
			var  date= 'date' + '' +i ;
			
           var myRow = '<tr><td>' + messageList[from] + '</td><td>' + messageList[subject] + '</td><td>' + messageList[date] + '</td></tr>';
            $('#messageTable tr:last').after(myRow);						
		}		
	});	

	/* =============== SendItems Part ===========================*/	
	$('#mySentItems').click(function(){
		$('#messageHeader h3').remove();
		$('#messageTable tr').remove();
		$('#messageHeader').append('<h3>Sent Items</h3>');
		$('#messageTable').append('<tr><th>To</th><th>Subject</th><th>Date</th></tr>');

		for (var i = 1; i <= sentMessageList.count; i++) {
			var  from= 'from' + '' +i ;
			var  subject= 'subject' + '' +i ;
			var  date= 'date' + '' +i ;

           var myRow = '<tr><td>' + sentMessageList[from] + '</td><td>' + sentMessageList[subject] + '</td><td>' + sentMessageList[date] + '</td></tr>';
            $('#messageTable tr:last').after(myRow);						
		}		
	});		

	$.getScript("scripts/ad.js", function(){
	   alert("Ad.js executed....!");
	});		

}

