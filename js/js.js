//Storage informations of player
var name;
var age;

//Storage events of player
var clicks = 0;
var id_OnDrop = 0;
var idImg;

//Who is playing
var playing = 1;
var canMove = true; //Gonna check if bot can move some piece

//Zero or 0 meaning that haven't piece on this position of board
//One or 1 meaning that have piece of bot on this position of board
//Two or 2 meaning that have piece of player on this position of board

var map = new Array(64);
  map = [
  0, 1, 0, 1, 0, 1, 0, 1,
  1, 0, 1, 0, 1, 0, 1, 0,
  0, 1, 0, 1, 0, 1, 0, 1,
  1, 0, 1, 0, 1, 0, 1, 0,
  0, 1, 0, 1, 0, 1, 0, 1,
  1, 0, 1, 0, 1, 0, 1, 0,
  0, 1, 0, 1, 0, 1, 0, 1,
  1, 0, 1, 0, 1, 0, 1, 0
];

function drawPieces(){
  for( var i = 0; i <= 63; i++ )
  {
    if( map[i] == 9 )
    {
      //Fill with pieces of bot
      document.getElementById(i).innerHTML = "<img src='WhitePiece.png' class='img' id=piece"+i+">";
    }else if ( map[i] == 8 ) {
      //Fill with pieces of player
      document.getElementById(i).innerHTML = "<img src='BlackPiece.png' class='img' draggable='true' ondragstart='drag(event)' id=piece"+i+">";
    }
  }
}

function drawMap(){
  var cont = 0, color ="branca";

  for( var i = 0; i <= 7; i++)
  {
    for( var j = 0; j <= 7; j++ )
    {
      document.getElementById("mesa").innerHTML += "<div class="+color+" id="+cont+" ondrag='getId(this.id)' ondrop='drop(event, this.id)' ondragover='allowDrop(event)'></div>";

      if( color == "branca")
      {
        color = "preta";
      }else{
        color = "branca";
      }

      console.log(cont);
      cont++;
    }
    document.getElementById("mesa").innerHTML += "<br>";
    if( color == "branca")
    {
      color = "preta";
    }else{
      color = "branca";
    }
  }
}
const exa=(id)=>{
console.log('this is the ' + id)
}
function clearPieces(){
  for( var i = 0; i <= 64; i++)
  {
    if( map[i] == 1 ) {
      document.getElementById(i).innerHTML = "";
    }
  }
}

let currentNumberOfPiece=[]

function getPlayerPiecePositions() {
  var playerPiecePositions = [];

  for (var i = 0; i < map.length; i++) {
    if (map[i] === 8) {  // Assuming 8 represents the player's piece
      playerPiecePositions.push(i);
      currentNumberOfPiece.push(i)
    }
  }
  return playerPiecePositions;
}
// function getRandomPlayerPiecePosition() {
//   var playerPiecePositions = getPlayerPiecePositions();

//   if (playerPiecePositions.length === 0) {
//     // No player pieces found
//     return null;
//   }

//   var randomIndex = Math.floor(Math.random() * playerPiecePositions.length);
//   return playerPiecePositions[randomIndex];
// }



function startPosition(){
  drawMap();
  for( var i = 0; i <= 23 ; i++ )
  {
    if( map[i] == 1 )
    {
      map[i] = 9; //Filling the map with pieces of bot
    }
  }
  for( var i = 40; i <= 63 ; i++ )
  {
    if( map[i] == 1 )
    {
      map[i] = 8; //Filling the map with pieces of player
        var playerPositions = getPlayerPiecePositions();
        console.log("ppp"+playerPositions);
     
    }
  }

  //Drawing the pieces;
  drawPieces();
}


let randomuserposition;

function fivesecondinterval() {
  // Your code to be executed every 0.5 seconds goes here
  var playerPositions = getPlayerPiecePositions();
  let nwval=new Array(playerPositions)
  let newvalue = nwval[0]
  const randomIndex = Math.floor(Math.random() * newvalue.length);
  const randompeice=newvalue[randomIndex]
  console.log(randompeice)
  randomuserposition=randompeice
  return randompeice
}







