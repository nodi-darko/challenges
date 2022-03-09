
  let max = 100;
  let points = 0;
  let anzahlMoeglichkeiten = 4;
  let whichOne;
  let time = 10;
  let ansButtons = [document.getElementById("ergebnis"), document.getElementById("button1"), document.getElementById("button2"), document.getElementById("button3")];
  let which = 5;

  setTimeout(tacts, 1000);


  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(3));
  // expected output: 0, 1 or 2
  
  console.log(getRandomInt(1));
  // expected output: 0
  
  console.log(Math.random());
  // expected output: a number from 0 to <1
  
  askNow();

  function askNow(){
  time = 10;
  let x = getRandomInt(max);
  let y = getRandomInt(max);

  whichOne = getRandomInt(anzahlMoeglichkeiten);

  
  let solutions = []

  for (let i = 0; i < anzahlMoeglichkeiten; i ++){
    solutions.push (getRandomInt(max*2))
  }

  
  solutions.splice (whichOne, 1, x+y)

  document.getElementById("numberOne").innerHTML   = x +"+"+ y;

  document.getElementById("numberOne").style.fontSize = "32px";


  ansButtons[0].innerHTML   = solutions [0];
  ansButtons[1].innerHTML   = solutions [1];
  ansButtons[2].innerHTML   = solutions [2];
  ansButtons[3].innerHTML   = solutions [3];
  }

  document.getElementById("numberOfPoints").innerHTML   = "Punkte: " + points;
  document.getElementById("numberOfPoints").style.fontSize = "32px";  

  function onClick(which){
    which = which;
    if (whichOne == which){
      points ++;
      time = 10;
      ansButtons[whichOne].style.backgroundColor = "green";
      setTimeout(delay, 2000);
      setTimeout(askNow, 2000);
    }else{
      points --;
      time = 10;
        
      ansButtons[whichOne].style.backgroundColor = "green";
      ansButtons[which].style.backgroundColor = "red";
      setTimeout(delay, 2000);
      setTimeout(askNow, 2000);
    }
    document.getElementById("numberOfPoints").innerHTML   = "Punkte: " + points;
    document.getElementById("numberOfPoints").style.fontSize = "32px";  
    
  }

  function tacts(){
    time --;
    document.getElementById("time").innerHTML   = "Zeit: " + time;
    document.getElementById("time").style.fontSize = "32px";  
    if(time == 0){
      points --;
      document.getElementById("numberOfPoints").innerHTML   = "Punkte: " + points;
      document.getElementById("numberOfPoints").style.fontSize = "32px";    
      time = 10;
    }
    setTimeout(tacts, 1000);
  }


function delay(){
  ansButtons[whichOne].style.backgroundColor = "grey";
  ansButtons[which].style.backgroundColor = "grey";
}