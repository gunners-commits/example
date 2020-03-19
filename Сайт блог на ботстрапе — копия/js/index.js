//card
let array = ["#card-5", "#card-6", "#card-7", "#card-8"];

let b = 0;
let c = 0;

$("#load_more").on("click",function(){
	c++
	console.log(c);
});

	
	$("#load_more").on("click",function(){
		if(c<=1 ){
			$(array[c-1]).css({"display":"block"});
			$(array[c-1]).next().css({"display":"block"});
		} else {
			$(array[c]).css({"display":"block"});
			$(array[c]).next().css({"display":"block"});
			$("#load_more").hide();
		} 
		
		
	});
//ПОИСК
$("#search").on("click", function(){
	$("#search_all").css({"display":"block"});
});

$("#close").on("click", function(){
	$("#search_all").css({"display":"none"});
})