const questionBank =[
  
  {
  id:1,
  question:{dquestion:'Find the nth term and the sum nth term of the AP: 2, 3, 4, 5, 6…. an, if the number of terms are 20.',
  steps:{
    step1:{dstep:'step1: determine the first term of the series',hint:'this are always the first value of the series'},
    step2:{dstep:'step2: determine the common difference',hint:'subtract the first term from the second term of the series'},
    step3:{dstep:'step3: Determine the number of term',hint:'total number of numbers in the series'},
    step4:{dstep:'step4: Subtract 1 from value of n and multiply the result by the value of common difference d',hint:'(n-1)*d'},
    step5:{dstep:'step5: Add the value of the first term a, with the result gotten from step 4',hint:'a + (n-1)*d'},
    step6:{dstep:'step6: Multiply the value of a by 2, and add the result to the value gotten from step 4',hint:'2 * a + (n - 1) * d.'},
    step7:{dstep:'step7:Divide the number of terms n by 2, and multiply it by the value gotten from step 6',hint:"n/2(2*a + (n-1) * d). "}
  }},
  answer:{step1:2,
          step2:1,
          step3:20,
          step4:19,
          step5:25,
          step6:23,
          step7:230
        },
  level:1
},
{
  id:1,
  question:{dquestion:'Find the nth term and the sum nth term of the AP: 2, 3, 4, 5, 6…. an, if the number of terms are 20.',
  steps:{
    step1:{dstep:'step1: determine the first term of the series',hint:'this are always the first value of the series'},
    step2:{dstep:'step2: determine the common difference',hint:'subtract the first term from the second term of the series'},
    step3:{dstep:'step3: Determine the number of term',hint:'total number of numbers in the series'},
    step4:{dstep:'step4: Subtract 1 from value of n and multiply the result by the value of common difference d',hint:'(n-1)*d'},
    step5:{dstep:'step5: Add the value of the first term a, with the result gotten from step 4',hint:'a + (n-1)*d'},
    step6:{dstep:'step6: Multiply the value of a by 2, and add the result to the value gotten from step 4',hint:'2 * a + (n - 1) * d.'},
    step7:{dstep:'step7:Divide the number of terms n by 2, and multiply it by the value gotten from step 6',hint:"n/2(2*a + (n-1) * d). "}
  }},
  answer:{step1:2,
          step2:1,
          step3:20,
          step4:19,
          step5:25,
          step6:23,
          step7:230
        },
  level:1
},
{
  id:2,
  question:{dquestion:'Find the nth term and the sum nth term of the AP: 2, 3, 4, 5, 6…. an, if the number of terms are 20.',
  steps:{
    step1:{dstep:'step1: determine the first term of the series',hint:'this are always the first value of the series'},
    step2:{dstep:'step2: determine the common difference',hint:'subtract the first term from the second term of the series'},
    step3:{dstep:'step3: Determine the number of term',hint:'total number of numbers in the series'},
    step4:{dstep:'step4: Subtract 1 from value of n and multiply the result by the value of common difference d',hint:'(n-1)*d'},
    step5:{dstep:'step5: Add the value of the first term a, with the result gotten from step 4',hint:'a + (n-1)*d'},
    step6:{dstep:'step6: Multiply the value of a by 2, and add the result to the value gotten from step 4',hint:'2 * a + (n - 1) * d.'},
    step7:{dstep:'step7:Divide the number of terms n by 2, and multiply it by the value gotten from step 6',hint:"n/2(2*a + (n-1) * d). "}
  }},
  answer:{step1:2,
          step2:1,
          step3:20,
          step4:19,
          step5:25,
          step6:23,
          step7:230
        },
  level:2
},
{
  id:3,
  question:{dquestion:'Find the nth term and the sum nth term of the AP: 2, 3, 4, 5, 6…. an, if the number of terms are 20.',
  steps:{
      step1:{dstep:'step1: determine the first term of the series',hint:'this are always the first value of the series'},
      step2:{dstep:'step2: determine the common difference',hint:'subtract the first term from the second term of the series'},
      step3:{dstep:'step3: Determine the number of term',hint:'total number of numbers in the series'},
      step4:{dstep:'step4: Subtract 1 from value of n and multiply the result by the value of common difference d',hint:'(n-1)*d'},
      step5:{dstep:'step5: Add the value of the first term a, with the result gotten from step 4',hint:'a + (n-1)*d'},
      step6:{dstep:'step6: Multiply the value of a by 2, and add the result to the value gotten from step 4',hint:'2 * a + (n - 1) * d.'},
      step7:{dstep:'step7:Divide the number of terms n by 2, and multiply it by the value gotten from step 6',hint:"n/2(2*a + (n-1) * d). "}
    }
  },
  answer:{step1:2,
          step2:1,
          step3:20,
          step4:19,
          step5:25,
          step6:23,
          step7:230
        },
  level:3
},]
let score =parseInt(document.getElementById('score').innerText)
let question = document.getElementById("question");
let steptext = document.getElementById("steptext");
let gcountdown = document.getElementById("gcountdown");
let left = document.getElementById("left");
let submit = document.getElementById("submit");
let submit2 = document.getElementById("submit2");
let submit3 = document.getElementById("submit3");
let submit4 = document.getElementById("submit4");
let submit5 = document.getElementById("submit5");
let submit6 = document.getElementById("submit6");
let submit7 = document.getElementById("submit7");
let hint = document.getElementById("hint");
let hint2 = document.getElementById("hint2");
let hint3 = document.getElementById("hint3");
let hint4 = document.getElementById("hint4");
let hint5 = document.getElementById("hint5");
let hint6 = document.getElementById("hint6");
let hint7 = document.getElementById("hint7");
hint.classList.add('hidden')
submit.classList.add('hidden')
hint2.classList.add('hidden')
submit2.classList.add('hidden')
hint3.classList.add('hidden')
submit3.classList.add('hidden')
hint4.classList.add('hidden')
submit4.classList.add('hidden')
hint5.classList.add('hidden')
submit5.classList.add('hidden')
hint6.classList.add('hidden')
submit6.classList.add('hidden')
hint7.classList.add('hidden')
submit7.classList.add('hidden')
let answer=document.getElementById("answer");
let answer2=document.getElementById("answer2");
let answer3=document.getElementById("answer3");
let answer4=document.getElementById("answer4");
let answer5=document.getElementById("answer5");
let answer6=document.getElementById("answer6");
let answer7=document.getElementById("answer7");
answer.classList.add('hidden')
answer2.classList.add('hidden')
answer3.classList.add('hidden')
answer4.classList.add('hidden')
answer5.classList.add('hidden')
answer6.classList.add('hidden')
answer7.classList.add('hidden')

