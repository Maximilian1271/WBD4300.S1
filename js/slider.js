// Make background slide in index.html
// Try using leftarrow/rightarrow!
jQuery(function($, undefined){
	function quoterand(){
		var rand=Math.floor(Math.random() * ($(".h2__1").children().last().index()+1))	//GenerateRandomQuoteIndex
		console.log(rand)
		if(document.cookie.split("=").splice(1)==rand){									//If random number equals previously generated rand, throw away
			rand=Math.floor(Math.random() * ($(".h2__1").children().last().index()+1))
			$(".h2__1").children().eq(rand).show()
			document.cookie="previousrand="+rand+";"									//Store new random number in cookie if old cookie matches new rand
			console.log(rand)
		}
		else{																			//If random number is unique compared to previous attempt, display quote
			$(".h2__1").children().eq(rand).show()
			document.cookie="previousrand="+rand+";"									//Store random number in cookie for later use
		}
	}
	function slideleft(){
		$(".bgwrapper").animate({left: -($(".bgwrapper").find("div").first().width())}, function(){
				$(".bgwrapper").find("div").last().parent().after().append($(".bgwrapper").find("div").first())
				$(".bgwrapper").css("left", 0)
		})
	}
	function slideright(){
		$(".bgwrapper").prepend($(".bgwrapper").find("div").last()).css("left",-($(".bgwrapper").find("div").first().width()))
		$(".bgwrapper").animate({left: 0})
	}

	$(function(){
		quoterand()
		var paused=false

		$(".slider").find("ul>li").each(function(){
			$(this).click(function(){
				switch($(this).data("direction")){											//data-direction verwendet um zwischen links und rechts zu unterscheiden
					case "left":
					slideleft()
					clearInterval(int)
					break
					case "right":
					slideright()
					clearInterval(int)
				}
			})
			// $(this).hover(function(){
			// 	switch($(this).data("direction")){
			// 		case "left":
			// 		// $("main").css("background","linear-gradient(to left, rgba(255,255,255,0) 0%,rgba(0,0,0,0) 85%,rgba(0,0,0,1) 100%)").css("opacity",0)
			// 		$("main").animate({opacity:1},5000)
			// 		// $("main").addClass("left")
			// 		break
			// 		case "right":
			// 		$("main").animate({background:"linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(0,0,0,0) 85%,rgba(0,0,0,1) 100%)"},500)
			// 		// $("main").addClass("right")
			// 	}
			// }, function(){
			// 	switch ($(this).data("direction")) {
			// 		case "left":
			// 		$("main").animate({background:"none"},500)
			// 			// $("main").removeClass("left")
			// 		break;
			// 		case "right":
			// 		$("main").animate({background:"none"},500)
			// 			// $("main").removeClass("right")
			// 		break;
			// 	}
			// })
			// $(this).hover(function(){$("main").addClass("active")}, function(){$("main").removeClass("active")})
		})
		$("html").keydown(function(_e){
			// console.log(_e.key)
			switch(_e.key){
				case "ArrowLeft":
				slideleft()
				paused=true
				break
				case "ArrowRight":
				slideright()
				paused=true
				break
			}
		})
		var int=setInterval(function(){
			if(!paused){
				// console.log("still alive")
				slideleft()
			}
			else{
				// console.log("dead")
			}
		},5000)								//Autoslide	 10000
		$("body").mouseleave(function(){paused=true; console.log(paused)})
		$("body").mouseenter(function(){paused=false; console.log(paused)})
	})
})