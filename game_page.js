player1name=localStorage.getItem("player1name");
player2name=localStorage.getItem("player2name");

player1score=0;
player2score=0;

qturn="player1";
answerturn="player2";

document.getElementById("player1name").innerHTML=player1name+" : ";
document.getElementById("player2name").innerHTML=player2name+" : ";

document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;

document.getElementById("playerq").innerHTML="Question turn- "+player1name;
document.getElementById("playerans").innerHTML="Answer turn- "+player2name;

function send(){
    getword=document.getElementById("word").value;
    word=getword.toLowerCase();
    console.log("word in lowercase= "+word);

    charAt1=word.charAt(1);
    console.log(charAt1);

    lengthdivide2=Math.floor(word.length/2);
    charAt2=word.charAt(lengthdivide2);
    console.log(charAt2);

    lengthminus1=word.length-1;
    charAt3=word.charAt(lengthminus1);
    console.log(charAt3);

    remove1=word.replace(charAt1,"_");
    remove2=remove1.replace(charAt2,"_");
    remove3=remove2.replace(charAt3,"_");
    console.log(remove3);

    qword="<h4 id='worddisplay'>Q. "+remove3+"</h4>";
    input="<br>Answer : <input type='text'i id='checkbox'>";
    checkbutton="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=qword+input+checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

function check()
{
    getans=document.getElementById("checkbox").value;
    ans=getans.toLowerCase();
    console.log("answer in lowercase - "+ans);
    if(ans==word){
        if(answerturn=="player1"){
        player1score=player1score+1;
        document.getElementById("player1score").innerHTML=player1score;
        }
    else{
        player2score=player2score+1;
        document.getElementById("player2score").innerHTML=player2score;
    }
}
if(qturn=="player1"){
    qturn="player2"
    document.getElementById("playerq").innerHTML="Question turn - "+player2name;
}
else{
    qturn="player1"
    document.getElementById("playerq").innerHTML="Question turn - "+player1name;
}
if(answerturn=="player1"){
    answerturn="player2"
    document.getElementById("playerans").innerHTML="Answer turn - "+player2name;
}
else{
    answerturn="player1"
    document.getElementById("playerans").innerHTML="Answer turn - "+player1name;
}
document.getElementById("output").innerHTML="";
}