// let level =document.getElementById('level');

let questiondetail;
let answerdetail
console.log(question)
questionBank.map((data)=>{
  
  if(data.level === 1 ){
    questiondetail=data
    question.innerText = data.question.dquestion
  }
})
steptext.innerText="Get ready to input the first step"
console.log(questiondetail)
console.log(questiondetail.answer.step1)

let timerr; // variable to hold the interval ID for countdown timer

const addeyes=()=>{
  let gget=document.getElementById(`piece${randomuserposition}`) 
  const parentdiv=gget.parentNode
  const img=document.createElement('img')
  img.setAttribute('class','eyes')
  img.setAttribute('src','./eyes.jpg')
  parentdiv.append(img)
  setTimeout(()=>{
    parentdiv.removeChild(img)
  },3000)
}

let result= document.getElementById('dresult');
let dresultcontainer=document.getElementById('dresultcontainer');

const displayresult=(rvalue)=>{
  dresultcontainer.classList.remove('hidden')
  dresultcontainer.classList.add('dresultcontainer')
  if (rvalue === "wrong"){
    result.innerText="wrong"
    result.classList.add("red")
  }
  if(rvalue === "correct"){
    result.innerText="correct"
    score=score+10
    document.getElementById("score").innerText = score;
    result.classList.add("green")
  }
  
  setTimeout(()=>{
    dresultcontainer.classList.remove('dresultcontainer');
    dresultcontainer.classList.add('hidden');
  },3000)
}

