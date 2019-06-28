const scriptName = "mail.js";

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId) {
  if (msg.indexOf("/쪽지 ") == 0) {
    var send0 = msg.substr(4, msg.length)
    var send1 = send0.split(":")
    var mail1 = send1[0]
    var mail2 = send1[1]

    DataBase.setDataBase("쪽지함/" + mail1 + "+" + room, msg.replace("/쪽지 " + mail1 + ":", ""));
    // replier.reply("<"+mail1+">"+"님에게 보내는 "+"<"+sender+">"+"님의 쪽지를 저장했습니다.");

    if (mail1 == "") {
      replier.reply("받는 사람의 이름이 비었습니다.\n/쪽지 (받는 사람 이름):(쪽지 내용)으로 해주세요.")
    } else if (mail2 == "") {
      replier.reply("쪽지 내용이 비었습니다.\n/쪽지 (받는 사람 이름):(쪽지 내용)으로 해주세요.")
    } else if (msg.indexOf(":") == -1) {
      replier.reply("쪽지 작성 방법이 틀렸습니다.\n/쪽지 (받는 사람 이름):(쪽지 내용)으로 해주세요.")
    } else if (mail1 != "" && mail2 != "") {
      replier.reply("<" + mail1 + ">" + "님에게 보내는 " + "<" + sender + ">" + "님의 쪽지를 저장했습니다.");
    } else {
      var mail = DataBase.getDataBase("쪽지함/" + mail1 + "+" + room);
      if (msg && mail != null); {   
        replier.reply("보내는 사람 : " + sender + "\n------------------------------\n" + mail);   
        DataBase.removeDataBase("쪽지함/" + mail1 + "+" + room);
      }
    }
  }
}