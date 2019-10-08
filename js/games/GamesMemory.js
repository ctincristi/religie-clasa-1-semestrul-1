
function GamesMemory(config){
	this.config = config;
}

GamesMemory.prototype.resetLevel = function() {
//	$("*[data-C-type]").css("background", "red");
//	$("*[data-C-type]").attr("data-val", "0");
	$("#gameStage").empty();
	this.initialize();
};

GamesMemory.prototype.checkIfFinish = function() {
	var notFinish = false;
	$("#gameStage>input").each(function() {
	    if ($(this).val() == "") {
		   notFinish = true;
	    }
	});
	return notFinish;
};

GamesMemory.prototype.getCorrectAnswer = function(){
	for (var j = 0; j < this.config.objects.length; j++) {
		$("#CidInput" + j).val(this.config.objects[j].response);
	}
};

GamesMemory.prototype.checkSingleResultIndex = function(index){
	return (this.config.objects[index].response == $("#CidInput"+index).val());
};

GamesMemory.prototype.getCheckLength = function(){
	return this.config.objects.length;
};

GamesMemory.prototype.getResult = function(){
	return this.config.result;
};

GamesMemory.prototype.initialize = function(){
	config = this.config; 
	$("#verifica").remove();
	if(this.config.fundal!=null){
		$("#gameStage").append("<img id='fundal'>");
		util.setImageStyle($("#fundal"), this.config.fundal);
	}
	for (var i = 0; i < this.config.objects.length; i++) {
		$("#gameStage").append(
				"<img  src='"+this.config.backgroundImage+"' id='CidInput"+i+"' data-C-type='number' data-val='0'" +
						" data-index='" +i + "'" + 
						/*" data-sound='"+this.config.objects[i].sound+"' " +*/
						" data-response='" + this.config.objects[i].response + "'" +
						" maxlength="+this.config.objects[i].maxlength+" style='position:absolute;padding: 0;" +
						"transition:all 1s ease-in-out; perspective: 800px; perspective-origin: 50% 100px;" +
						"text-align:center;font-size:23px; outline: none; " +
						" border-color: #A77649;  box-shadow: 0 0 10px #A77649;z-index:99;" +
						"top:"+this.config.objects[i].top+"px;" +
						"left:"+this.config.objects[i].left+"px;" +
						"width:"+this.config.objects[i].width+"px;" +
						"height:"+this.config.objects[i].height+"px;"+
		"'/>");
	}
	var selected = -1;
	var selectedId = -1;
	
	$("*[data-C-type]").click(function(){
		/*playSound($(this).attr("data-sound"));*/
		if((selected==$(this).attr("data-response")) && 
				($(this).attr("data-index") != selectedId) ){
			$("*[data-response='"+$(this).attr("data-response")+"']").off().
							attr("data-val", "1");
		}
		selectedId = $(this).attr("data-index");
		selected = $(this).attr("data-response");
		$("*[data-C-type][data-val='0']").attr("src", config.backgroundImage);
		$(this).attr("src", imagesCommon.empty);
	});
	
	
};

