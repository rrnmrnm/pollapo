const scriptName = "lol.js";

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId) {
  if (msg.indexOf("롤전적 ") == 0) {
    var u = Utils.getWebText("http://www.op.gg/summoner/userName="+encodeURI(msg.substr(4)))
    var a = u.split("<meta name=\"description\" content=\""+msg.substr(4))[1].split("\">")[0].replace(/, /g, "\n").replace(/[/]/g, "\n")
    if (a.match("Challenger") == null) {
      a = a.replace(/ (?!\d)/, "").split(" ");
      b = a[1];
      replier.reply("["+msg.substr(4)+" 롤 전적]\n"+"티어: "+b+" "+a[3]+"\n"+"승리: "+a[5]+"\n"+"패배: "+a[6]+"\n"+"승률: "+a[9])
    } else {
      if (a == null || a == "") {
        replier.reply("전적을 불러오는데 실패하였습니다.");
      }else{
        a = a.split(" ")
        replier.reply("["+msg.substr(4)+" 롤 전적]\n"+"티어: "+a[2]+" "+a[3]+"\n"+"승리: "+a[5]+"\n"+"패배: "+a[6]+"\n"+"승률: "+a[9])
      }
    }
  }
}