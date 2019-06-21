const scriptName="check.js";

let  classes  =  ["weather.js",  "lol.js",  "teach.js",  "check.js",  "korean",  "rsp.js",  "trans.js",  "numbergame.js",  "on.off.js"]

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){

if (msg == "/시온봇 상태") {
     stat(replier);  
  }
}

function stat(replier) {
    var list = "";
    for (var i = 0; i < classes.length; i++) {
        list = list + classes[i] + ": ";
        if (Api.isOn(classes[i] + ".js")) {
            list = list + "온라인\n";
        }else{
            list = list + "오프라인\n";
        }

  }
  replier.reply(list);
}