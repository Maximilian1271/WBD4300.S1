(function($, undefined){
	$(function(){
		function hamslidein(){
			let img="<img src='assets/ps/ic_close_black_1024px.svg'></img>"
			$(".hampost").show().animate({left:0},300)
			$(".hampre").append(img).css("background-image", "none").find("img").addClass("hamclose") //replace hamburger ico with close ico
			
			$(".hampost").find("a").each(function(){	//Make "curr Page" dot
				if($(this).attr("href")==location.pathname.split('/').slice(-1)[0]){

					// $(this).before("&#183;")
					$(this).addClass("curr")
				}
			})
		}
		function hamslideoff(){
			$(".hampost").animate({left: "-100%"}, 300,function(){$(this).hide()})
				$(".hampre").find("img").remove()
				$(".hampre").removeAttr("style")
		}

		$(".hampre").click(function(){
			if(!($(".hampost").is(":visible"))){
				hamslidein()
			}
			else{
				hamslideoff()
			}
		})
		$("html").on("keydown", function(_e){
			switch(_e.key){
				case "Escape":
				hamslideoff()
				break
			}
		})
	})
})(jQuery)