// Function to pause the countdown timer
async function pauseCountdown() {
  left.classList.add('overlay')
  // hint.classList.remove("hidden")
  // submit.classList.remove("hidden")
  // answer.classList.remove('hidden')
  addeyes()  
  clearInterval(timerrinterval); // Stop the interval
  console.log("Countdown paused!");
  
}

// Function to resume the countdown timer
function resumeCountdown(timerr) {
  left.classList.remove('overlay')
  hint.classList.add("hidden")
  submit.classList.add("hidden")
  answer.classList.add('hidden')
  hint2.classList.add("hidden")
  submit2.classList.add("hidden")
  answer2.classList.add('hidden')
  hint3.classList.add("hidden")
  submit3.classList.add("hidden")
  answer3.classList.add('hidden')
  hint4.classList.add("hidden")
  submit4.classList.add("hidden")
  answer4.classList.add('hidden')
  hint5.classList.add("hidden")
  submit5.classList.add("hidden")
  answer5.classList.add('hidden')
  hint6.classList.add("hidden")
  submit6.classList.add("hidden")
  answer6.classList.add('hidden')
  hint7.classList.add("hidden")
  submit7.classList.add("hidden")
  answer7.classList.add('hidden')
  startCountdown(timerr); // Resume the countdown with remaining time
  console.log("Countdown resumed!");
}

