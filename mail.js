const scriptName = "mail.js";

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId) {
  if (msg.indexOf("/쪽지 ") == 0) {
    var send0 = msg.substr(4, msg.length)
    var send1 = send0.split(":")
    var destination = send1[0]
    var contents = send1[1]
    //DataBase.setDataBase("쪽지함/" + destination + "+" + room, msg.replace("/쪽지 " + destination + ":", ""));
    if (destination == "") {
      replier.reply("받는 사람의 이름이 비었습니다.\n/쪽지 (받는 사람 이름):(쪽지 내용)으로 해주세요.")
    } else if (contents == "") {
      replier.reply("쪽지 내용이 비었습니다.\n/쪽지 (받는 사람 이름):(쪽지 내용)으로 해주세요.")
    } else if (msg.indexOf(":") == -1) {
      replier.reply("쪽지 작성 방법이 틀렸습니다.\n/쪽지 (받는 사람 이름):(쪽지 내용)으로 해주세요.")
    } else if (destination != "" && contents != "") {
      // DataBase.setDataBase("쪽지함/" + destination + "+" + room, sender + " 님으로부터 온 쪽지입니다.\n\n" + msg.replace("/쪽지 " + destination + ":", ""));
      // 위에것 ~로부터 온 쪽지입니다 를 표현한 명령어입니다. 이 명령어를 쓰실 경우 아래 있는 명령어를 삭제해 주세요.
      DataBase.setDataBase("쪽지함/" + destination + "+" + room, msg.replace("/쪽지 " + destination + ":", ""));
      replier.reply("<" + destination + ">" + "님에게 보내는 " + "<" + sender + ">" + "님의 쪽지를 저장했습니다.");
    } 
  }else {
    var mail = DataBase.getDataBase("쪽지함/" + sender + "+" + room);
    if (msg && mail != null); {   
      replier.reply(sender + "님 앞으로 온 쪽지입니다.\n------------------------------\n" + mail);   
      DataBase.removeDataBase("쪽지함/" + sender + "+" + room);
    }
  }
}