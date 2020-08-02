//variables
var registrationForm;
var loginForm;
var game;
var wallsGroup;
var wallsH = [];
var wallsV = [];
var hour;
var gameState = 0;
var logo;

function setup() {
  logo = createImg("logo.jpg");
  //creating the forms and the game
  console.log(windowHeight);
  user = new User();
  registrationForm = new RegistrationForm();
  loginForm = new LoginForm();
  wallsGroup = new Group();
  game = new Game();
  //popupWindow = window.open('Dialog.html','name','height=300,left=550,menubar=no,resizable=no,scrollbars=no,status=no,titlebar=no,toolbar=no,top=200,width=400');
}

function draw() {  
  logo.position(windowWidth-1561,windowHeight-775);

  if(gameState === 0){
    registrationForm.display();
  }

  if(gameState === 1){
    loginForm.display();
  }
  
  if(gameState === 2){
    getTime();
    game.play();
  }
}

//use arrow keys to move the player sprite
function keyPressed(){
  if(keyCode === LEFT_ARROW){
      game.player.velocityX = -4;
      game.player.velocityY = 0;
    }
    if(keyCode === RIGHT_ARROW){
      game.player.velocityX = 4;
      game.player.velocityY = 0;
    }
    if(keyCode === UP_ARROW){
      game.player.velocityX = 0;
      game.player.velocityY = -4;
    }
    if(keyCode === DOWN_ARROW){
      game.player.velocityX = 0;
      game.player.velocityY = 4;
    }
}

//function to get time
async function getTime(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  hour = datetime.slice(11,13);
}