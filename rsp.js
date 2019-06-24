const scriptName="rsp.js";

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){

 if(msg.indexOf("가위바위보 ")==0){
    var a = ["가위","바위","보"]
    var aa = [1,2,3]
    var b = Math.floor(Math.random()*3)
    a["가위"]=1; a["바위"]=2; a["보"]=3;
    var c = a[msg.substr(6)]-aa[b]
    if(c == '-1'|| c == '2'){
        a["가위"] = "바위"; a["바위"] = "보"; a["보"] = "가위"; 
        replier.reply("저는 "+a[msg.substr(6)]+"를 냈습니다.\n제가 이겼네요.ㅋ 풉!")
    } else if(c == '1'||c == '-2'){
        a["가위"] = "보"; a["바위"] = "가위"; a["보"] = "바위";
        replier.reply("저는 "+a[msg.substr(6)]+"를 냈습니다.\n제가 졌네요ㅠㅠ한 판 더해요!!")
    } else if(c=='0'){
        replier.reply("저는 "+msg.substr(6)+"를 냈습니다.\n쳇.. 비겼으니 다시 한 번 더!!")
    }
}

if(msg.indexOf("가위바위보 ")==0){
    var a = ["찌","묵","빠"]
    var aa = [1,2,3]
    var b = Math.floor(Math.random()*3)
    a["찌"]=1; a["묵"]=2; a["빠"]=3;
    var c = a[msg.substr(6)]-aa[b]
    if(c == '-1'|| c == '2'){
        a["찌"] = "묵"; a["묵"] = "빠"; a["빠"] = "찌"; 
        replier.reply("저는 "+a[msg.substr(6)]+"를 냈습니다.\n제가 이겼네요.ㅋ 풉!")
    } else if(c == '1'||c == '-2'){
        a["찌"] = "보"; a["빠"] = "찌"; a["빠"] = "묵";
        replier.reply("저는 "+a[msg.substr(6)]+"를 냈습니다.\n제가 졌네요ㅠㅠ한 판 더해요!!")
    } else if(c=='0'){
        replier.reply("저는 "+msg.substr(6)+"를 냈습니다.\n쳇.. 비겼으니 다시 한 번 더!!")
    }
}


}