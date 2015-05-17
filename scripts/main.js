window.onload = function() {
	
	/* JQuery Load Test*/
    if (window.jQuery) {  
		alert("Yeah....! JQuery Loaded...................!");
    } else {
        alert('Warrning ==========>  Doesnot Work');
    }
	
	$("#search").click(function(event){
		alert('Search Clicked');
	});

	// If login Button Clicked
	$('#toggle-login').click(function(){
	  $('#login-div').toggle();
	});	

	
/* ===========================> TOP MENU SCRIPT <===========================*/
$(document).ready(function(){ 
	$("#topMenu").load("topMenu.html");
}); 	

/* ===========================> LEFT MENU SCRIPT <===========================*/
$(document).ready(function(){ 
	$("#leftMenu").load("leftMenu.html");
}); 			

/*
$(document).ready(function(){
setTimeout(function(){
	$('#onlineFriendListDiv').fadeOut();}, 2000);
});*/

$.getScript("scripts/chat.js", function(){

   alert("chat.js executed....!");

   // Use anything defined in the loaded script...
});		

	
}
