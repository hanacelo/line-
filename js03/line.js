    // // Import the functions you need from the SDKs you need
    // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

    // //追加１
    // import { getDatabase, ref, push, set, onChildAdded, remove, onChildRemoved } 
    // from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

    // // TODO: Add SDKs for Firebase products that you want to use
    // // https://firebase.google.com/docs/web/setup#available-libraries
  
    // // Your web app's Firebase configuration
    // const firebaseConfig = {
    //   apiKey: "AIzaSyC7E21yKoD48HtYYwdyusTFed16BsSmcek",
    //   authDomain: "gsdemo-82d24.firebaseapp.com",
    //   projectId: "gsdemo-82d24",
    //   storageBucket: "gsdemo-82d24.appspot.com",
    //   messagingSenderId: "57539675220",
    //   appId: "1:57539675220:web:3b88601c2014d13775d9c1"
    // };
  
    // // Initialize Firebase
    // const app = initializeApp(firebaseConfig);

    // //追加２
    // const db  = getDatabase(app); //RealtimeDBに接続
    // const dbRef = ref(db,"chat"); //RealtimeDB内の"chat"を使う


   

//エンターキーを押すと、#meにテキストが送信される【完成！】
$('#text').keydown(function (e) {

    //#textにいれたものを、textに内部的に変換
    const text = $('#text').val();
    console.log(text ,"入力したテキスト")

    //htmlっていうのは、#meに入れるtextのことだよと教える？
    const html =`<div id= "me">${text}</div>`;


    //もしエンターキーを押されたら、#meにappendで表示？
    if(e.keyCode == 13){
        $("#me").prepend(html);
    };

});



//#textを内部的にtextに変換。そして定義
let text = $('#text').val();

//#aiteを内部的にtextに変換。そして定義
let aite = $('#aite').val();

//もし#text(変数text)に特定の文字が入ったら、#aite(aite)に特定の文を表示

$("#text").enterKey(function(e){
    if(text ==="ここ"){
        aite.append("マダガスカル！");
    }else if(text === "君のハートに"){
        aite.append("レボリューション☆");
    }else{aite.append();};
});

    






// //ここは一旦うごくけどコメントアウトで！
// //ここから、もし#meに特定の文字が入力されると、#aiteに特定の言葉が来るようにする
// $(function(){

//     //wordっていうのは、これですって教えてあげる
//     const chat = [
//         "レボリューション！",
//         "マダガスカル！",
//         "そーれ！！！",
//     ]

//     //htmlを#aiteタグのwordというものに可視化 
//     const html = `<div id= "aite">${chat}</div>`;

//     //#meに特定の言葉があったら、#aiteにappendする
//     if("#me".indexOf("こんにちは")>-1){
//         $("#aite").append(html);
//     }else if("#me".indexOf("おはよう")>-1){
//         $("#aite").append(html);
//     }else if("#me".indexOf("ありがとう")>-1){
//         $("#aite").append(html);
//     }else if("#me".indexOf("怒")>-1){
//         $("#aite").append(html);
//     }else if("#me".indexOf("喜")>-1){
//         $("#aite").append(html);
//     }
// });





//      //データ登録（firebaseに）
//     const msg = {
//         text:$('#text').val(),
//     }

//     //【この辺りはよくわからんけど、コピペでいいって信じてる】
//     //ユニークKEYを生成 = 絶対に被らない番号みたいなもの
//     const newPostRef = push(dbRef);
//     //chatにユニークキーをつけてオブジェクトデータを登録
//     //setでデータを送れる（塊で送ることが大事）
//     set(newPostRef,msg);
// });


//  //最初のデータ取得＆onSnapshotでリアルタイムにデータを取得
//  onChildAdded(dbRef,function(data){
//     const msg = data.val();
//     const key  = data.key;
    
//     //表示テキスト
//     let h = '<p>';
//         h += msg.uname; //この辺りはテンプレートリテラルで書き直せるらしい
//         h += '<br>';
//         h += msg.text;
//         h += '</p>';
//         $("#output").append(h);    //outputに追加  
    
//     //これがテンプレートリテラルの書き方    
//     let h = `'<p>${msg.uname}<br  />${msg.text}</p>`;

// });