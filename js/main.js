$(document).ready(function(){
$.ajax({
  dataType: "json",
  url: "valentine.json",
    success: function(data){
    	console.log(data);
    }, error: function(error){
    	console.log(error, 'error');
    }
});
	


});