// Function to start the countdown timer
function startCountdown(durationInSeconds) {
  var intervalId = setInterval(fivesecondinterval, 5000);
    let timerr = durationInSeconds;
   
    // Update the timer every second
    timerrinterval = setInterval(function() {
        let minutes = Math.floor(timerr / 60);
        let seconds = timerr % 60;
        // Display the timer
        gcountdown.innerText= `${minutes}m ${seconds }s`
        console.log(minutes + "m " + seconds + "s");
        console.log(timerr)
        let rtvalue;
        // Decrease the timer
        if(timerr <= 300  ){
                timerr--;
              }
              
        if (timerr === 280){
          steptext.innerText=questiondetail.question.steps.step1.dstep
          hint.classList.remove("hidden")
          submit.classList.remove("hidden")
          answer.classList.remove('hidden')
          submit.addEventListener("click",(event)=>{
            console.log("answerrrrrrrrrr"+ answer.value)
            if(answer.value === ""){
             alert("input your answer")
            }
            if(Number(answer.value) === questiondetail.answer.step1){
              rtvalue='correct'
              displayresult(rtvalue)
              console.log('correct')
            }
            if(Number(answer.value)!== questiondetail.answer.step1){
              document.getElementById(randomuserposition).innerHTML = "";
              rtvalue ='wrong'
              displayresult(rtvalue)
              console.log('wrong')
            }
            seconds
           
            event.preventDefault();
           })

          console.log("first time reached");
          setTimeout (pauseCountdown, 0); 
          setTimeout(()=>{
          resumeCountdown(timerr)
          },30000)
          answer.value =''
          }
      
      if(timerr === 250){
        steptext.innerText=questiondetail.question.steps.step2.dstep
        hint2.classList.remove("hidden")
          submit2.classList.remove("hidden")
          answer2.classList.remove('hidden')
        submit2.addEventListener("click",(event)=>{
          console.log("answerrrrrrrrrr"+ answer2.value)
          if(answer2.value ===""){
           alert("input your answer")
          }
          if(Number(answer2.value) === questiondetail.answer.step2){
            rtvalue='correct'
            displayresult(rtvalue)
            console.log('correct')
          }
          if(Number(answer2.value)!== questiondetail.answer.step2){
            document.getElementById(randomuserposition).innerHTML = "";
            rtvalue ='wrong'
            displayresult(rtvalue)
            console.log('wrong')
          }
          seconds
          answer2.value =''
          event.preventDefault();
         })
        console.log('second timer reached')
        setTimeout (pauseCountdown, 0); 
        setTimeout(()=>{
        resumeCountdown(timerr)
        },30000)
        
          }
      if(timerr === 220){
        steptext.innerText=questiondetail.question.steps.step3.dstep
        hint3.classList.remove("hidden")
          submit3.classList.remove("hidden")
          answer3.classList.remove('hidden')
        submit3.addEventListener("click",(event)=>{
          console.log("answerrrrrrrrrr"+ answer3.value)
          if(answer3.value === ""){
           alert("input your answer")
          }
          if(Number(answer3.value) === questiondetail.answer.step3){
            rtvalue='correct'
            displayresult(rtvalue)
            console.log('correct')
          }
          if(Number(answer3.value)!== questiondetail.answer.step3){
            document.getElementById(randomuserposition).innerHTML = "";
            rtvalue ='wrong'
            displayresult(rtvalue)
            console.log('wrong')
          }
          seconds
          answer3.value =''
          event.preventDefault();
         })
        console.log('Third timer reached')
        setTimeout (pauseCountdown, 0); 
        setTimeout(()=>{
        resumeCountdown(timerr)
        },30000)  
      }
      if(timerr === 190){
        steptext.innerText=questiondetail.question.steps.step4.dstep
        hint4.classList.remove("hidden")
          submit4.classList.remove("hidden")
          answer4.classList.remove('hidden')
        submit4.addEventListener("click",(event)=>{
          console.log("answerrrrrrrrrr"+ answer4.value)
          if(answer4.value === ""){
           alert("input your answer")
          }
          if(Number(answer4.value) === questiondetail.answer.step4){
            rtvalue='correct'
            displayresult(rtvalue)
            console.log('correct')
          }
          if(Number(answer4.value)!== questiondetail.answer.step4){
            document.getElementById(randomuserposition).innerHTML = "";
            rtvalue ='wrong'
            displayresult(rtvalue)
            console.log('wrong')
          }
          seconds
          answer4.value =''
          event.preventDefault();
         })
        console.log('fourth timer reached')
        setTimeout (pauseCountdown, 0); 
        setTimeout(()=>{
        resumeCountdown(timerr)
        },30000)
        
          }
      if(timerr === 160){
        steptext.innerText=questiondetail.question.steps.step5.dstep
        hint5.classList.remove("hidden")
          submit5.classList.remove("hidden")
          answer5.classList.remove('hidden')
        submit5.addEventListener("click",(event)=>{
          console.log("answerrrrrrrrrr"+ answer5.value)
          if(answer5.value === ""){
           alert("input your answer")
          }
          if(Number(answer5.value) === questiondetail.answer.step5){
            rtvalue='correct'
            displayresult(rtvalue)
            console.log('correct')
          }
          if(Number(answer5.value)!== questiondetail.answer.step5){
            document.getElementById(randomuserposition).innerHTML = "";
            rtvalue ='wrong'
            displayresult(rtvalue)
            console.log('wrong')
          }
          seconds
          answer5.value =''
          event.preventDefault();
         })
        console.log('fifth timer reached')
        setTimeout (pauseCountdown, 0); 
        setTimeout(()=>{
        resumeCountdown(timerr)
        },30000)
            
        }
      if(timerr === 130){
        steptext.innerText=questiondetail.question.steps.step6.dstep
        hint6.classList.remove("hidden")
          submit6.classList.remove("hidden")
          answer6.classList.remove('hidden')
        submit6.addEventListener("click",(event)=>{
          console.log("answerrrrrrrrrr"+ answer6.value)
          if(answer6.value === ""){
           alert("input your answer")
          }
          if(Number(answer6.value) === questiondetail.answer.step6){
            rtvalue='correct'
            displayresult(rtvalue)
            console.log('correct')
          }
          if(Number(answer6.value)!== questiondetail.answer.step6){
            document.getElementById(randomuserposition).innerHTML = "";
            rtvalue ='wrong'
            displayresult(rtvalue)
            console.log('wrong')
          }
          seconds
          answer6.value =''
          event.preventDefault();
         })
        console.log('sixth timer reached')
        setTimeout (pauseCountdown, 0); 
        setTimeout(()=>{
        resumeCountdown(timerr)
        },30000)  
        }
      if(timerr === 100){
        steptext.innerText=questiondetail.question.steps.step7.dstep
        hint7.classList.remove("hidden")
          submit7.classList.remove("hidden")
          answer7.classList.remove('hidden')
        submit7.addEventListener("click",(event)=>{
          console.log("answerrrrrrrrrr"+ answer7.value)
          if(answer7.value === ""){
           alert("input your answer")
          }
          if(Number(answer7.value) === questiondetail.answer.step7){
            rtvalue='correct'
            displayresult(rtvalue)
            console.log('correct')
          }
          if(Number(answer7.value)!== questiondetail.answer.step7){
            document.getElementById(randomuserposition).innerHTML = "";
            rtvalue ='wrong'
            displayresult(rtvalue)
            console.log('wrong')
          }
          seconds
          answer7.value =''
          event.preventDefault();
         })
        console.log('seventh timer reached')
        setTimeout (pauseCountdown, 0); 
        setTimeout(()=>{
        resumeCountdown(timerr)
        },30000)        
      }
      // }
      // If the timer reaches 0, stop the countdown
        if (timerr < 0) {
          var dataToPass = { name: dname ,score:score};
          // Set data into session storage
          sessionStorage.setItem('myData', JSON.stringify(dataToPass));
          window.location.href= "opp.html"
            clearInterval(timerrinterval);
            console.log("Countdown complete!");
        }
    }, 1000);
}

