    
    var sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
    var folder = new java.io.File(sdcard+"/메모/");
    folder.mkdirs();//sd카드에 학습 폴더를 생성합니다
    function save(folderName,fileName,str){
    var c=new java.io.File(sdcard + "/" +folderName+  "/" +fileName);
    var d=new java.io.FileOutputStream(c);
    var e=new java.lang.String(str);
    d.write(e.getBytes());
    d.close();
    }
    function read(folderName,fileName){ //파일 읽기 함수 제작
    var b=new java.io.File(sdcard + "/" +folderName+ "/" +fileName);
    if(!(b.exists())) return null; //만약 읽을 파일이 없다면 null 변환
    var c=new java.io.FileInputStream(b); 
    var d=new java.io.InputStreamReader(c);
    var e=new java.io.BufferedReader(d);
    var f=e.readLine();
    var g="";
    while((g=e.readLine())!=null){
    f+="\n"+g;   //\ = 역슬래쉬 → 줄바꿈 표시
    }
    c.close();
    d.close();
    e.close();
    return f.toString(); //읽은 파일 내용을 반환
    }

    var words = ["씨발", "시발", "한남", "남충", "충", "새끼", "끼", "온", "시온", "유영", "영진", "응균", "용진", "지랄", "ㅈㄹ", "랄"]

function response(room, msg, sender, isGroupChat, replier) { 

var 비속어감지 = false;

if(msg.indexOf("/가르치기") == 0) { //메세지가 /가르치기 라면
    var study0 = msg.substring(6,msg.length) //변수 study0은 /가르치기 다음으로 오는 메세지에 길이만큼 자릅니다
    var study1 = study0.split("=") //study1은 위에 study0을 "="기준으로 자릅니다
    var suy1 = study1[0] //suy1은 만약 "버구=짱짱" 에서 "="기준으로 0번째 버구로 지정합니다
    var suy2 = study1[1] //suy2은 만약 "버구=짱짱" 에서 "="기준으로 1번째 짱짱으로 지정합니다
    for (var n = 0; n < words.length; n++) {
    if (suy1.indexOf(words[n]) != -1) { //만약 suy1이 words배열안에 있는 욕이 감지됬다면
    replier.reply("삐빅! 부적절 한 말 감지.\n"+"*"+words[n].substr(1)+"때문에 추가시킬 수 없습니다."); //여기는 제 블로그 비속어 강좌를 통해 알 수 있습니다
    비속어감지 = true; //욕이 감지되서 비속어감지를 true로 바꿔줍니다
    break; //탈출
    }
    else if (suy2.indexOf(words[n]) != -1) { //만약 suy2이 words배열안에 있는 욕이 감지됬다면
    replier.reply("삐빅! 부적절 한 말 감지.\n"+"*"+words[n].substr(1)+"때문에 추가시킬 수 없습니다.");
    비속어감지 = true;
    break; //여기도 위에랑 같습니다
    }

    else if (suy2 == "") { //만약 suy2가 공백이라면 "/가르치기 안녕= " 일때 를 말합니다
    replier.reply("잘못입력 하셨습니다.\n/입력하기 (가르칠 말)=(가르칠 내용) 으로 해주세요.");
    비속어감지 = true;
    break;
    }
    else if (suy1 == "") { //만약 suy1가 공백이라면 "/가르치기 =안녕 " 일때 를 말합니다
    replier.reply("잘못입력 하셨습니다.\n/입력하기 (가르칠 말)=(가르칠 내용) 으로 해주세요.");
    비속어감지 = true;   
    break;
    } 
    }

    if (비속어감지 == false) {
    replier.reply(suy1  +"을(를) "  +suy2 + "(으)로 배웠습니다."); //버구을 짱짱으로 배웠습니다 라고  뜹니다
    var folder = new java.io.File(sdcard+"/학습/");
    folder.mkdirs(); //sd카드에 학습폴더를 생성해줍니다 
    save("학습",suy1.trim()+ ".txt", suy2)
    //학습폴더에 suy1변수에 공백을 제거에 txt로 저장하고 그내용은 suy2로 넣습니다
    //위에 설정한대로 봐주시면 버구가 txt파일이고 txt안에 내용은 짱짱이 됩니다
    }
    }
    var talk = read("학습",msg+".txt") //talk은 학습폴더에 메세지에 txt를 읽습니다
    if(talk !== null) { //만약 talk이 아무것도 동일하지 않은 유형이 아니라면
    replier.reply(talk) //메세지에 txt안에있는 내용을 보내줍니다
    }
   
    if (msg.indexOf("/학습제거") == 0) { //메세지가 학습제거 라면
    replier.reply(msg.substr(6) + "의 학습내용 : " + read("학습",msg.substr(6)  +  ".txt")); // "/학습제거 버구"라면 학습폴더에 버구.txt에 내용을 읽습니다 만약 내용이 없다면 null로 반환됩니다
            new java.io.File("sdcard/학습/" + msg.substr(6) + ".txt").delete() // 학습폴더에 버구 .txt를 삭제합니다
        replier.reply(msg.substr(6) + " 학습내용을 제거했습니다!"); //제거했다고 뜹니다
}

}//몸체닫기
