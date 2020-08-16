//global variables to be used here and in UI.js
var ui;
var texture1;
var acousticGuitar, forestBirds, jazz, koyal, multipleBells, nightingale, ocean, piano, rain, singleBell, white, wind, windChime;

//preloading all the sounds
function preload() {
  texture1 = loadImage('Images/Texture1.png');

  acousticGuitar = loadSound('Sounds/acousticGuitar.mp3');
  forestBirds = loadSound('Sounds/forestBirds.mp3');
  jazz = loadSound('Sounds/jazz.mp3');
  koyal = loadSound('Sounds/koyal.mp3');
  multipleBells = loadSound('Sounds/multipleBells.mp3');
  nightingale = loadSound('Sounds/nightingale.mp3');
  ocean = loadSound('Sounds/ocean.wav');
  piano = loadSound('Sounds/piano.mp3');
  rain = loadSound('Sounds/rain.mp3');
  singleBell = loadSound('Sounds/singleBell.mp3');
  white = loadSound('Sounds/whiteSound.mp3');
  wind = loadSound('Sounds/wind.mp3');
  windChime = loadSound('Sounds/windchime.mp3');
}

function setup() {
  //the canvas fits for any device screen
  createCanvas(displayWidth,displayHeight);

  //creating new object from the UI class
  ui = new UI;
}

function draw() {
  background(texture1); 
  //calling the display function for the object which has all the events
  ui.display();
}