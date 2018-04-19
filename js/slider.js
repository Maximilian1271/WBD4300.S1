// Make background slide in index.html
// Try using leftarrow/rightarrow!
(function($, undefined){
	function quoterand(){
			//$(".h2__1").children().hide()													//HideAllQuotes
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

		$(".slider").find("ul>li").each(function(){
			$(this).click(function(){
				switch($(this).data("direction")){
					case "left":
					slideleft()
					clearInterval(int)
					break
					case "right":
					slideright()
					clearInterval(int)
				}
				// if($(this).data("direction")==="left"){					//data-direction verwendet um zwischen links und rechts zu unterscheiden
				// 	// alert("left")
				// 	// console.log($(this).data())
				// 	slideleft()
				// 	clearInterval(int)
				// }
				// else if($(this).data("direction")==="right"){			//data-direction verwendet um zwischen links und rechts zu unterscheiden
				// 	slideright()
				// 	clearInterval(int)
				// 	// alert("right")
				// 	// console.log($(this).data())
				// }
			})
		})
		$("html").on("keydown", function(_e){
			// console.log(_e.key)
			switch(_e.key){
				case "ArrowLeft":
				slideleft()
				clearInterval(int)
				break
				case "ArrowRight":
				slideright()
				clearInterval(int)
				break
			}
		})
		var int=setInterval(function(){slideleft()},10000)								//Autoslide	
	})
})(jQuery)