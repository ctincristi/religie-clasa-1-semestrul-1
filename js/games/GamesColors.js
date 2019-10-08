
function GamesColors(config){
	this.config = config;
}

GamesColors.prototype.resetLevel = function() {
	for (var j = 0; j <  this.config.objects.length; j++) {
		$("#imgBook" + j).attr("src","images/butoane_fereastra_joc/empty.png");
	}
};

GamesColors.prototype.checkIfFinish = function() {
	//return true;
	return false;
};

GamesColors.prototype.getCorrectAnswer = function(){
	for (var j = 0; j <  this.config.objects.length; j++) {
		$("#imgBook" + j).attr("src",config.imagesSrc+
				this.config.objects[j].imageFolder+
    			this.config.objects[j].response+".png");
	}
};

GamesColors.prototype.checkSingleResultIndex = function(index){
	return (this.config.objects[index].response == $("#imgBook"+index).attr("data-color-index"));
};

GamesColors.prototype.getCheckLength = function(){
	return this.config.objects.length;
};

GamesColors.prototype.getResult = function(){
	return this.config.result;
};

GamesColors.prototype.initialize = function(){
	var color = 0;
	config = this.config;
	$("#bodyGame").append("<div id='gameStage' style='position:static;width:"+($("#gameDiv").width()-210*scale)+"px;height:"+$("#gameDiv").height()+"px'>" +
	"</div>");
	$("#gameStage").append(
		"<img id='imgbag' src='"+config.fundal.src+"' style='position:absolute;" +
		"top:"+config.fundal.top+"px;" +
		"left:"+config.fundal.left+"px;" +
		"width:"+config.fundal.width+"px;" +
		"height:"+config.fundal.height+"px;'/>");
	/*if(config.sounds != null){
	for(var i=0;i<config.sounds.length;i++){
	$("#gameStage").append("<img id='casti' class='sounds' value='"
	  + config.soundsSrc
	  + config.sounds[0].src+
	"' style=\"position:absolute; cursor:pointer;z-index: 3; " +
	"top:"+config.sounds[i].top+"px;" +
	"left:"+config.sounds[i].left+"px;" +
	"width:"+(100*scale)+"px;height:"+(100*scale)+"px;" +
	"\" src='images/butoane_main/casti.png' "+
	"\">");
	}
	}*/
	var colors = [];
	for (var i = 0; i < config.pencils.length; i++) {
		colors[i] = config.pencils[i].color;
		$("#gameStage").append(
			"<img id='pencil"+i+"' data-index="+i+" class='pencil' " +
			"src='"+config.pencil.src + config.pencils[i].image+"'" +
			" style='z-index:5;position:absolute;cursor:pointer;" +
			"top:"+config.pencils[i].top+"px;" +
			"left:"+config.pencils[i].left+"px;" +
			"width:"+config.pencil.width+"px;" +
			"height:"+config.pencil.height+"px;'/>");
	}
	for (var i = 0; i < config.objects.length; i++) {
		$("#gameStage").append(
			"<img id='imgBook"+i+"' data-index="+i+" class='a' data-selected='0' data-color-index='' " +
			"src='images/butoane_fereastra_joc/empty.png'" +
			" style='z-index:5;position:absolute;" +
			"top:"+config.objects[i].top+"px;" +
			"left:"+config.objects[i].left+"px;" +
			"width:"+config.objects[i].width+"px;" +
			"height:"+config.objects[i].height+"px;" +
			"cursor:pointer;'/>");
		/*$("#gameStage").append("<img id='checkImage"+i+"' class='chkImg' " +
			"style=\"position:absolute;visibility:hidden;z-index:399;width23:px;height:23px;" +
			"top:"+config.objects[i].top+"px;" +
			"left:"+config.objects[i].left+"px;\" " +
			" src='images/butoane_fereastra_joc/ok.png' />");*/
		util.setCheckImage(this.config.nameGame,this.config.objects[i],i,-20,25);
	}
	
	if(config.sounds!=null){
		util.playAudio($("#gameStage"),config.sounds[0].top,
		config.sounds[0].left,0.8,config.soundsSrc
		+ config.sounds[0].src);
	}
	
	$("#gameStage").css("-webkit-transform", "scale(" + (scale*3) + ")");
	$("#gameStage").css("-webkit-transform-origin","0% 0%");
	$("#gameStage").css("transform", "scale(" + (scale*3) + ")");
	$("#gameStage").css("transform-origin","0% 0%");
	$("#gameStage").css("-ms-transform", "scale(" + (scale*3) + ")");
	$("#gameStage").css("-ms-transform-origin","0% 0%");
	
	$("#gameStage").children().css("cursor","url('images/games/acuarela/pensula_none2.png') 0 89, pointer");
	$("#bodyGame").css("cursor","url('images/games/acuarela/pensula_none2.png') 0 89, pointer");
	
	$(".pencil").click(function (e) {
		if(!isActive)
		return false;
		$("#pencil"+color).attr("src", config.pencil.src + 
						config.pencils[color].image);
		color = ($(this)).attr("data-index");
		($(this)).attr("src", config.pencil.src + 
		config.pencils[color].imageSelected);
	});
	
	$(".a").click(function (e) {
		if(!isActive)
		return false;
		($(this)).attr("src",config.imagesSrc+
		config.objects[($(this)).attr("data-index")].imageFolder+
		colors[color]+".png");
		($(this)).attr("data-color-index",colors[color]);
	});
	
	$(".sounds").click(function(event) {
		if(!isActive)
		return false;
		event.stopPropagation();
		playSound($(this).attr('value'));
	});	    
	$("#gameStage").click(function(e) {
		console.log("left:"+Math.round((e.pageX-$("#gameStage").offset().left)/scale/3)+",top:"+
		Math.round((e.pageY-$("#gameStage").offset().top)/scale/3)+"");});
};


