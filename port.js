(function($, undefined){
	$(function(){
		$(".hamclose").click(function(){
			$(this).parent().fadeOut()
		})
		$(".port").find("div").each(function(){
			$(this).click(function(){$(".hamclose").parent().fadeIn()})
			$(this).find("img").attr("src")
			// $(this).click(function(){console.log($(this))})
		})
		$("html").on("keyup", function(_e){
			// console.log(_e.key)
			switch (_e.key) {
				case "Escape":
					$(".hamclose").trigger("click")
				break;
			}
		})
	})
})(jQuery)