// console.log("linked djsbfefg");
var userAns1=0;
var userAns2=0;
var userAns3=0;
var userAns4=0;
var userAns5=0;

function radioVal(){
    // clearTimeout(timeOut);
    clearInterval(clear);
    var ans1 = document.getElementsByName('answer1');
    var ans2 = document.getElementsByName('answer2');
    var ans3 = document.getElementsByName('answer3');
    var ans4 = document.getElementsByName('answer4');
    var ans5 = document.getElementsByName('answer5');


    for(var i=0; i<ans1.length; i++){
        if(ans1[i].checked){
            // console.log( "ansewr1: " + ans1[i].value)
            userAns1= ans1[i].value;
        }
    }

    for(var i=0; i<ans2.length; i++){
        if(ans2[i].checked){
            // console.log( "ansewr2: " + ans2[i].value)
            userAns2= ans2[i].value;
        }
    }

    for(var i=0; i<ans3.length; i++){
        if(ans3[i].checked){
            // console.log( "ansewr3: " + ans3[i].value)
            userAns3= ans3[i].value;
        }
    }

    for(var i=0; i<ans4.length; i++){
        if(ans4[i].checked){
            // console.log( "ansewr4: " + ans4[i].value)
            userAns4= ans4[i].value;
        }
    }
    
    for(var i=0; i<ans5.length; i++){
        if(ans5[i].checked){
            // console.log( "ansewr5: " + ans5[i].value)
            userAns5= ans5[i].value;
        }
    }

    result(userAns1, userAns2, userAns3,userAns4, userAns5);

}

function result(user1, user2, user3, user4, user5){
    var marks=0;
    if(user1 == 'a'){
        // console.log(user1);
        marks++;
    }
    if(user2 == 'c'){
        // console.log(user2);
        marks++;
    }
    if(user3 == 'c'){
        // console.log(user3);
        marks++;
    }
    if(user4 == 'd'){
        // console.log(user4);
        marks++;
    }
    if(user5 == 'a'){
        // console.log(user5);
        marks++;
    }
    console.log(marks);
    generalKnowledge(marks);
}

function generalKnowledge(number){
    document.getElementById('apple').innerHTML='Answers: '
    document.getElementById('mango').innerHTML='145 , 9 , 5 , 81 , 100 '
    var gk= 0;
    switch (number) {
        case 0:
            document.getElementById('banana').innerHTML='Better luck next time'; 
            break;

        case 1:
            document.getElementById('banana').innerHTML='You have POOR IQ';
            break;
        
        case 2:
            document.getElementById('banana').innerHTML='You have BAD IQ';
            
            break;

        case 3:
            document.getElementById('banana').innerHTML='You have GOOD IQ';
            break;

        case 4:
            document.getElementById('banana').innerHTML='You have STRONG IQ';
            break;

        case 5:
            document.getElementById('banana').innerHTML='You have VERY STRONG IQ';
            break;
    
        default:
            break;
    }
}
// let timeOut = setTimeout(() => {
//     alert("Time up. Your answers have been submitted.");
//     radioVal();
// }, 60000);

let sec=0;
let clear=setInterval(() => {
        sec++;
        if(sec<=60){
            document.getElementById('timer').innerHTML= sec+ ' seconds';
        }
        
        if(sec==61){
            alert("Time up. Your answers have been submitted.");
            radioVal();
            clearInterval(clear);
        }
       
   
}, 1000);
// console.log("timeout id is "+ timeOut)