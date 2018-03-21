// (function($, undefined){
// 	$(function(){
// 		$(".errors").hide()
// 		$("form").on("submit", function(_e){
// 			_e.preventDefault()
// 			var name=$(this).find("input[placeholder=\"Name\"]").val()
// 			var surname=$(this).find("input[placeholder=\"Surname\"]").val()
// 			var email=$(this).find("input[placeholder=\"E-mail\"]").val()
// 			var subject=$(this).find("input[placeholder=\"Subject\"]").val()
// 			var content=$(this).find("textarea").val()
// 			var error=false
			
// 			//console.log(name,surname,email,subject,content)
// 			$(".errors").hide()
// 			if (name.trim().length>0&&surname.trim().length>0) {
// 				console.log("Name continue")
// 			}
// 			else{
// 				error=true
// 				$(".errors").html("<br>Please specify a valid Name!")
// 			}
// 			if(error){
// 				$(".errors").show().html("")
// 				error=false
// 			}
// 		})
// 	})
// })(jQuery)
window.onload = function() {
	var form = document.querySelector("form");
	var errordiv = document.querySelector(".errors");
	var mail = document.querySelector("input[placeholder=\"E-mail\"]");
	var name=document.querySelector("input[placeholder=\"Name\"]");
	var surname=document.querySelector("input[placeholder=\"Surname\"]");
	var subject=document.querySelector("input[placeholder=\"Subject\"]");
	var content=document.querySelector("textarea").value
	var error=false;

	form.addEventListener("submit", function(_e){
		errordiv.innerHTML="<img onclick=\"document.querySelector('.errors').style.visibility='hidden'\" class=\"close\" src=\"assets/ps/ic_close_black_1024px.svg\" alt=\"close\">"
		document.querySelector(".errors").style.visibility="hidden"
		//name
		if (name.value.trim().length>0&&surname.value.trim().length>0) {
			console.log("Name continue")
		}
		else{
			error=true
			errordiv.innerHTML+="<br>Please specify a valid Name!"
		}
		//mail
		if (mail.value.trim().length>0) {
			if (mail.value.indexOf("@")<0||mail.value.indexOf("@")==mail.value.length-1||mail.value.indexOf("@")==0) {
				error=true
				errordiv.innerHTML+="<br>Email format Invalid!"
			}
			else{
				console.log("Mail continue")
			}
		}
		else{
			error=true
			errordiv.innerHTML+="<br>Please specify an E-Mail address"
		}
		if(subject.value.trim().length>0){
			console.log("subject continue")
		}
		else{
			errordiv.innerHTML+="<br>Please enter a valid Subject"
			error=true
		}
		//errorhandler
		if (error) {
			_e.preventDefault()
			document.querySelector(".errors").style.visibility="visible"
			error=false
		}
	});
}