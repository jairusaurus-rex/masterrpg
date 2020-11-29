var bonus = 0;
var level = 0;
var strength = 0;
var dexterity = 0;
var grit = 0;
var _focus  = 0;
var intelligence  = 0;
var wit  = 0;
var charisma  = 0;
var aura = 0;

var ability_points = 0;
var reserve_points = 0;

function changeEverything(){
	strength = parseInt($("#strength_input").val())
	dexterity = parseInt($("#dexterity_input").val())
	grit = parseInt($("#grit_input").val())
	_focus = parseInt($("#focus_input").val())
	intelligence = parseInt($("#intelligence_input").val())
	wit = parseInt($("#wit_input").val())
	charisma = parseInt($("#charisma_input").val())
	aura = parseInt($("#aura_input").val())
	level = parseInt($("#level_input").val())
	bonus = Math.floor(2+ (level /5))
	$("#bonus_display").text(bonus);
	ability_points = 20 + level + bonus;
	console.log(ability_points)
	
	
	reserve_points = ability_points - calc_spent(strength) - calc_spent(dexterity) - calc_spent(grit) - calc_spent(_focus) - calc_spent(intelligence) - calc_spent(wit) - calc_spent(charisma) - calc_spent(aura) ;
	$("#reserve_display").text(reserve_points);
	$("#max_hit_points_display").text(10 + level + (bonus * grit));
	$("#stamina_display").text(bonus + grit);
	$("#speed_display").text(20 + bonus + dexterity);
	$("#dark_vision_display").text(_focus * 5);
	$("#large_display").text((strength * 2) + grit + bonus);
	$("#small_display").text(bonus);
	$("#wealth_display").text(level * bonus * 50 + 10 * (intelligence+wit+charisma));
	$("#spells_known_display").text(intelligence + bonus);
	$("#spells_mana_display").text(aura + bonus);
	$("#worthy_display").text(aura + bonus);
}

function calc_spent(x){
	var total = 0
	for(var i=1; i<=x; i++){
		total += i;
	}
	return total;
}