// Example usage:
startCountdown(300); // Start a countdown for 5 minutes
// setTimeout(pauseCountdown, 10000); // Pause the countdown after 10 seconds
// setTimeout(resumeCountdown, 20000); // Resume the countdown after 20 seconds




function checkIfGameShouldEnd(score) {
  var playerPieceCount = 0;
  var botPieceCount = 0;

  // Count the number of player and bot pieces
  for (var i = 0; i < map.length; i++) {
      if (map[i] === 8) { // Player's piece
          playerPieceCount++;
      } else if (map[i] === 9) { // Bot's piece
          botPieceCount++;
      }
  }

  // Check if either count is zero
  if (botPieceCount === 0) {
      // Trigger action to exit the game (e.g., display a message or redirect to another page)
      alert("Game Over!");
      var dataToPass = { name: dname ,score:score};
      // Set data into session storage
      sessionStorage.setItem('myData', JSON.stringify(dataToPass));
      window.location.href= "opp.html"
      // Here you can add code to reset the game or perform any other necessary actions
  }
  if (playerPieceCount === 0){
    var dataToPass = { name: dname ,score:score};
    // Set data into session storage
    sessionStorage.setItem('myData', JSON.stringify(dataToPass));
    window.location.href= "won.html"
  }
}


setInterval(()=>{
  checkIfGameShouldEnd();
},100)














function checkFire(id){
 
  //Can fire more
  if( ( map[Number(id)-9] == 9 ) && ( map[Number(id)-18] == 1 ) ) //Up left
  
  {
    console.log(id)
    playing = 1;
    canFire = true;
  }else{
    if( ( map[Number(id)-7] == 9 ) && ( map[Number(id)-14] == 1 ) ) //Up right
    {
      playing = 1;
      canFire = true;
      console.log(id)
    }else{
      if( ( map[Number(id)+7] == 9 ) && ( map[Number(id)+14] == 1 ) ) //Down left
      {
        playing = 1;
        canFire = true;
        console.log(id)
      }else{
        if( ( map[Number(id)+9] == 9 ) && ( map[Number(id)+18] == 1 ) ) //Down right
        {
          playing = 1;
          canFire = true;
          console.log(id)
        }else{
          playing = 0;
          canFire = false;
          botCheckCanFire;
          console.log(id)
        }
      }
    }
  }
  console.log(id)
  console.log(map[Number(id)+7]);
  //Fire a piece

}

function movePiece(id){
  checkIfGameShouldEnd();
  console.log(id);
}

function getId(id){
  id_OnDrop = id;
  console.log(id_OnDrop)
}

