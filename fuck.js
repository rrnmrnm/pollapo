const scriptName="f**k.js";

function response(room, msg, sender, isGroupChat, replier, ImageDB) {
    var words = ["씨발", "병신", "병형신",  "개새",  "한남",  "재기",  "씨1발", "시발", "시1발",  "애미", "애비", "뒤진", "년", ",놈", "ㅈㄹ"];
    for (var n = 0; n < words.length; n++) {
    var  words2  =  msg.replace(/[^a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]/g,"");
        if (words2.indexOf(words[n]) != -1) {
            replier.reply("듣기 거북한 말이 감지되었습니다.\n"+sender+"님이 하신 말 : " +msg +"\n바른말과 고운말을 사용해야죠!!"+"\n감지된 욕: "+"*"+words[n].substr(1));
            break;
        }
    }
}
