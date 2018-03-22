//Vanilla vs formval as in WBD4300.F2, largely copy/paste, changes from feedback introduced
window.onload = function() {
<<<<<<< Updated upstream
	var form = document.querySelector("form")
	var errordiv = document.querySelector(".errors")
	var mail = document.querySelector("input[placeholder=\"E-mail\"]")
	var name=document.querySelector("input[placeholder=\"Name\"]")
	var surname=document.querySelector("input[placeholder=\"Surname\"]")
	var subject=document.querySelector("input[placeholder=\"Subject\"]")
	var content=document.querySelector("textarea")
=======
	var form = document.querySelector("form");
	var errordiv = document.querySelector(".errors");
	var mail = document.querySelector("input[placeholder=\"E-mail\"]");
	var name=document.querySelector("input[placeholder=\"Name\"]");.
	var surname=document.querySelector("input[placeholder=\"Surname\"]");
	var subject=document.querySelector("input[placeholder=\"Subject\"]");
	var content=document.querySelector("textarea").value
>>>>>>> Stashed changes
	var error=false;

	form.addEventListener("submit", function(_e){
		errordiv.innerHTML="<img onclick=\"document.querySelector('.errors').style.visibility='hidden'\" class=\"close\" src=\"assets/ps/ic_close_black_1024px.svg\" alt=\"close\">"
		document.querySelector(".errors").style.visibility="hidden"
		//name
		if (name.value.trim().length>0&&surname.value.trim().length>0) {
			if(name.value.trim().length<=2||surname.value.trim().length<=2){
				error=true
				name.style.backgroundColor="red"
				surname.style.backgroundColor="red"
				errordiv.innerHTML+="<br>Your name seems awfully short. Please review!"
			}
			else{
				var allowed="abcdefghijklmnopqrstuvwxyzßöäüøæå"
				var errorcode=[]
				var errorcode2=[]
				for(let i=0;i<name.value.length;i++){
					if(allowed.indexOf(name.value.toLowerCase().charAt(i))===-1){
						errorcode.push(name.value.charAt(i))
					}
					if(i+1===name.value.length&&errorcode.length>0){
						error=true
						errordiv.innerHTML+="<br> There was an error with your name! (\""+errorcode.join("").toString()+"\" is an invalid expression)"
						name.style.backgroundColor="red"
					}
					else{
						name.style.backgroundColor="black"
						console.log("Name now Valid")
					}	
				}
				for(let i=0;i<surname.value.length;i++){
					if(allowed.indexOf(surname.value.toLowerCase().charAt(i))===-1){
						errorcode2.push(surname.value.charAt(i))
					}
					if(i+1===surname.value.length&&errorcode2.length>0){
						error=true
						errordiv.innerHTML+="<br> There was an error with your surname! (\""+errorcode2.join("").toString()+"\" is an invalid expression)"
						surname.style.backgroundColor="red"
					}	
					else{
						surname.style.backgroundColor="black"
						console.log("Surname now Valid")
					}
				}
			}
			
			// console.log("Name now Valid")
		}
		else{
			error=true
			name.style.backgroundColor="red"
			surname.style.backgroundColor="red"
			errordiv.innerHTML+="<br>Please specify a valid Name!"
		}
		//mail
		if (mail.value.trim().length>0) {
			if (mail.value.trim().indexOf("@")<0||mail.value.trim().indexOf("@")==mail.value.length-1||mail.value.trim().indexOf("@")==0) {
				error=true
				mail.style.backgroundColor="red"
				errordiv.innerHTML+="<br>Email format Invalid!"
			}
			else{
				mail.style.backgroundColor="black"
				console.log("Mail now Valid")
			}
		}
		else{
			error=true
			mail.style.backgroundColor="red"
			errordiv.innerHTML+="<br>Please specify an E-Mail address"
		}
		if(subject.value.trim().length>0){
			subject.style.backgroundColor="black"
			console.log("subject now Valid")
		}
		else{
			errordiv.innerHTML+="<br>Please enter a valid Subject"
			subject.style.backgroundColor="red"
			error=true
		}
		if(content.value.trim().length>0){
			content.style.backgroundColor="black"
			console.log("content now valid")
		}
		else{
			content.style.backgroundColor="red"
			errordiv.innerHTML+="<br> Please provide some text content!"
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