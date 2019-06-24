const scriptName="on.off.js";

 var botOn = true;
var admin = ["시온"];
var command;
var target;

function response(room, msg, sender, isGroupChat, replier, imageDB) {
    if (msg.indexOf ("/전원 ") == 0) {
    command = msg.substr (4);
    if (admin.indexOf (sender) != -1) {
        if (command == "켜기") {
            if (botOn == true) {
                replier.reply ("일하고 있습니다. -_-;");
            } else {
                botOn = true;
                Api.on();
                replier.reply ("띠링! 시온봇 출근했어요!");
            }
        }
        if (command == "끄기") {
            if (botOn == true) {
                botOn = false;
                Api.off();
                replier.reply ("띠링! 시온봇은 퇴근 합니다! 야호!~");
            } else {
                replier.reply ("퇴근했어요..제발..ㅠ");
            }
        }   
    } else {
        replier.reply (sender + "님은 주인이 아니므로 이 명령어를 사용하실 수 없습니다.");
    }
    if (! (botOn)) return;  
if (msg.indexOf ("/관리자 ") == 0 &&  admin.indexOf  (sender)  !=   -1)  {
command = msg.substr (5);
        if (command.indexOf ("추가 ") == 0) {
            target = command.substr (3);
            if (admin.indexOf (target) != -1) {
                replier.reply (target + "님은 이미 주인 목록에 포함되어 있습니다.");
            } else {
                admin.push (target);
                replier.reply (target + "님을 주인 목록에 추가했습니다.");
            }
        }
        if (command.indexOf ("삭제 ") == 0) {
            target = command.substr (3);
            if (admin.indexOf (target) != -1) {
                admin.splice (admin.indexOf (target), 1);
                replier.reply (target + "님을 주인 목록에서 제거했습니다.");
            } else {
                replier.reply (target + "님은 주인 목록에 포함되어 있지 않습니다.");
            }
        }
    }
}
}