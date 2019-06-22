const scriptName="memo.js";

var memoryIndex = [""];
var memoryData = [""];
var tempMemory = "";

var r = null;

function response(room, msg, sender, isGroupChat, replier, imageDB) {
	r = replier;
  	tempMemory = "";
	if(msg.startsWith("/기록")){
		var synCheck = msg.split(" ");
		if(synCheck.length < 3){
			print("오류 : 문법");
		}else{
			var title = msg.split(" ");
			var titleStartIndex = title.indexOf("제목:")+1;
			var titleEndIndex = title.indexOf("내용:");
			for (var i = titleStartIndex; i < titleEndIndex; i++){
				tempMemory = tempMemory + title[i] + " ";
			}
			if(tempMemory.startsWith("~")){
				print("오류 : 제목을 ~로 시작할 수 없습니다.");
			}else if(tempMemory == ("  ")){
				print("오류 : 제목  또는 내용이 비었습니다.");
				tempMemory = "";
			}else{
				memoryIndex.push(tempMemory);
				tempMemory = "";
				addRealData(msg,replier);
			}
		}
	}else if(msg.startsWith("/열람 ")){
		readMemory(msg,replier);
	}else if(msg.startsWith("/삭제")){
  		var synCheck = msg.split(" ");
		if(synCheck.length < 2){
			print("오류 : 문법");
		}else{
			var title = msg.split(" ");
			var titleStartIndex = 1;
			var titleEndIndex = title.length;
			for (var i = titleStartIndex; i < titleEndIndex; i++){
				tempMemory = tempMemory + title[i] + " ";
			}
			if(tempMemory.startsWith("~")){
				print("오류 : 제목을 ~로 시작할 수 없습니다.");
			}else if(tempMemory == ("  ")){
				print("오류 : 제목  또는 내용이 비었습니다.");
				tempMemory = "";
			}else{
				memoryIndex.splice(tempMemory);
				tempMemory = "";
			}
		}
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
		print("내용이 비어있습니다.");
		memoryIndex.splice(memoryIndex[memoryIndex.length-1]);
		tempMemory = "";
	}else{
		memoryData.push(tempMemory);
        tempMemory = "";
		print("기록되었습니다.");
	}
}


function readMemory(msg,replier){
	var memory = msg.split(" ");
	if(memory.length < 2){
		print("문법 오류입니다.");
	}else{
		for(var i = 1; i < memory.length; i++){
			tempMemory = tempMemory + memory[i] + " ";
		}
		if (msg == "/열람 ~최근기록"){
    		var latestIndex = memoryIndex.length - 1;
    		var output = "제목 : " + memoryIndex[latestIndex] + "\n내용 : " + memoryData[latestIndex];
			print(output);
      		tempMemory = "";
		}else if (msg == "/열람 ~리스트"){
			var output = "기록 리스트\n";
		      for (var i = 0; i < memoryIndex.length; i++){
		      	output = output + "[" + memoryIndex[i] + "] " + memoryData[i] + "\n";
		      }
				print(output);
		  		tempMemory = "";
		}else if(memoryIndex.indexOf(tempMemory) > -1){
			var output = "제목 : " + tempMemory + "\n내용 : " + memoryData[memoryIndex.indexOf(tempMemory)];
			print(output);
		 	 tempMemory = "";
			}else{
				print("문서를 찾지 못했습니다.");
				tempMemory = "";
			}
		}
}

function print(printable) {
	print(printable);
}