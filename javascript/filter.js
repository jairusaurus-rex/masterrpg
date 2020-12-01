function filter(){
	if($("#filter").val() == 'all'){
		$(".filtered_object").show()
	}else{
		$(".filtered_object").hide();
		$("." + $("#filter").val()).show();
	}
}

function filterThree(){
	if($("#filter1").val() == 'all' && $("#filter2").val() == 'all' && $("#filter3").val() == 'all'){
		$(".filtered_object").show()
	}else{
		var foo = ""
		$(".filtered_object").hide();
		if($("#filter1").val() != 'all'){
			foo +="." + $("#filter1").val();
		}
		if($("#filter2").val() != 'all'){
			foo +="." + $("#filter2").val();
		}
		if($("#filter3").val() != 'all'){
			foo +="." + $("#filter3").val();
		}
		console.log(foo);
		$(foo).show();
	}
}

function resetThree(){
	$("#filter1").val('all');
	$("#filter2").val('all');
	$("#filter3").val('all');
}