//Functions Drop end Drag
  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  function drop(ev, id) {
    var i = id;
   
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    if( playing == 1 ) {
      if ( (map[i] == 1) && ((id_OnDrop - id == 9) || (id_OnDrop - id == 7))) { //Up
        map[id_OnDrop] = 1;
        map[i] = 8;
        console.log(" mapa: " + map[id_OnDrop] + " j: " + id_OnDrop);
        ev.target.appendChild(document.getElementById(data));
        playing = 0;
        botCheckCanFire;
      }else{
        if ( (map[i] == 1) && ((id_OnDrop - id == 18) && (map[Number(id_OnDrop) - 9] == 9 ) )) { //Up left
          map[id_OnDrop] = 1;
          map[Number(id_OnDrop)-9] = 1;
          map[i] = 8;
          console.log(" mapa: " + map[id_OnDrop] + " j: " + id_OnDrop);
          ev.target.appendChild(document.getElementById(data));
          checkFire(id);
        }else{
          if ( (map[i] == 1) && ((id_OnDrop - id == 14) && (map[Number(id_OnDrop) - 7] == 9 ) )) { //Up right
            map[id_OnDrop] = 1;
            map[Number(id_OnDrop)-7] = 1;
            map[i] = 8;
            console.log(" mapa: " + map[id_OnDrop] + " j: " + id_OnDrop);
            ev.target.appendChild(document.getElementById(data));
            checkFire(id);
          }else{
            if ( (map[i] == 1) && ((id_OnDrop - id == -18) && (map[Number(id_OnDrop) + 9] == 9 ) )) { //Down right
              map[id_OnDrop] = 1;
              map[Number(id_OnDrop)+9] = 1;
              map[i] = 8;
              console.log(" mapa: " + map[id_OnDrop] + " j: " + id_OnDrop);
              ev.target.appendChild(document.getElementById(data));
              checkFire(id);
            }else{
              if ( (map[i] == 1) && ((id_OnDrop - id == -14) && (map[Number(id_OnDrop) + 7] == 9 ) )) { //Down left
                map[id_OnDrop] = 1;
                map[Number(id_OnDrop)+7] = 1;
                map[i] = 8;
                console.log(" mapa: " + map[id_OnDrop] + " j: " + id_OnDrop);
                ev.target.appendChild(document.getElementById(data));
                checkFire(id);
              }
            }
          }
        }
      }

    }
    botCheckCanFire;
    clearPieces();
    console.log(id);
  }
//Actions of Bot
//------------------------------------------------------------------------------

function botFirePiece(i, direction, time){
 
    if (direction == "downLeft") {
      document.getElementById(i).innerHTML = "";
      document.getElementById(i + 7).innerHTML = "";
      document.getElementById(i + 14).innerHTML = "<img src='WhitePiece.png' class='img' id=piece" + i + ">";
      map[i] = 1;
      map[i + 7] = 1;
      map[i + 14] = 9;
      playing = 1;
      canMove = false; //Don't fire more
    } else {
      if (direction == "downRight") {
        document.getElementById(i).innerHTML = "";
        document.getElementById(i + 9).innerHTML = "";
        document.getElementById(i + 18).innerHTML = "<img src='WhitePiece.png' class='img' id=piece" + i + ">";
        map[i] = 1;
        map[i + 9] = 1;
        map[i + 18] = 9;
        playing = 1;
        canMove = false; //Don't fire more
      } else {
        if (direction == "upLeft") {
          document.getElementById(i).innerHTML = "";
          document.getElementById(i - 9).innerHTML = "";
          document.getElementById(i - 18).innerHTML = "<img src='WhitePiece.png' class='img' id=piece" + i + ">";
          map[i] = 1;
          map[i - 9] = 1;
          map[i - 18] = 9;
          playing = 1;
          canMove = false; //Don't fire more
        } else {
          if (direction == "upRight") {
            document.getElementById(i).innerHTML = "";
            document.getElementById(i - 7).innerHTML = "";
            document.getElementById(i - 14).innerHTML = "<img src='WhitePiece.png' class='img' id=piece" + i + ">";
            map[i] = 1;
            map[i - 7] = 1;
            map[i - 14] = 9;
            playing = 1;
            canMove = false; //Don't fire more
          }
        }
      }
    }

}

