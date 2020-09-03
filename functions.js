var currentChoice = null;
var cChoice=null;
var textWin = '';
var result='';
var resultArray=[];
var allChoices = ['rock','paper','scissors'];

function setChoice(newChoice) {
    var record=[];
    currentChoice = newChoice;
    document.getElementById('youChoice').src = './Materials/'+currentChoice+'.png';
    computersChoice();
    checkWin();
    record.push(result);
    record.push(currentChoice);
    record.push(cChoice);
    resultArray.push(record);
    console.log(textWin);
    console.log(resultArray);
    updateRecord();
    setTimeout(function(){ openResult(); }, 1500);
}
function computersChoice() {
    var x = Math.floor((Math.random() * 3));
    cChoice=allChoices[x];
    document.getElementById('computerChoice').src = './Materials/'+cChoice+'.png';
}
function checkWin() {
    if (currentChoice == cChoice) {
        result = "Tie";
    }
    else if (currentChoice == 'rock') {
        if (cChoice == 'scissors') 
            result = "Won";
        else
            result = "Lost";
    }
    else if (currentChoice == 'paper') {
        if (cChoice == 'rock') 
            result = "Won";
        else
            result = "Lost";
    }
    else if (currentChoice == 'scissors') {
        if (cChoice == 'paper') 
            result = "Won";
        else
            result = "Lost";
    }

    if (result == "Won") 
        textWin = "You Won!!!";
    else if (result == "Lost") 
        textWin = "You Lost.";
    else if (result == "Tie") 
        textWin = "eh...It's a Tie";
}
function updateRecord() {
    var winsNo = 0;
    var losesNo = 0;
    var tiesNo = 0;
    for (var i=0;i<resultArray.length;i++) {
        if (resultArray[i][0]==='Won') {
            winsNo+=1;
        }
        else if (resultArray[i][0]==='Lost') {
            losesNo+=1;
        }
        else if (resultArray[i][0]==='Tie') {
            tiesNo+=1;
        }
    }
    var statusList = document.getElementsByClassName('status');
    var yourChoiceList = document.getElementsByClassName('you-img');
    var compChoiceList = document.getElementsByClassName('comp-img');
    document.getElementById('winsNo').innerHTML=winsNo;
    document.getElementById('losesNo').innerHTML=losesNo;
    document.getElementById('tiesNo').innerHTML=tiesNo;
    for (var i =1;i<4;i++) {
        if (resultArray.length-i >=0) {
            statusList[i-1].innerHTML = resultArray[resultArray.length-i][0];
            yourChoiceList[i-1].src='./Materials/'+ resultArray[resultArray.length-i][1]+'.png';
            compChoiceList[i-1].src='./Materials/'+ resultArray[resultArray.length-i][2]+'.png';
        }
    }
}
function openResult() {          
    document.getElementById('winOverlay').style.width='100%'; 
    document.getElementById('playArea').setAttribute('style','filter:blur(8px);'); 
    setTimeout(function(){ document.getElementById('winOverlay-content').setAttribute('style','display:block;');  }, 1000);
    document.getElementById('resultGif').src='./Materials/'+result+'.gif';
}
function closeResult() {
    document.getElementById('winOverlay').style.width='0';
    document.getElementById('playArea').setAttribute('style','filter:blur(0px);'); 
    document.getElementById('winOverlay-content').setAttribute('style','display:none;'); 
}
function playAgain() {
    
    closeResult();
    document.getElementById('youChoice').src ='';
    document.getElementById('computerChoice').src ='';
    currentChoice = null;
    cChoice=null;
    textWin = '';
}

//LightMode
$(document).ready(function(){
    $('.toggleLight').click(function() {
        
        $('.fullWindow').toggleClass('light_fullWindow');
        $('.playerName').toggleClass('light_playerName');
        $('.nameInput').toggleClass('light_nameInput');
        $('.score').toggleClass('light_score');
        $('.history').toggleClass('light_history');
        $('.gameWindow').toggleClass('light_gameWindow');
    });
});
