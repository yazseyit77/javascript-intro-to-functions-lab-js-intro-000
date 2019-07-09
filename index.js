function shout(string) {
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}


var lowercase = "hello!";
var string = "I can\'t hear you!";

function sayHiToGrandma(string){
  if(string.toLowerCase() === lowercase){
    return string;
  }
}

var uppercase = "HELLO!";

function sayHiToGrandma(string){
  if(uppercase.toUpperCase() === uppercase){
    return "YES INDEED!";
  }
}

var luv = "I love you, Grandma.";
function sayHiToGrandma(string){
  if(luv === "I love you, Grandma."){
    return "I love you, too.";
  }
}