var botCheckCanFire = setInterval(function botCheckCanFire(){ //Gonna check if can fire some piece
  if( playing == 0 ) //Bot is playing
  {
  for( var i = 0; i <= 63; i++ )
  {
    if( ( map[i] == 9 )) //Found some piece
    {
      if( ( map[i+7] == 8 ) && ( map[i+14] == 1 ) ) //Down left
      {
        botFirePiece(i, "downLeft");
      }else{
        if( ( map[i+9] == 8 ) && ( map[i+18] == 1 ) ) //Down right
        {
          botFirePiece(i, "downRight");
        }else{
          if( ( map[i-9] == 8 ) && ( map[i-18] == 1 ) ) //Up left
          {
            botFirePiece(i, "upLeft");
          }else{
            if( ( map[i-7] == 8 ) && ( map[i-14] == 1 ) ) //Up right
            {
              botFirePiece(i, "upRight");
            }else{ //Can't fire.

            }
          }
        }
      }
    }
  }
    if( playing == 0 ) {
      botCanMove();
    }
}
}, 1000);

function botCanMove(){
  var condition = true;
  var cont = 0;
  var piece = 0;
  console.log("HUMMMMMMMMMMMMMMM");
  do{
    piece = Math.floor(Math.random() * 64); //Generate a random piece to move


    if( map[piece] == 9 ) //Simple movement
    {
      var direction = Math.floor(Math.random() * 2);
      console.log("direction --->"+direction);
      if( direction == 0 ) //Left
      {

        if( (map[piece+7] == 1) && ( (map[piece+14] == 8) && map[piece+21] == 8 ) )
        {
          document.getElementById(piece).innerHTML = "";
          document.getElementById(piece+7).innerHTML = "<img src='WhitePiece.png' class='img' id=piece"+piece+">";
          map[piece] = 1
          map[piece+7] = 9;
          playing = 1;
          console.log("can down left-->"+piece);
          condition = false;
          break;
        }
        if( map[piece+7] == 1 ) //Down left
        {
          document.getElementById(piece).innerHTML = "";
          document.getElementById(piece+7).innerHTML = "<img src='WhitePiece.png' class='img' id=piece"+piece+">";
          map[piece] = 1
          map[piece+7] = 9;
          playing = 1;
          console.log("can down left-->"+piece);
          condition = false;
          break;
        }else {
          if (map[piece + 9] == 1) //Down right
          {
            document.getElementById(piece).innerHTML = "";
            document.getElementById(piece + 9).innerHTML = "<img src='WhitePiece.png' class='img' id=piece" + piece + ">";
            map[piece] = 1
            map[piece + 9] = 9;
            playing = 1;
            console.log("can down right-->" + piece);
            condition = false;
            break;
          }
        }
      }else{

        if( (map[piece+9] == 1) && ( (map[piece+18] == 8) && map[piece+27] == 8 ) )
        {
          document.getElementById(piece).innerHTML = "";
          document.getElementById(piece+9).innerHTML = "<img src='WhitePiece.png' class='img' id=piece"+piece+">";
          map[piece] = 1
          map[piece+9] = 9;
          playing = 1;
          console.log("can down right 1-->"+piece);
          condition = false;
          break;
        }


        if( map[piece+9] == 1 ) //Down left
        {
          document.getElementById(piece).innerHTML = "";
          document.getElementById(piece+9).innerHTML = "<img src='WhitePiece.png' class='img' id=piece"+piece+">";
          map[piece] = 1
          map[piece+9] = 9;
          playing = 1;
          console.log("can down right 2-->"+piece);
          condition = false;
          break;
        }else {
          if (map[piece + 7] == 1) //Down right
          {
            document.getElementById(piece).innerHTML = "";
            document.getElementById(piece + 7).innerHTML = "<img src='WhitePiece.png' class='img' id=piece" + piece + ">";
            map[piece] = 1
            map[piece + 7] = 9;
            playing = 1;
            console.log("can down right 3-->" + piece);
            condition = false;
            break;
          }
        }
      }

    }//End Simple Movement
  }while( condition );
}







//my modification
// function getPlayerPiecePositions() {
//   var playerPiecePositions = [];

//   for (var i = 0; i < map.length; i++) {
//     if (map[i] === 1) {
//       // Exclude positions where the value is 9 (bot's piece)
//       if (map[i + 7] !== 9 && map[i + 9] !== 9) {
//         playerPiecePositions.push(i);
//       }
//     }
//   }

//   return playerPiecePositions;
// }

// var playerPositions = getPlayerPiecePositions();
// console.log("player position" + playerPositions);

