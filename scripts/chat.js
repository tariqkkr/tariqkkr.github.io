
	$(document).ready(function(){ 

		//On-line Friend List
		$("#rightMenu").append('<hr/><b>On-line Friends</b><hr/><div id="onlineFriendListDiv" class="onlineFriendListDiv"></div>');	
			for (var i = 1; i <= onlineFriendList.count; i++) {
			var  name= 'name' + '' +i ;
			$('#onlineFriendListDiv').append('<img src="images/online.png" alt="Smiley face" height="15" width="15">  ' + onlineFriendList[name] + '</br>');
		}	

		$("#rightMenu").append('<hr/><b>Off-line Friends</b><hr/><div id="offlineFriendListDiv" class="offlineFriendListDiv"></div>');	
			for (var i = 1; i <= offlineFriendList.count; i++) {
			var  name= 'name' + '' +i ;
			$('#offlineFriendListDiv').append('<img src="images/offline.png" alt="Smiley face" height="15" width="15">  ' + offlineFriendList[name] + '</br>');
		}	

		$("#rightMenu").append('<hr/><b>Block Friends</b><hr/><div id="blockFriendListDiv" class="blockFriendListDiv"></div>');	
			for (var i = 1; i <= blockFriendList.count; i++) {
			var  name= 'name' + '' +i ;
			$('#blockFriendListDiv').append('<img src="images/block.png" alt="Smiley face" height="15" width="15">  ' + blockFriendList[name] + '</br>');
		}	

	}); 		
