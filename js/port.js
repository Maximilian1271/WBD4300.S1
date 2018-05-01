//used to build "overlay" in 3.html with correct images
(function($, undefined){
	$(function(){
		// function hamslidein(){																				//SlideIn function for easy calling
		// 	let img="<img src='assets/ic_close_black_1024px.svg'></img>"
		// 	$(".hampost").show().animate({left:0},300)
		// 	// $(".hampre").append(img).css("background-image", "none").find("img").addClass("hamclose") 		//sloppy attempt to replace hamburger ico with close ico
		// 	$(".hampre").toggleClass("active")

		// 	$(".hampost").find("a").each(function(){														//Dynamically set "curr Page" dot by comparing file name with pathname
		// 		if($(this).attr("href")==location.pathname.split('/').slice(-1)[0]){
		// 			$(this).addClass("curr")
		// 		}
		// 		else if(location.pathname.split('/').slice(-1)[0]===""){
		// 			$(".hampost").find("a").first().addClass("curr")
		// 		}
		// 	})
		// }
		// function hamslideoff(){																				//SlideOut function for easy calling
		// 	$(".hampost").animate({left: "-100%"}, 300,function(){$(this).hide()})
		// 		// $(".hampre").find("img").remove()
		// 		// $(".hampre").removeAttr("style")
		// 		$(".hampre").removeClass("active")
		// }
		$.getScript("js/ham.js")

		$(".hamclose").click(function(){									//remove .stage children
			$(this).parent().fadeOut()
			$(".stage").children().remove()
			$("main>h2 i").removeAttr("style")
		})
		//////////////////////////////////////////////////////////////////////////////////////////////
		//																							//
		//																							//
		//	War mir ursprünglich nicht sicher ob ich den content in die variablen schreiben soll	//
		//				hab aber gefragt in der schule in man hat gesagt es sei okay				//
		//																							//
		//																							//
		//////////////////////////////////////////////////////////////////////////////////////////////
			var contentpa="<p class=\"overlaycontent\" data-name=\"Ola Hvermannsen\">Ola Hvermannsen, born in Tromsø, Norway... Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><a class=\"button\">Aerial Photography</a><a class=\"button\">Landscapes</a></p>"
			var contentpb="<p class=\"overlaycontent\" data-name=\"Maria Svenne\">Maria Svenne, born in Norrtälje, Sweden... Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><a class=\"button\">Architecture</a></p>"
			var contentpc="<p class=\"overlaycontent\" data-name=\"Morten Menigmand\">Morten Menigman, born in Aarhus, Denmark... Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><a class=\"button\">Architecture</a><a class=\"button\">Scenery</a><a class=\"button\">Skyline</a></p>"
		$(".port").find("div").each(function(){								//find correct image and mount in .stage
			$(this).click(function(){
				$("html").off("keydown")
				$(".hamclose").parent().fadeIn()
				$(".stage").append("<img>").find("img").attr("src", $(this).find("img").attr("src")).attr("alt", "portrait")
				$("main>h2 i").css("color", "black")
				switch($(this).find("img").attr("alt")){
					case "Ola Hvermannsen" :
					$(".stage").find("img").before("<h2>"+$(this).find("img").attr("alt")+"</h2>").after(contentpa)
					break
					case "Maria Svenne":
					 $(".stage").find("img").before("<h2>"+$(this).find("img").attr("alt")+"</h2>").after(contentpb)
					break
					case "Morten Menigmand":
					 $(".stage").find("img").before("<h2>"+$(this).find("img").attr("alt")+"</h2>").after(contentpc)
					break
				}
			})
		})
		$("html").on("keyup", function(_e){
			switch (_e.key) {
				case "Escape":
				if($(".overlay").is(":visible")){
					$(".hampre2").trigger("click")
					$("html").on("keydown", function(_e){																//call SlideOut() on "esc" press for convenience
					switch(_e.key){
						case "Escape":
						if($(".hampost").is(":visible")){
							hamslideoff()
							break
						}
						else if($(".hampost").is(":hidden")){
							hamslidein()
							break
						}
					}
				})
					break;
				}
			}
		})
	})
})(jQuery)