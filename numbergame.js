const scriptName="numbergame.js";

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){
    
 if(msg.trim()=="숫자 게임"){
    var a = Math.floor(Math.random()*7+1)
    var b = Math.floor(Math.random()*7+1)
    var c = Math.floor(Math.random()*7+1)
    var o = ['□■□','■■□','□■□','□■□','□■□']
    var t = ['■■■','□□■','■■■','■□□','■■■']
    var th = ['■■■','□□■','■■■','□□■','■■■']
    var f = ['■□■','■□■','■■■','□□■','□□■']
    var fi = ['■■■','■□□','■■■','□□■','■■■']
    var s = ['■■■','■□□','■■■','■□■','■■■']
    var se = ['■■■','□□■','□□■','□□■','□□■']
    var ca = {1:o,2:t,3:th,4:f,5:fi,6:s,7:se}
    var first = ca[a]; var second = ca[b]; var third = ca[c]
    var list = ""
    for(var i = 0;i<5;i++){
        list  += first[i]+'  '+second[i]+'  '+third[i]+"\n"
    }
list = list.replace(/□/g,"░").replace(/■/g,"■")
    if(a==b&&b==c){
        replier.reply(list+"[오! 당첨!! 축하해!]")
    } else {
        replier.reply(list+"[풉ㅋ풉ㅋ 너는 계속 꽝일걸?ㅋ]")
    }
}
}