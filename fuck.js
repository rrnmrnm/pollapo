const scriptName="f**k.js";

function response(room, msg, sender, isGroupChat, replier, ImageDB) {
    var words = ["씨발", "병신", "병형신",  "개새",  "한남",  "재기",  "씨1발", "시발", "시1발"];
    for (var n = 0; n < words.length; n++) {
        if (msg.indexOf(words[n]) != -1) {
            replier.reply("듣기 거북한 말이 감지되었습니다."+"\n바른말과 고운말을 사용해야죠!!");
            break;
        }
    }
}
