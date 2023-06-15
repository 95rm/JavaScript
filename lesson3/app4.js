let user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください");

let js_hand = getJShand();

let judge = winLose(user_hand, js_hand);

alert("あなたの選んだ手は" + user_hand + "です。 \nJavaScriptの選んだ手は" + js_hand + "です。\n結果は" + judge + "です。");

function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

function winLose(user, js){
  let winLoserStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoserStr = "あいこ";
    }else if(js =="チョキ"){
      winLoserStr = "勝ち";
    }else if(js == "パー"){
      winLoserStr = "負け";
    }
  }else if(user == "チョキ"){
    if(js == "グー"){
      winLoserStr = "負け";
    }else if(js == "チョキ"){
      winLoserStr = "あいこ";
    }else if(js == "パー"){
      winLoserStr = "勝ち";
    }
  }else if(user == "パー"){
    if(js == "グー"){
      winLoserStr = "勝ち";
    }else if(js == "チョキ"){
      winLoserStr = "負け";
    }else if(js == "パー"){
      winLoserStr = "あいこ";
    }
  }

  return winLoserStr;

}