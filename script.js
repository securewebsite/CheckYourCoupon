$(document).ready(function(){
	
	$("#submit").click(function(){


	var email = $("#email").val();
	var dataString =  '&email='+ email ;


			if(email=='')
			{
			alert("Please Enter email id");
			}
			else
			{
			// AJAX Code To Submit Form.
			$.ajax({
			type: "POST",
			url: "email.php",
			data: dataString,
			cache: false,
			success: function(result){
			alert(result);
			}
			});
			}
			return false;
	});
});