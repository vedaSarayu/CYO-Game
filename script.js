//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0;

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(20);
  noStroke();

  // Set up the home screen
  background("#caf0f8");
  text("₊˚⊹ Ship Wreck ₊˚⊹♡ \nYou and your friends go on an all expense paid cruise \n for your senior trip. Sadly the ship hits a glacier and sinks.\n Choose the right option to survive and go home!!\n⭐ Are you ready? ⭐\nClick enter to begin!", width / 2, height / 2 - 100);
  color("white")

  // Create buttons for all screens
  enterButton = new Sprite(width/2, height/2+100);
  a1Button = new Sprite(-200, -200);
  a2Button = new Sprite(-50, -50);
  b1Button = new Sprite(-100, -100);
  b2Button = new Sprite(-150, -150);
  
}

/* DRAW LOOP REPEATS */
function draw() {
  // Display enter button
  enterButton.w = 100;
  enterButton.h = 50;
  enterButton.collider = 'k';
  enterButton.color = "#D6BCD9";
  enterButton.text = "Enter";
 

  // Check enter button
   if(enterButton.mouse.presses()){
     
    print("pressed");
    showScreen1();
    screen = 1
  }

  if (screen == 1){
    if(a1Button.mouse.presses()){
      print("screen 2");
      showScreen2();
      screen = 2;  
    }
    else if(a2Button.mouse.presses()){
      print("screen 5");
      showScreen5();
      screen = 5;
    }
  }
    
  else if(screen == 2){
    if(b1Button.mouse.presses()){
      print("screen 3");
      showScreen3();
      screen = 3;
    }
    else if(b2Button.mouse.presses()){
      print("screen 4");
      showScreen4();
      screen = 4;
    }
  }
  
}

/* FUNCTIONS TO DISPLAY SCREENS */

function showScreen1(){
  
  background("#fae1dd");
  text("\n🚢🚢🚢🚢\nOH NO!!\n Your ship is going down. Hurry and choose what to save. 🚢🚢",width/2,height/2-100); //EDIT HERE
  enterButton.pos = { x:-100, y:-100 };
  // Add A1 button
  a1Button.pos = { x: width/2 - 100, y: height/2 +100 }
  a1Button.w = 140;
  a1Button.h = 50;
  a1Button.collider = 'k';
  a1Button.color = "#fec5bb";
  a1Button.text = "Compass";

  // Add A2 button
  a2Button.pos = { x: width/2 + 100 , y: height/2 +100 }
  a2Button.w = 140;
  a2Button.h = 50;
  a2Button.collider = 'k';
  a2Button.color = "#fec5bb";
  a2Button.text = "Map";
  
}

function showScreen2(){
  
  background("#ffedd8");
  text("🏞️🏞️🏞️🏞️🏞️\nYou chose to save the compass. Lucklily on of your friends\n on the ship knows how to\n use it. You jump out of the ship with your friends in\n life rafts. In the distance you see an island on the right and \nwhat seems to be a ship on the left. \nWhich way do you and your friends go?   ⭐",width/2,height/2-100);
  //move a buttons off
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -50, y: -50 };
  
  //add b1 button
  b1Button.pos = { x: width / 2 - 120, y: height / 2 + 100 };
  b1Button.w = 150;
  b1Button.h = 50;
  b1Button.collider = "k";
  b1Button.color = "#e7c8a0";
  b1Button.text = "the Island";
  
  //add b2 Button
  b2Button.pos = { x: width / 2 + 120, y: height / 2 + 100 };
  b2Button.w = 150;
  b2Button.h = 50;
  b2Button.collider = "k";
  b2Button.color = "#e7c8a0";
  b2Button.text = "The ship";
  
}

function showScreen3(){
  
  background("#caf0f8");
  text("✨✨✨✨✨\n There was a telivision shooting occuring at the\n island. You and your friends were rescued by the team, and\n are soon taken back home! \n Congrats on surviving a shipwreck!\nNow you are able to safely hed back home!\n\n° ˛ ° ˚* __Π_____*☽*˚ ˛\n     ✩ ˚˛˚*/______/__＼。✩˚ ˚˛\n˚ ˛˚˛˚｜ 田田｜門｜ ˚ ˚\n´´ ̛ ̛ ´´ ´´ ´´ ̛ ̛ ´´ ´´ ´´ ̛ ̛ ´´ ´´", width / 2, height / 2 - 100);
  
  //move buttons off 
  b1Button.pos = { x: -100, y: -100 };
  b2Button.pos = { x: -150, y: -150 };
  
}

function showScreen4() {
  
  background("#e4f7c2");
  text("\n\n😢😢😢😢😢\nThe ship was actually a pirate ship.\nYou and your friends had to walk the plank or become pirates.\n😔😔😔😔😔", width / 2, height / 2 - 100);
  
  //move buttons off 
  b1Button.pos = { x: -100, y: -100 };
  b2Button.pos = { x: -150, y: -150 };
  
}

function showScreen5(){
  
  background("#caf0f8");
  text("\n😢😢😢😢😢\n The map got wet while you were\n escaping the ship and was absolutely useless.\n You got lost and died.", width / 2, height / 2 - 100);
    
  // move buttons off 
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -50, y: -50 };
        
}