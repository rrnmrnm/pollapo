const scriptName="memo.js";

var memoryIndex = [];
var memoryData = [];
var tempMemory = "";

function response(room, msg, sender, isGroupChat, replier, imageDB) {
	if(msg.startsWith("/기록")){
		var synCheck = msg.split(" ");
		if(synCheck.length < 3){
			replier.reply("오류 : 문법");
		}else{
			var title = msg.split(" ");
			var titleStartIndex = title.indexOf("제목:")+1;
			var titleEndIndex = title.indexOf("내용:")+1;
			for (var i = titleStartIndex; i < titleEndIndex; i++){
				tempMemory = tempMemory + title[i] + " ";
			}
			if(tempMemory.startsWith("~")){
				replier.reply("오류 : 제목을 ~로 시작할 수 없습니다.");
			}else if(tempMemory == ("  ")){
				replier.reply("오류 : 제목  또는 내용이 비었습니다.");
				tempMemory = "";
			}else{
				memoryIndex.push(tempMemory);
				tempMemory == "";
				addRealData(msg,replier);
			}
		}
	}else if(msg.startsWith("/열람 ")){
		readMemory(msg,replier);
	}
}

function addRealData(msg,replier){
	var contents = msg.split(" ");
	var contentsStartIndex = contents.indexOf("내용:")+1;
	var contentsEndIndex = contents.length;
	for(var i = contentsStartIndex; i < contentsEndIndex; i++){
		tempMemory = tempMemory + contents[i]+" ";
	}
	if(tempMemory == ""){
		replier.reply("내용이 비어있습니다.");
		memoryIndex.splice(memoryIndex[memoryIndex.length-1]);
		tempMemory = "";
	}else{
		memoryData.push(tempMemory);
        tempMemory = "";
		replier.reply("기록되었습니다.")
	}
}


function readMemory(msg,replier){
	var memory = msg.split(" ");
	if(memory.length < 2){
		replier.reply("문법 오류입니다.");
	}else{
		for(var i = 1; i < memory.length; i++){
			tempMemory = tempMemory + memory[i] + " ";
		}
		if(memoryIndex.indexOf(tempMemory) > -1){
			var output = "제목 : " + tempMemory + "\n내용 : " + memoryData[memoryIndex.indexOf(tempMemory)];
			replier.reply(output);
		}else{
			replier.reply("문서를 찾지 못했습니다.");
			tempMemory = "";
		}
	}
}