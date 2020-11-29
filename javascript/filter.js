function filter(){
	if($("#filter").val() == 'all'){
		$(".filtered_object").show()
	}else{
		$(".filtered_object").hide();
		$("." + $("#filter").val()).show();
	}
}